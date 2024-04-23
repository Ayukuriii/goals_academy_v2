import GoalsButton from "@/Components/elements/GoalsButton";
import GoalsPopup from "@/Components/elements/GoalsPopup";
import GoalsTextInput from "@/Components/elements/GoalsTextInput";
import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Pages/Auth/Admin/components/Breadcrumb";
import FormSection from "@/Pages/Auth/Admin/components/layouts/FormSection";
import { FileMediaItemBackdrop } from "@/Pages/Auth/User/Bimbingan/layouts/DetailSatuPertemuan";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import { RxFileText } from "react-icons/rx";
import View from "./View";
import { router, useForm } from "@inertiajs/react";
import {
    GoalsSelectInput,
    GoalsSelectInputItem,
} from "@/Components/elements/GoalsSelectInput";

export default function Edit({ auth, tipe = "bimbingan", order, places, tutors }) {
    console.log(order);
    console.log(places);
    console.log(tutors);

    // const { data, setData, post } = useForm({
    //     username: "Hafiz",
    //     university: "Universitas Indonesia",
    //     major: "Teknik Informatika",
    //     number: "08123456789",
    //     tutor_number: "08123456789",
    //     order_id: "1",
    //     product: "Dibimbing Sekali",
    //     topic: "Topik Bimbingan",
    //     location: "Offline - Nakoa",
    //     date: "08/12/2024",
    //     time: "23:59",
    // });
    const [isShow, setIsShow] = useState(false);
    const [showPlaces, setShowPlaces] = useState(false);
    const {
        data: formData,
        setData: setFormData,
        post,
        put,
    } = useForm({
        id: "",
        place: "",
        place_id: 0,
        tutor: "",
        tutor_id: 0,
    });
    return (
        <DashboardLayout
            title="Bimbingan"
            subtitle="Recent Order"
            role="moderator"
            auth={auth}
        >
            {/* {isLoading && <LoadingUI />} */}
            <div className="space-y-[1.6vw]">
                <div className="flex justify-between items-center">
                    <Breadcrumb level={3} isLastHidden />

                    <div className="space-x-[.8vw]">
                        <GoalsButton
                            variant="success-bordered"
                            size="sm"
                            onClick={() =>
                                router.replace(
                                    route("moderator.bimbingan.order.index")
                                )
                            }
                        >
                            Batal
                        </GoalsButton>
                        <GoalsButton
                            variant="success"
                            size="sm"
                            onClick={() =>
                                post("moderator.bimbingan.order.updateOnline", {
                                    data: data,
                                })
                            }
                        >
                            Simpan
                        </GoalsButton>
                    </div>
                </div>

                {createPortal(
                    <DownloadLampiranPopup
                        show={isShow}
                        setShow={() => setIsShow(!isShow)}
                    />,
                    document.body
                )}
                <div className="flex gap-[1.2vw]">
                    <FormSection title="User Information">
                        <GoalsTextInput
                            label="Username"
                            disabled
                            data={order.user?.name}
                        />
                        <GoalsTextInput
                            label="University"
                            disabled
                            data={
                                order.user?.profile?.university ??
                                "Universitas Belum Diset"
                            }
                        />
                        <GoalsTextInput
                            label="Major"
                            disabled
                            data={
                                order.user?.profile?.major ??
                                "Jurusan Belum Diset"
                            }
                        />
                        <div className="flex gap-[.4vw] w-full items-end">
                            <GoalsTextInput
                                label="Number"
                                grow
                                data={
                                    order.user?.profile?.phone_number ??
                                    "Belum Ada Nomor Telephone"
                                }
                            />
                            <a
                                href={`wa.me/${
                                    order.user.profile.phone_number ??
                                    "6285672771772"
                                }`}
                                target="_blank"
                            >
                                <FaWhatsappSquare className="text-[#00D95F] text-[3.5vw] -m-[5px]" />
                            </a>
                        </div>
                        <div className="flex gap-[.4vw] w-full items-end">
                            <GoalsTextInput label="Tutor  Number" grow />
                            <a href="wa.me/6289123456789" target="_blank">
                                <FaWhatsappSquare className="text-[#00D95F] text-[3.5vw] -m-[5px]" />
                            </a>
                        </div>
                    </FormSection>
                    <FormSection
                        title="Order Details"
                        titleAction={
                            <button
                                onClick={() => setIsShow(!isShow)}
                                className="flex items-center gap-[.4vw] text-[.8vw] text-primary"
                            >
                                File & Media{" "}
                                <RxFileText className="md:text-[1vw]" />
                            </button>
                        }
                    >
                        <GoalsTextInput
                            label="Order Id"
                            disabled
                            data={order.order_code}
                        />
                        <GoalsTextInput
                            label="Product"
                            disabled
                            data={order.products.name}
                        />
                        <GoalsTextInput
                            label="Topic"
                            disabled
                            data={order.course?.topic ?? "Topic belum diset"}
                        />
                        <GoalsSelectInput
                            show={showPlaces}
                            setShow={setShowPlaces}
                            placeholder="Pilih Lokasi"
                            label={`Location ${
                                tipe == "Webinar" ? "Link Zoom" : "Offline"
                            }`}
                            data={formData.place}
                        >
                            {places.map((i) => {
                                <GoalsSelectInputItem
                                    onClick={() => {
                                        // formData.place = i.place
                                        // formData.place_id = i.id
                                        // setFormData(formData)
                                        setFormData(...{
                                            place: i.place,
                                            place_id: i.id
                                        })
                                    }}
                                >{i.place + " | " + i.city.name}</GoalsSelectInputItem>;
                            })}
                        </GoalsSelectInput>
                        <div className="flex gap-[.4vw]">
                            <GoalsTextInput type="date" label="Date" grow />
                            <GoalsTextInput type="time" label="Time" grow />
                        </div>
                    </FormSection>
                </div>
            </div>
        </DashboardLayout>
    );
}

const DownloadLampiranPopup = ({ show, setShow }) => {
    const item = {
        title: "File Title",
        url: "https://www.google.com",
    };
    return (
        <GoalsPopup show={show} setShow={setShow}>
            <h2>File & Media</h2>

            <div>
                <FileMediaItemBackdrop item={item} isBackdropVisible={false} />
            </div>
        </GoalsPopup>
    );
};
