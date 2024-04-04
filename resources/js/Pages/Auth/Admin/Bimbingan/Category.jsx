import { useMemo, useState } from "react";
import { Link, router, useForm } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import GoalsDashboardTable from "@/Components/elements/GoalsDashboardTable";
import { FiEdit2, FiTrash2, FiPlus, FiEye } from "react-icons/fi";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import SubHeading from "../components/SubHeading";
import Dialog from "./Category/Dialog";
import moment from "moment";
import GoalsButton from "@/Components/GoalsButton";
import toast, { Toaster } from "react-hot-toast";
import { createPortal } from "react-dom";

export default function Category({ auth, data, message }) {
    const [showDialog, setShowDialog] = useState({
        create: false,
        edit: false,
        delete: false,
        show: false,
    });
    const {
        data: formData,
        setData: setFormData,
        post,
        put,
    } = useForm({
        id: "",
        name: "",
        slug: "",
        description: "N/A",
        is_visible: 0,
    });

    const callback = (method) => {
        router.visit(route('admin.bimbingan.category.index'), {
            only: ['data'],
            onSuccess: () => {
                if (method == 'create') {
                    toast.success('Create Success!');
                } else if (method == 'edit') {
                    toast.success('Edit Success!');
                } else {
                    toast.success('Delete Success!');
                }
            }
        });
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: "name",
                header: "Nama Kategori",
                size: 400,
            },
            {
                accessorKey: "is_visible",
                header: "Visibilitas",
                size: 50,
                Cell: ({ cell }) => cell.getValue() ? <FaRegCircleCheck className="text-[1.25vw] text-green-500" /> : <FaRegCircleXmark className="text-[1.25vw] text-red-500" />,
            },
            {
                accessorFn: (row) => moment(row.updated_at).format('DD/MM/YYYY'),
                header: "Tangal Update",
                size: 100,
            },
            {
                accessorKey: "id",
                header: "Action",
                size: 50,

                Cell: ({ cell }) => (
                    <ul className="flex gap-[.8vw] w-fit">
                        <li>
                            <button>
                                <FiEdit2
                                    className="text-[1.2vw] text-secondary"
                                    onClick={() => {
                                        setShowDialog({ ...showDialog, edit: true });
                                        setFormData({
                                            ...formData,
                                            id: cell.row.original.id,
                                            name: cell.row.original.name,
                                            slug: cell.row.original.slug,
                                            is_visible: cell.row.original.is_visible,
                                        });
                                    }}
                                />
                            </button>
                        </li>
                        <li>
                            <Link
                                method="DELETE"
                                href={`/admin/bimbingan/category/${cell.getValue()}`}
                            >
                                <FiTrash2 className="text-[1.2vw] text-danger-40" />
                            </Link>
                        </li>
                        <li>
                            <button>
                                <FiEye
                                    className="text-[1.2vw] text-gray-400"
                                    onClick={() => {
                                        setShowDialog({ ...showDialog, show: true });
                                        setFormData({
                                            ...formData,
                                            id: cell.row.original.id,
                                            name: cell.row.original.name,
                                            slug: cell.row.original.slug,
                                            is_visible: cell.row.original.is_visible,
                                        });
                                    }}
                                />
                            </button>
                        </li>
                    </ul>
                ),
            },
        ],
        []
    );

    const categories = data.data;

    return (
        <DashboardLayout
            title="Bimbingan"
            subtitle="Category"
            role="admin"
            auth={auth}
        >
            <Toaster />
            <div className="space-y-[1.6vw]">
                <SubHeading title="Kategori">
                    <GoalsButton
                        className="py-[.6vw] px-[1.2vw] rounded-[.4vw] text-[.7vw]"
                        onClick={() => {
                            setShowDialog({ create: true });
                            setFormData({
                                ...formData,
                                id: "",
                                name: "",
                                slug: "",
                                is_visible: 0,
                            });
                        }}
                    >
                        <FiPlus className="text-[1vw]" />
                        Tambah Kategori
                    </GoalsButton>
                </SubHeading>

                <Dialog
                    {...{
                        showDialog,
                        setShowDialog,
                        formData,
                        setFormData,
                        post,
                        put,
                        callback,
                    }}
                />

                <GoalsDashboardTable
                    isHeadVisible
                    isPaginated
                    isSortable
                    columns={columns}
                    data={categories}
                />
            </div>
        </DashboardLayout>
    );
}
