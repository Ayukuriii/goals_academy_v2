import GoalsBadge from "@/Components/elements/GoalsBadge";
import GoalsButton from "@/Components/elements/GoalsButton";
import GoalsTextInput from "@/Components/elements/GoalsTextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { upperCaseFirstLetter } from "@/script/utils";
import { Link } from "@inertiajs/react";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import {
    MaterialReactTable,
    useMaterialReactTable,
} from "material-react-table";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { FiEdit2, FiEye, FiThumbsUp } from "react-icons/fi";
import { statusClassMap } from "../../User/RiwayatTransaksi/components/TransactionStatusBadge";
import SubHeading from "../../Admin/components/SubHeading";

export default function Progress({ auth, data: recentOrder }) {
    const data = recentOrder.recent_order.data;
    const [isShow, setIsShow] = useState(false);

    const columns = useMemo(
        () => [
            {
                accessorKey: "user.name",
                header: "Username",
                Cell: ({ renderedCellValue }) => {
                    return (
                        <p className="text-[.8vw] font-semibold">
                            {renderedCellValue}
                        </p>
                    );
                },
            },
            {
                accessorKey: "products.category.name",
                header: "Product",
                Cell: ({ renderedCellValue }) => {
                    return (
                        <p className="text-[.8vw] font-semibold">
                            {renderedCellValue}
                        </p>
                    );
                },
            },
            {
                accessorKey: "date",
                header: "Tanggal & Waktu Bimbingan",
                Cell: ({ renderedCellValue, cell }) => {
                    const course = cell.row.original.course;

                    if (course?.date == null && course?.time == null)
                        return "-";
                    return (
                        <div className="flex items-center justify-between text-[.8vw]">
                            <p>
                                {new Date(course.date).toLocaleDateString(
                                    "id-ID"
                                )}
                            </p>
                            {/* {course.time} */}
                            <p>{course.time ?? "-"}</p>
                        </div>
                    );
                },
            },
            {
                accessorKey: "is_tutor",
                header: "Tutor Confirm",
                Cell: ({ cell }) => {
                    const course = cell.row.original.course;

                    if (course?.is_tutor == null || course?.child.length > 1)
                        return;
                    return (
                        <span className="w-full justify-center items-center">
                            {course.is_tutor == true ? (
                                <i className="fa-regular fa-circle-check text-success-50 text-[1.2vw]"></i>
                            ) : (
                                <i className="fa-regular fa-circle-xmark text-danger-40 text-[1.2vw]"></i>
                            )}
                        </span>
                    );
                },
            },
            {
                accessorKey: "is_user",
                header: "User Confirm",
                Cell: ({ cell }) => {
                    const course = cell.row.original.course;
                    if (course?.is_user == null || course?.child.length > 1) {
                        return;
                    } else
                        return (
                            <span className="w-full justify-center items-center">
                                {course.is_user == true ? (
                                    <i className="fa-regular fa-circle-check text-success-50 text-[1.2vw]"></i>
                                ) : (
                                    <i className="fa-regular fa-circle-xmark text-danger-40 text-[1.2vw]"></i>
                                )}
                            </span>
                        );
                },
            },
            //TODO need checking for multiple session
            {
                accessorKey: "status",
                header: "Status",
                Cell: ({ cell }) => {
                    if (cell.row.original.course?.ongoing == null) return;

                    const status = upperCaseFirstLetter(
                        cell.row.original.course?.ongoing
                    );

                    return (
                        <div>
                            <GoalsBadge
                                title={status}
                                className={`${statusClassMap[status]} font-semibold`}
                            />
                        </div>
                    );
                },
            },
        ],
        []
    );

    const table = useMaterialReactTable({
        columns,
        data: data,
        enableColumnActions: false,
        enableTopToolbar: false,
        enableRowActions: true,
        positionActionsColumn: "last",
        positionExpandColumn: "last",
        paginateExpandedRows: false,
        enableExpanding: true,
        muiTablePaperProps: {
            sx: {
                boxShadow: "none",
            },
        },
        muiTableBodyCellProps: {
            sx: {
                flex: 1,
            },
        },
        muiDetailPanelProps: {
            sx: {
                padding: "0",
            },
        },
        muiTableHeadRowProps: {
            sx: {
                background: "#F8F8FC",
                borderRadius: ".4vw",
            },
        },
        muiTableProps: {
            sx: {
                bgcolor: "#F3F6FF",
                padding: "0",
            },
        },
        renderRowActions: ({ row }) => {
            const { course } = row.original;

            if (course?.child.length > 1) return;
            return (
                <div className="flex items-center gap-[.8vw]">
                    <button
                        onClick={() => {
                            setIsShow(true);
                        }}
                    >
                        <FiThumbsUp className="text-[1.2vw] text-success-50" />
                    </button>
                    <Link
                        href={route("moderator.bimbingan.progress.edit", {
                            progress: course.id,
                        })}
                    >
                        <FiEdit2 className="text-[1.2vw] text-secondary" />
                    </Link>
                    <Link
                        href={route("moderator.bimbingan.progress.show", {
                            progress: course.id,
                        })}
                    >
                        <FiEye className="text-[1.2vw] text-neutral-60" />
                    </Link>
                </div>
            );
        },
        renderDetailPanel: ({ row }) => {
            const { course } = row.original;

            if (course && course.child && course.child.length > 0) {
                const firstSession = {
                    id: course.id,
                    date: course.date,
                    time: course.time,
                    ongoing: course.ongoing,
                    is_tutor: course.is_tutor,
                    is_user: course.is_user,
                    order_id: course.order_id,
                    session: course.session,
                };

                const isPushed = course.child.find((x) => x.id == course.id);

                !isPushed && course.child.unshift(firstSession);

                return (
                    <Table>
                        <TableBody>
                            {course.child.map((item, index) => {
                                const status = upperCaseFirstLetter(
                                    item.ongoing
                                );
                                const cellData = {
                                    session: {
                                        label: (
                                            <p className="font-bold font-work-sans">
                                                Sesi
                                            </p>
                                        ),
                                        value: (
                                            <p className="font-semibold">
                                                {item.session}
                                            </p>
                                        ),
                                        note: "s",
                                    },
                                    sessions: {
                                        value: "",
                                    },
                                    dateTime: {
                                        value: (
                                            <DateTimeComp
                                                date={item.date}
                                                time={item.time}
                                            />
                                        ),
                                    },
                                    is_tutor: {
                                        value: (
                                            <StatusIcon
                                                isTrue={item.is_tutor}
                                            />
                                        ),
                                    },
                                    is_user: {
                                        value: (
                                            <StatusIcon isTrue={item.is_user} />
                                        ),
                                    },
                                    ongoing: {
                                        value: (
                                            <GoalsBadge
                                                title={status}
                                                className={`${statusClassMap[status]} font-semibold`}
                                            />
                                        ),
                                    },
                                };

                                return (
                                    <TableRow
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        {Object.entries(cellData).map(
                                            ([key, { label, value, note }]) => (
                                                <TableCell
                                                    key={key}
                                                    sx={{
                                                        flex: 1,
                                                        display: "flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <div className="flex items-center gap-[.8vw]">
                                                        <span className="flex items-center">
                                                            {label}&nbsp;{value}
                                                        </span>

                                                        {note && (
                                                            <span className="text-info-40 font-medium">
                                                                Need Action
                                                            </span>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            )
                                        )}
                                        <td className="w-[9.8%] flex justify-center">
                                            <div className="flex items-center justify-center gap-[.8vw] w-full">
                                                <button
                                                    onClick={() => {
                                                        setIsShow(true);
                                                    }}
                                                >
                                                    <FiThumbsUp className="text-[1.2vw] text-success-50" />
                                                </button>
                                                <Link
                                                    href={route(
                                                        "moderator.bimbingan.progress.edit",
                                                        { progress: item.id }
                                                    )}
                                                >
                                                    <FiEdit2 className="text-[1.2vw] text-secondary" />
                                                </Link>
                                                <Link
                                                    href={route(
                                                        "moderator.bimbingan.progress.show",
                                                        { progress: item.id }
                                                    )}
                                                >
                                                    <FiEye className="text-[1.2vw] text-neutral-60" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="w-[4.8%]"></td>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                );
            }
        },
    });

    return (
        <DashboardLayout
            title="Bimbingan"
            subtitle="Progress"
            role="moderator"
            auth={auth}
        >
            {/* {isLoading && <LoadingUI />} */}
            {createPortal(
                <ViewDialog show={isShow} setShow={() => setIsShow(!isShow)} />,
                document.body
            )}
            <div className="space-y-[1.6vw]">
                <SubHeading title="Progress" />
                <div className="text-[.8vw] bg-white border min-w-full rounded-[.8vw] p-[3.3vw] space-y-[5.5vw] md:space-y-[1.6vw]">
                    <MaterialReactTable table={table} />
                </div>
            </div>
        </DashboardLayout>
    );
}

const StatusIcon = ({ isTrue }) => {
    return (
        <span className="w-full justify-center items-center">
            {isTrue ? (
                <i className="fa-regular fa-circle-check text-success-50 text-[1.2vw] flex-shrink-0"></i>
            ) : (
                <i className="fa-regular fa-circle-xmark text-danger-40 text-[1.2vw] flex-shrink-0"></i>
            )}
        </span>
    );
};

const DateTimeComp = ({ date, time }) => {
    if (date == null && time == null) return "-";
    return (
        <div className="flex w-full items-center justify-between gap-2">
            <p>{new Date(date).toLocaleDateString("id-ID")}</p>
            {/* {time} */}
            <p>{time ?? "-"}</p>
        </div>
    );
};

const ViewDialog = ({ show, setShow, product, categories }) => {
    return (
        <div
            className={`${
                show ? "" : "opacity-0 pointer-events-none"
            } z-50 fixed w-full h-full top-0 overflow-auto bg-dark focus:bg-red-400 bg-opacity-50 transition-all duration-300`}
            onClick={() => {
                setShow(false);
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                    show
                        ? "md:top-0 bottom-0 scale-100"
                        : "md:top-full -bottom-full scale-0"
                } inset-0 mx-auto grid text-center gap-[1.6vw] w-[23vw] md:h-fit transition-all duration-500 bg-white shadow-md rounded-t-[6vw] md:rounded-[1vw] p-[8vw] md:p-[1.6vw] z-50 my-[8vh] `}
            >
                <h3>Durasi Bimbingan</h3>
                <p>
                    Harap masukkan durasi yang berjalan pada <br /> saat proses
                    bimbingan
                </p>

                <div className="flex gap-[1vw]">
                    <GoalsTextInput placeholder="Masukkan durasi" grow />
                    <GoalsButton size="sm" variant="success">
                        Simpan
                    </GoalsButton>
                </div>
            </div>
        </div>
    );
};
