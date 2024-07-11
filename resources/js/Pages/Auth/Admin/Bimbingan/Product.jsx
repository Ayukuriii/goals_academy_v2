import GoalsButton from "@/Components/elements/GoalsButton";
import GoalsDashboardTable from "@/Components/elements/GoalsDashboardTable";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Link, router, useForm } from "@inertiajs/react";
import { useMemo } from "react";
import {
    FiCheckCircle,
    FiEdit2,
    FiEye,
    FiPlus,
    FiTrash2,
} from "react-icons/fi";
import SubHeading from "../components/SubHeading";
import toast from "react-hot-toast";
import { useState } from "react";
import View from "./Product/View";
import { createPortal } from "react-dom";
import { useRef } from "react";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import GoalsCupertinoButton from "@/Components/elements/GoalsCupertinoButton";

export default function Product({ auth, bimbingan, categories }) {
    bimbingan = bimbingan.data;
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState();
    const [pages, setPages] = useState([]);
    const [keyword, setKeyword] = useState(
        new URLSearchParams(window.location.search).get("search")
    );

    const onSearchCallback = (search) => {
        router.visit(route("admin.bimbingan.product.index", { search: search }), {
            only: ["bimbingan"],
        });
    };

    async function getBimbinganDetail(id) {
        setProduct(null);
        const res = await fetch("/admin/bimbingan/product/" + id);
        const { data } = await res.json();
        setProduct(data);
    }

    const callback = (method) => {
        router.visit(route("admin.bimbingan.product.index"), {
            only: ["bimbingan"],
            onSuccess: () => {
                if (method == "create") {
                    toast.success("Create Success!");
                } else if (method == "edit") {
                    toast.success("Edit Success!");
                } else {
                    toast.success("Delete Success!");
                }
            },
        });
    };

    const columns = useMemo(
        () => [
            {
                accessorKey: "product_image",
                header: "Gambar",

                Cell: ({ cell }) => {
                    return (
                        <img
                            src={
                                `${window.location.origin}/storage/` +
                                cell.row.original.product_image
                            }
                            alt="thumbnail-product"
                            className="w-[3.6vw] h-[2.6vw] rounded-[.3vw] object-contain bg-neutral-20"
                        />
                    );
                },
            },
            {
                accessorKey: "name",
                header: "Nama",
            },
            {
                accessorKey: "is_visible",
                header: "Visibilitas",

                Cell: ({ cell }) => (
                    <GoalsCupertinoButton
                        className="text-[1vw] gap-[.4vw] cursor-pointer"
                        label=""
                        size="lg"
                        isEnabled={cell.row.original.is_visible}
                        setIsEnabled={() => {
                            router.put(
                                route("admin.bimbingan.product.updateVisible", {
                                    product: cell.row.original.id,
                                }),
                                {
                                    is_visible: !cell.row.original.is_visible,
                                },
                                {
                                    onSuccess: () => callback("edit"),
                                }
                            );
                        }}
                    />
                ),
            },
            {
                accessorKey: "price",
                header: "Harga",
            },
            {
                header: "Action",

                Cell: ({ cell }) => {
                    return (
                        <ul className="flex gap-[.8vw] w-fit">
                            <li>
                                <Link
                                    as="button"
                                    method="GET"
                                    href={route(
                                        "admin.bimbingan.product.edit",
                                        { product: cell.row.original }
                                    )}
                                >
                                    <FiEdit2 className="text-[1.2vw] text-secondary" />
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        getBimbinganDetail(
                                            cell.row.original.id
                                        );
                                        setShow(true);
                                    }}
                                >
                                    <FiEye className="text-[1.2vw] text-neutral-60" />
                                </button>
                            </li>
                        </ul>
                    );
                },
            },
        ],
        []
    );

    return (
        <DashboardLayout
            title="Bimbingan"
            subtitle="Product"
            role="admin"
            auth={auth}
        >
            {isDesktop ? (
                <div className="space-y-[1.6vw]">
                    <SubHeading title="Produk">
                        <GoalsButton
                            isLink
                            method="GET"
                            size="sm"
                            href={route("admin.bimbingan.product.create")}
                            className="flex items-center gap-[.5vw]"
                        >
                            <FiPlus className="text-[1vw]" />
                            Tambah Produk
                        </GoalsButton>
                    </SubHeading>
                    {/* <GoalsAdminTable /> */}

                    {product &&
                        createPortal(
                            <ViewDialog
                                show={show}
                                setShow={setShow}
                                product={product}
                                categories={categories}
                            />,
                            document.body
                        )}
                    <GoalsDashboardTable
                        columns={columns}
                        data={bimbingan}
                        isSplitByCategory
                        isDraggable
                        keyword={keyword}
                        setKeyword={setKeyword}
                        onSearch={(i) => {
                            onSearchCallback(i);
                        }}
                    />
                </div>
            ) : (
                <span className="text-[2vw]">Desktop Only</span>
            )}
        </DashboardLayout>
    );
}

const ViewDialog = ({ show, setShow, product, categories }) => {
    return (
        <div
            className={`${
                show ? "" : "hidden"
            } z-50 fixed w-full h-full top-0 overflow-auto bg-dark focus:bg-red-400 bg-opacity-50 transition-all duration-300`}
            onClick={() => {
                setShow(false);
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                    show
                        ? "md:top-0 bottom-0 md:scale-100"
                        : "md:top-full -bottom-full md:scale-0"
                } inset-0 focus:bg-red-400 mx-auto flex gap-[2vw] w-[90vw] md:h-fit transition-all duration-500 bg-white shadow-md rounded-t-[6vw] md:rounded-[1vw] p-[8vw] md:p-[1.75vw] z-50 my-[8vh] `}
            >
                <View products={product} categories={categories} />
            </div>
        </div>
    );
};
