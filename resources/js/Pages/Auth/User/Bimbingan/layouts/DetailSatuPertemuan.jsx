import useScrollBlock from "@/Hooks/useScrollBlock";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { RxFileText } from "react-icons/rx";
import { createPortal } from "react-dom";
import { router } from "@inertiajs/react";
import { truncateWithEllipsis } from "@/script/utils";
import FileMediaItemBackdrop from "@/Components/fragments/FileMediaItemBackdrop";

const DetailSatuPertemuan = ({ data, className = "" }) => {
    //TODO DATA BELUM LENGKAP
    const gapSize = 1;
    console.log(data);

    const form_field = {
        schedule: "Jadwal Pelaksanaan",
        time: "Jam Pelaksanaan",
        city: "Kota Pelaksanaan",
        place: "Lokasi Pelaksanaan",
        // add_on: "Add On",
        document: "Lampiran Dokumen",
        topic: "Topik Bimbingan",
    };
    const form_result = {
        city: data?.location?.city?.city ?? "Kota Belum Diatur",
        place: data?.location ?? "Lokasi Belum Diatur",
        topic: data?.topic?.topic ?? "Topik Belum Diatur",
        // add_on:
        //     data?.add_ons?.map((item) => item["name"]).join(", ") != ""
        //         ? data?.add_ons?.map((item) => item["name"]).join(", ")
        //         : "Tidak Ada Add Ons",
        document: "Lampiran Dokumen",
        schedule:
            new Date(data?.date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
            }) ?? "Jadwal Belum Diatur",
        time: data?.time ?? "Jam Belum Diatur",
    };

    return (
        <div className={`md:flex gap-[${gapSize}vw] ${className}`}>
            {/* Informasi detil pembelajaran */}
            <div className="md:border border-neutral-20 w-full rounded-[.8vw] pt-[3.3vw] pb-[5.5vw] md:p-[3.3vw] space-y-[5.5vw] md:space-y-[1.6vw]">
                <h2 className="font-medium h4 text-secondary">
                    Pelaksanaan Pembelajaran
                </h2>
                <ul className="text-black space-y-[1.8vw] md:space-y-[1.25vw]">
                    {Object.keys(form_field).map((key) => (
                        <li
                            key={key}
                            className="space-y-[.9vw] md:space-y-[.2vw]"
                        >
                            <label className="text-[2.8vw] md:text-[.8vw] font-normal text-neutral-50">
                                {form_field[key]}
                            </label>
                            <p className="text-[3.7vw] md:text-[1.25vw] text-neutral-80 font-medium">
                                {form_result[key]}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full space-y-[1vw]">
                {/* Informasi Tutor */}
                <div
                    className="w-full md:border border-neutral-20 rounded-[.8vw] py-[5.5vw] md:p-[3.3vw] space-y-[5.5vw] md:space-y-[1.6vw]"
                    style={{
                        height: `calc(50% - ${gapSize * 0.5}vw)`,
                    }}
                >
                    <h2 className="font-medium h4 text-secondary">
                        Informasi Tutor
                    </h2>
                    <ul className="text-black space-y-[1.8vw] md:space-y-[1.25vw]">
                        <li className="space-y-[.9vw] md:space-y-[.2vw]">
                            <h3 className="text-[2.8vw] md:text-[.8vw] font-normal text-neutral-50">
                                Lampiran Dokumen Hasil
                            </h3>
                            <button className="text-[3.7vw] md:text-[1.25vw] text-neutral-80 font-medium">
                                Ludi-Revisi.pdf
                            </button>
                        </li>
                        <li className="space-y-[.9vw] md:space-y-[.2vw]">
                            <h3 className="text-[2.8vw] md:text-[.8vw] font-normal text-neutral-50">
                                Catatan Dari Tutor
                            </h3>
                            <p className="text-[3.7vw] md:text-[1.25vw] text-neutral-80 font-medium">
                                mengganti poin a menjadi b
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Lampiran */}
                <div
                    className="w-full md:border border-neutral-20 rounded-[.8vw] py-[5.5vw] md:p-[3.3vw] space-y-[5.5vw] md:space-y-[1.6vw]"
                    style={{
                        height: `calc(50% - ${gapSize * 0.5}vw)`,
                    }}
                >
                    <h2 className="font-medium h4 text-secondary">
                        File dan media
                    </h2>

                    <div className="space-y-[.8vw] md:space-y-[.2vw]">
                        {data.file_uploads.length != 0 ? (
                            data.file_uploads.map((item, index) => {
                                return (
                                    <FileMediaItemBackdrop
                                        isBackdropVisible={false}
                                        key={index}
                                        item={item}
                                    />
                                );
                            })
                        ) : (
                            <div className="w-full text-[2.8vw] md:text-[.8vw] font-normal text-neutral-50 h-full">
                                Tidak ada file yang diupload
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailSatuPertemuan;


