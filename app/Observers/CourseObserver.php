<?php

namespace App\Observers;

use Exception;
use App\Models\User;
use App\Models\Course;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\Facades\Auth;
use Filament\Notifications\Notification;
use Filament\Notifications\Actions\Action;
use App\Filament\AdminDashboard\Resources\CourseResource;
use App\Filament\Tutor\Resources\CourseResource as TutorCourseResource;
use App\Filament\Moderator\Resources\CourseResource as ModeratorCourseResource;
use App\Notifications\CourseNotification;

class CourseObserver
{
    /**
     * Handle the Course "created" event.
     */
    public function created(Course $course): void
    {
        $users = User::whereIn('user_role', ['admin', 'moderator'])->get();
        foreach ($users as $receipent) {
            if ($receipent['user_role'] == 'admin') {
                Notification::make()
                    ->title('Ada bimbingan Baru nih!')
                    ->info()
                    ->body($course->order->order_code . ' telah masuk dalam daftar bimbingan!')
                    ->actions([
                        Action::make('View')->url(
                            CourseResource::getUrl('edit', ['record' => $course])
                        )
                    ])
                    ->sendToDatabase($receipent);
            } else if ($receipent['user_role'] == 'moderator') {
                Notification::make()
                    ->title('Ada bimbingan Baru nih!')
                    ->info()
                    ->body($course->order->order_code . ' telah masuk dalam daftar bimbingan!')
                    ->actions([
                        Action::make('View')->url(
                            ModeratorCourseResource::getUrl('edit', ['record' => $course], true, 'moderator')
                        )
                    ])
                    ->sendToDatabase($receipent);
            }
        }
    }

    /**
     * Handle the Course "updated" event.
     */
    public function updated(Course $course): void
    {
        $original = $course->getOriginal();
        $changes = $course->getChanges();
        $user = User::find($original['user_id']);
        $admin = User::where('user_role', 'admin')->get();
        foreach ($changes as $key => $value) {
            if ($course->wasChanged($key)) {
                // Lakukan sesuatu untuk setiap perubahan
                if ($original[$key] != $value) {
                    switch ($key) {
                        case "tutor_id":
                            $tutorOld = User::find($course->getOriginal($key));
                            $tutorNew = User::find($value);
                            if ($original['tutor_id'] == null) {
                                Notification::make()
                                    ->title('Bimbingan baru! ')
                                    ->body('Kamu mendapatkan bimbingan baru ' . $course->order->order_code . '. Ayo cek sekarang!')
                                    ->actions([
                                        Action::make('View')->url(
                                            TutorCourseResource::getUrl('edit', ['record' => $course], true, 'tutor'),
                                        )
                                    ])
                                    ->sendToDatabase($tutorNew);
                                //notifikasi ke user
                                Log::info($key);
                                $user->notify(new CourseNotification($course, $key));
                                $tutorNew->notify(new CourseNotification($course, $key));
                                foreach ($admin as $admin) {
                                    $admin->notify(new CourseNotification($course, $key));
                                }
                            } else {
                                Notification::make()
                                    ->title('Tutor Dirubah!')
                                    ->body('Tutor bimbingan ' . $course->order->order_code . '. telah dirubah menjadi ' . $tutorOld->name . '!')
                                    ->sendToDatabase($tutorOld);

                                // Hapus notifikasi tutor lama
                                try {
                                    $notificationToDelete = $tutorOld->notifications()
                                        ->where('data->body', 'LIKE', '%' . $course->order->order_code . '%')
                                        ->get();

                                    foreach ($notificationToDelete as $notification) {
                                        $notification->delete();
                                    }
                                    Log::info("Berhasil menghapus notifikasi pada {$tutorOld->name} order {$course->order->order_code}");
                                } catch (Exception $e) {
                                    Log::error($e);
                                }


                                Notification::make()
                                    ->title('Bimbingan baru! ')
                                    ->body('Kamu mendapatkan bimbingan baru ' . $course->order->order_code . '. Ayo cek sekarang!')
                                    ->actions([
                                        Action::make('View')->url(
                                            TutorCourseResource::getUrl('edit', ['record' => $course], true, 'tutor'),
                                        )
                                    ])
                                    ->sendToDatabase($tutorNew);

                                Log::info("Tutor kamu telah diganti dari $tutorOld->name menjadi $tutorNew->name");
                            }
                            break;
                        case "location":
                            Log::info("Lokasi kamu telah dirubah menjadi $value");
                            break;
                        case "date":
                            Log::info("Tanggal bimbinganmu telah dirubah mejadi $value");
                            break;
                        case "time":
                            if ($original['time'] == null) {
                                Log::info("Waktu bimbinganmu telah ditetapkan $value");
                            } else {
                                Log::info("Waktu bimbinganmu dirubah dari {$course->getOriginal($key)} menjadi $value");
                            }
                            break;
                    }
                } else {
                    Log::alert("Tidak ada perubahan pada atribut $key");
                }
            }
        }

        Notification::make()
            ->title('Anda melakukan perubahan')
            ->body('Anda telah melakukan perubahan pada ' . $course->order->order_code)
            ->info()
            ->actions([
                Action::make('view')->url(
                    CourseResource::getUrl('edit', ['record' => $course]),
                )
            ])
            ->sendToDatabase(auth()->user());;
    }

    /**
     * Handle the Course "deleted" event.
     */
    public function deleted(Course $course): void
    {
        //
    }

    /**
     * Handle the Course "restored" event.
     */
    public function restored(Course $course): void
    {
        //
    }

    /**
     * Handle the Course "force deleted" event.
     */
    public function forceDeleted(Course $course): void
    {
        //
    }
}
