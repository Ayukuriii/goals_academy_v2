import GoalsBadge from "@/Components/elements/GoalsBadge";
import GoalsButton from "@/Components/elements/GoalsButton";
import GoalsDatePicker from "@/Components/elements/GoalsDatePicker";
import GoalsPopup from "@/Components/elements/GoalsPopup";
import {
    GoalsSelectInput,
    GoalsSelectInputItem,
} from "@/Components/elements/GoalsSelectInput";
import {
    ProductItemCardContent,
    ProductItemCardHeader,
    ProductItemCardLayout,
} from "@/Components/fragments/ProductItemCard";
import { router, useForm } from "@inertiajs/react";
import { createTheme } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FiChevronDown, FiX } from "react-icons/fi";
import DetailSatuPertemuan from "./DetailSatuPertemuan";
import { datepickerStyle, mobileDatepickerStyle } from "./config";

const DetailBanyakPertemuan = ({ data, setIsAturJadwalShow }) => {
    const [showDetail, setShowDetail] = useState(null);

    return (
        <div className="relative space-y-[2vw]">
            <ProductItemCardLayout
                imageUrl={data[0].products.product_image}
                className="hidden md:flex"
            >

                <ProductItemCardHeader>
                    <GoalsBadge
                        title="Bimbingan Skripsi"
                        className="text-secondary bg-primary-10"
                    />
                </ProductItemCardHeader>
                <ProductItemCardContent>
                    {/* Content */}
                    <div className="text-[1vw] space-y-[.2vw]">
                        <h2 className="h5 font-medium mb-[.4vw]">
                            {data[0].products.name}
                        </h2>
                        <p className="text-neutral-60">
                            Berlaku hingga : Selasa, 24 Agustus 2023
                        </p>
                    </div>
                    <GoalsButton
                        disabled={!data.some((item) => item.date === null)}
                        variant="info"
                        onClick={() => setIsAturJadwalShow()}
                    >
                        Atur jadwal sesi berikutnya
                    </GoalsButton>
                </ProductItemCardContent>
            </ProductItemCardLayout>

            {/* Sesi Dropdown Detail */}
            <div className="space-y-[.8vw]">
                {data.map((item, index) => (
                    <DropdownDetail
                        key={index}
                        item={item}
                        index={index + 1}
                        isVisible={showDetail}
                        setIsVisible={setShowDetail}
                    />
                ))}
            </div>
        </div>
    );
};
export default DetailBanyakPertemuan;

export const DropdownDetail = ({ isVisible, setIsVisible, item, index }) => {
    return (
        <React.Fragment>
            <button
                disabled={item.date == null || item.date == 0}
                onClick={() =>
                    isVisible == item.id
                        ? setIsVisible(null)
                        : setIsVisible(item.id)
                }
                className={`disabled:grayscale disabled:opacity-90 disabled:pointer-events-none relative w-full flex md:border border-neutral-20 p-[3.7vw] md:p-[1.2vw] gap-[2.9vw] rounded-[.8vw] shadow md:shadow-none justify-between items-center`}
            >
                <h3 className="font-medium text-[3.7vw] md:text-[1.2vw]">
                    Sesi {index}
                </h3>
                {item.date == null || item.date == 0 ? (
                    <p>Jadwal Belum Diatur</p>
                ) : (
                    <span className="flex items-center gap-[.5vw] font-medium text-[3.25vw] md:text-[1vw]">
                        <FiChevronDown
                            className={`pt-[.4vw] md:pt-[.2vw] text-[4vw] md:text-[1.5vw] transition-all duration-300 ${
                                isVisible == item.id ? "rotate-180" : "rotate-0"
                            }`}
                        />{" "}
                        Lihat Detail
                    </span>
                )}
            </button>

            {isVisible === item.id && (
                <DetailSatuPertemuan
                    className={`rounded-[.8vw] px-[5.5vw] md:px-0 shadow md:shadow-none ${
                        isVisible === item.id ? "scale-y-100" : "scale-y-0"
                    }`}
                    data={item}
                />
            )}
        </React.Fragment>
    );
};

export const AturJadwalPopup = ({
    show,
    setShow,
    cities,
    date,
    topics,
    order_code,
}) => {
    const [showForm, setShowForm] = useState({
        date: false,
        city: false,
        place_id: false,
        topic: false,
    });

    const { data, setData, post, reset, processing } = useForm({
        date: "",
        city: "",
        place_id: "",
        topic: "",
    });

    const theme = createTheme({
        typography: {
            fontSize: {
                1: "1vw",
                4: "4vw",
            },
        },
    });

    const unavailableDate = date.map((i) => i.date);

    const showFormHandler = (key, value) => {
        const tempShowForm = { ...showForm };
        Object.keys(tempShowForm).forEach((i) => {
            i == key ? (tempShowForm[i] = value) : (tempShowForm[i] = false);
        });
        setShowForm(tempShowForm);
    };

    return (
        <GoalsPopup
            show={show}
            setShow={setShow}
            className="space-y-[2vw] md:space-y-0"
        >
            <div className="flex justify-between text-black">
                <p className="text-[4.6vw] md:text-[1.2vw] font-semibold">
                    Atur Jadwal
                </p>
                <button onClick={() => setShow()}>
                    <FiX className="text-[3.7vw] md:text-[1.8vw]" />
                </button>
            </div>
            <div className="space-y-[.4vw]">
                <GoalsDatePicker
                    show={showForm.date}
                    setShow={(i) => showFormHandler("date", i)}
                    wrapperClassName="hidden md:block"
                    label="Pilih Jadwal Bimbinganmu"
                    data={data.date}
                    setData={(i) => setData("date", i)}
                    minDate={moment()}
                    maxDate={moment().add(6, "days")}
                    shouldDisableDate={unavailableDate}
                    theme={theme}
                    slotProps={datepickerStyle.slotProps}
                    sx={datepickerStyle.sx}
                />
                <GoalsDatePicker
                    show={showForm.date}
                    setShow={(i) => showFormHandler("date", i)}
                    wrapperClassName="md:hidden"
                    label="Pilih Jadwal Bimbinganmu"
                    data={data.date}
                    setData={(i) => setData("date", i)}
                    minDate={moment()}
                    maxDate={moment().add(6, "days")}
                    shouldDisableDate={unavailableDate}
                    theme={theme}
                    slotProps={mobileDatepickerStyle.slotProps}
                    sx={mobileDatepickerStyle.sx}
                />

                <GoalsSelectInput
                    show={showForm.city}
                    setShow={(i) => showFormHandler("city", i)}
                    label="Kota Bimbingan"
                    placeholder="Pilih Kota"
                    data={
                        data.city != ""
                            ? cities.filter((item) => item.id == data.city)[0]
                                  .city
                            : ""
                    }
                >
                    {cities.map((item, index) => {
                        return (
                            <GoalsSelectInputItem
                                key={index}
                                onClick={() => {
                                    if (data.place_id == "") {
                                        setData("city", item.id);
                                    } else {
                                        setData({
                                            ...data,
                                            city: item.id,
                                            place_id: "",
                                        });
                                    }
                                }}
                            >
                                {item.city}
                            </GoalsSelectInputItem>
                        );
                    })}
                </GoalsSelectInput>
                <GoalsSelectInput
                    show={showForm.place_id}
                    setShow={(i) => showFormHandler("place_id", i)}
                    label="Lokasi Bimbingan"
                    placeholder="Pilih Lokasi Bimbingan"
                    data={
                        data.place_id != ""
                            ? cities
                                  .filter((item) => item.id == data.city)[0]
                                  .places.filter(
                                      (item) => item.id == data.place_id
                                  )[0].place
                            : ""
                    }
                >
                    {data.city != "" ? (
                        cities
                            .filter((item) => item.id == data.city)[0]
                            .places.map((item, index) => {
                                return (
                                    <GoalsSelectInputItem
                                        key={index}
                                        onClick={() =>
                                            setData("place_id", item.id)
                                        }
                                    >
                                        {item.place}
                                    </GoalsSelectInputItem>
                                );
                            })
                    ) : (
                        <GoalsSelectInputItem>
                            Pilih kota terlebih dahulu
                        </GoalsSelectInputItem>
                    )}
                </GoalsSelectInput>

                {"topic" && topics.length && (
                    <GoalsSelectInput
                        show={showForm.topic}
                        setShow={(i) => showFormHandler("topic", i)}
                        label="Topik Bimbingan"
                        placeholder="Pilih Topik Bimbingan"
                        data={
                            data.topic != ""
                                ? topics.filter(
                                      (item) => item.id == data.topic
                                  )[0].topic
                                : ""
                        }
                    >
                        {topics.map((item, index) => {
                            return (
                                <GoalsSelectInputItem
                                    key={index}
                                    onClick={() => setData("topic", item.id)}
                                >
                                    {item.topic}
                                </GoalsSelectInputItem>
                            );
                        })}
                    </GoalsSelectInput>
                )}
            </div>

            <GoalsButton
                disabled={processing}
                className="w-full "
                onClick={() => {
                    post(`/bimbingan/${order_code}/atur-jadwal`, {
                        onSuccess: () => {
                            reset(), setShow(setShow);
                        },
                        onError: () => {
                            alert("Gagal mengatur jadwal");
                        },
                    });
                }}
            >
                Simpan
            </GoalsButton>
        </GoalsPopup>
    );
};
