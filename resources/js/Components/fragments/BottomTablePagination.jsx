import { router } from "@inertiajs/react";
import { MenuItem, Select } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const BottomPaginationTable = ({
    from,
    to,
    total,
    pages,
    per_page,
    current_page,
    keyword,
}) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    return (
        <div className="px-4 flex items-center justify-between mt-8 text-[3.5vw] md:text-[.8vw]">
            <p className="hidden md:block text-neutral-50">
                Showing {from} to {to} of {total} results
            </p>
            <div className="flex items-center gap-[1.6vw]">
                {pages?.map((link, index) => (
                    <button
                        key={index}
                        className=" text-neutral-60"
                        disabled={link.url == null}
                        onClick={() =>
                            router.get(
                                link.url +
                                    (keyword != null
                                        ? `&search=${keyword}`
                                        : "") +
                                    "&perPage=" +
                                    new URLSearchParams(
                                        window.location.search
                                    ).get("perPage") ?? ""
                            )
                        }
                    >
                        {link.label == "&laquo; Previous" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        ) : link.label == "Next &raquo;" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="inline w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        ) : (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                                className={`
                                            ${
                                                link.label == current_page &&
                                                "font-semibold text-secondary"
                                            }`}
                            />
                        )}
                    </button>
                ))}
            </div>
            <div className="text-neutral-50">
                Items per page&emsp;
                <Select value={per_page} size={isMobile ? "small" : "medium"}>
                    {[10, 15, 20, 25, 50].map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            onClick={() => {
                                router.get(
                                    window.location.pathname +
                                        (`?perPage=${item}` ||
                                            new URLSearchParams(
                                                window.location.search
                                            ).get("perPage"))
                                );
                            }}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </div>
        </div>
    );
};

export default BottomPaginationTable;
