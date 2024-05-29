<?php

namespace App\Http\Controllers\Tutor;

use App\Enums\CourseStatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\FileUpload;
use App\Models\Place;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProgressController extends Controller
{
    public function __construct()
    {
        // $this->middleware();
    }

    public function index(Request $request)
    {
        return Inertia::render('Auth/Tutor/Bimbingan/Progress', [
            'bimbingan' => function () use ($request) {
                $user = Auth::user();
                $perPage = (int)$request->input('perPage', 10);
                $search = $request->search;
                $tutor = $user->tutor()->where('is_moderator', false)->where('ongoing', '!=', CourseStatusEnum::SUCCESS)
                    ->when($search, function ($q) use ($search) {
                        $q->where(function ($q) use ($search) {
                            $q->where('time', 'LIKE', '%' . $search . '%')
                                ->orWhere('ongoing', 'LIKE', '%' . $search . '%')
                                ->orWhere('date', 'LIKE', '%' . $search . '%')
                                ->orWhereHas('user', function ($q) use ($search) {
                                    $q->where('username', 'LIKE', '%' . $search . '%');
                                })->orWhereHas('topic', function ($q) use ($search) {
                                    $q->where('topic', 'LIKE', '%' . $search . '%');
                                });
                        });
                    })->with('topic:id,topic', 'user:id,username', 'products:id,name')->paginate($perPage);
                // dd($tutor);
                return $tutor;
            },
        ]);
    }

    public function tutorApprove(Course $progress)
    {
        $user = Auth::user();
        if ($progress->tutor_id != $user->id) {
            return response()->json([
                'status' => 'Forbidden',
                'messages' => 'Anda Bukan Tutor untuk Bimbingan Ini',
            ], 403);
        }
        try {
            $progress->is_tutor = true;
            $progress->update();
            return redirect()->back();
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'Failed',
                'messages' => $th->getMessage(),
            ], 500);
        }
    }

    public function show(Course $progress)
    {
        $order = $progress->load('order', 'addOns', 'fileUploads', "user.profile", "topic", "products");
        // $files = FileUpload::where('course_id', $progress->parent_id)->get();
        $files = $progress->fileUploads;
        return Inertia::render('Auth/Tutor/Bimbingan/Progress/Show', [
            'order' => $order,
            'files' => $files,
        ]);
    }

    public function edit(Course $progress)
    {
        $order = $progress->load('order', 'addOns', 'fileUploads', "user.profile", "topic", "products");
        // $files = FileUpload::where('course_id', $progress->parent_id)->get();
        $files = $progress->fileUploads;
        return Inertia::render('Auth/Tutor/Bimbingan/Progress/Update', [
            'order' => $order,
            'files' => $files,
        ]);
    }

    public function update(Request $request, Course $progress)
    {
        try {
            // dd($request->all());
            $progress->update([
                'note' => $request->input('note'),
            ]);
            if ($request->has('document_deleted')) {
                $fileIdsToDelete = $request->input('document_deleted');
                $filesToDelete = FileUpload::whereIn('id', $fileIdsToDelete)->get();

                foreach ($filesToDelete as $fileToDelete) {
                    Storage::delete('file_uploads/' . $fileToDelete->filename);
                    $fileToDelete->delete();
                }
            }
            $documents = [];
            if ($request->hasFile('document')) {
                foreach ($request->file('document') as $idx => $file) {
                    $fileName = Str::random(8) . '-' . time() . '.' . $file->extension();
                    Storage::putFileAs('file_uploads', $file, $fileName);
                    $documents[$idx]['file_name'] = $fileName;
                    $documents[$idx]['size'] = $file->getSize();
                    $documents[$idx]['slug'] = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME));
                    $documents[$idx]['mime_type'] = $file->getMimeType();
                    $documents[$idx]['name'] = $file->getClientOriginalName();
                }
            }
            foreach ($documents as $document) {
                $file = new FileUpload();
                $file->course_id = $progress->id;
                $file->filename = $document['file_name'];
                $file->mime_type = $document['mime_type'];
                $file->path = 'file_uploads';
                $file->size = $document['size'];
                $file->user_id = auth()->user()->id;
                $file->name = $document['name'];
                $file->slug = $document['slug'];
                $file->save();
            }
            return response()->json(['status' => true, 'statusCode' => 200, 'message' => 'Update progress successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['status' => false, 'statusCode' => 500, 'message' => $e->getMessage()], 500);
        }
    }
}
