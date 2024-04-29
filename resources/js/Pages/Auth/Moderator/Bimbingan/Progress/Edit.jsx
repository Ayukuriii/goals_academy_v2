import DashboardLayout from "@/Layouts/DashboardLayout";
import Breadcrumb from "@/Pages/Auth/Admin/components/Breadcrumb";
import GoalsButton from "@/Components/elements/GoalsButton";
import React from "react";
import FormSection from "@/Pages/Auth/Admin/components/layouts/FormSection";
import SliderButton from "@/Pages/Auth/Admin/Bimbingan/Product/Components/SliderButton";
import GoalsTextInput from "@/Components/elements/GoalsTextInput";
import { FaWhatsappSquare } from "react-icons/fa";
import {
    SelectInput,
    SelectInputItem,
} from "@/Pages/Auth/Admin/Bimbingan/Product/Components/SelectInput";
import StarRating from "@/Pages/Auth/User/Components/StarRating";
import { RxFileText } from "react-icons/rx";
import { useForm } from "@inertiajs/react";
import {
    SelectMultiTag,
    SelectMultiTagItem,
} from "@/Pages/Auth/Admin/Bimbingan/Product/Components/SelectMultiTag";

export default function Edit({ auth, progress, tutors }) {
    console.log(progress);
    console.log(tutors);

    const { data, setData, put } = useForm({
        add_on: progress.add_on,
        username: progress.user.username,
        university: progress.user.profile.university,
        major: progress.user.profile.major,
        order_code: progress.order.order_code,
        product: progress.products.name,
        topic: progress.topic?.topic,
        session: progress.session,
        date: progress.date,
        time: progress.time,
        location: progress.location,
        number: progress.user.profile.phone_number,
        tutor: progress.tutor_id,
        rate_product: progress.product_review?.rate_product,
        note_product: progress.product_review?.note_product,
        note: progress.note,
    });

    const type = "tuntas";

    return (
        <DashboardLayout
            title="Bimbingan"
            subtitle="Progress"
            role="moderator"
            auth={auth}
        >
            {/* {isLoading && <LoadingUI />} */}
            <div className="space-y-[1.6vw]">
                <div className="flex justify-between items-center">
                    <Breadcrumb level={2} isSlug />

                    <div className="space-x-[.8vw]">
                        <GoalsButton
                            variant="success-bordered"
                            size="sm"
                            onClick={() =>
                                router.replace(
                                    route("moderator.bimbingan.progress.index")
                                )
                            }
                        >
                            Batal
                        </GoalsButton>
                        <GoalsButton
                            variant="success"
                            size="sm"
                            onClick={() =>
                                post(
                                    "moderator.bimbingan.progress.updateOnline",
                                    {
                                        data: data,
                                    }
                                )
                            }
                        >
                            Simpan
                        </GoalsButton>
                    </div>
                </div>

                <div className=" gap-[1.2vw] grid grid-cols-2">
                    <div className="grid gap-[1.2vw]">
                        <FormSection
                            title="User Information"
                            titleAction={
                                <SliderButton label="Moderator confirmation" />
                            }
                        >
                            <GoalsTextInput
                                label="Username"
                                data={data.username}
                                setData={(i) => setData("username", i)}
                                disabled
                            />
                            <GoalsTextInput
                                label="University"
                                disabled
                                data={data.university}
                                setData={(i) => setData("university", i)}
                            />
                            <GoalsTextInput
                                label="Major"
                                disabled
                                data={data.major}
                                setData={(i) => setData("major", i)}
                            />
                            <div className="flex gap-[.4vw] w-full items-end">
                                <GoalsTextInput
                                    label="Number"
                                    grow
                                    data={data.number}
                                    setData={(i) => setData("number", i)}
                                />
                                <a href="wa.me/6289123456789" target="_blank">
                                    <FaWhatsappSquare className="text-[#00D95F] text-[3.5vw] -m-[5px]" />
                                </a>
                            </div>
                            <div className="flex gap-[.4vw] w-full items-end">
                                <SelectInput
                                    label="Tutor"
                                    value={
                                        tutors.filter(
                                            (item) => item.id == data.tutor
                                        )[0].name
                                    }
                                    className="w-full"
                                >
                                    {tutors.map((item, index) => {
                                        return (
                                            <SelectInputItem
                                                onClick={() => {
                                                    console.log(item.id);
                                                    console.log(data.tutor);
                                                    setData("tutor", item.id);
                                                }}
                                            >
                                                {item.name}
                                            </SelectInputItem>
                                        );
                                    })}
                                </SelectInput>
                                <a href="wa.me/6289123456789" target="_blank">
                                    <FaWhatsappSquare className="text-[#00D95F] text-[3.5vw] -m-[5px]" />
                                </a>
                            </div>
                        </FormSection>
                        <FormSection
                            title="Review"
                            titleAction={
                                <StarRating
                                    totalStars={5}
                                    rating={data.rate_product}
                                    size="sm"
                                />
                            }
                        >
                            <textarea
                                id="deskripsi"
                                placeholder="Deskripsi singkat tentang program ini"
                                disabled
                                className="disabled:bg-gray-100 disabled:border-gray-300 w-full h-[7.8vw] border border-neutral-50 text-[.83vw] rounded-[.4vw] px-[1.2vw] md:py-[1vw] resize-none "
                            >
                                {data.note_product}
                            </textarea>
                        </FormSection>
                    </div>
                    <div className="grid gap-[1.2vw]">
                        <FormSection
                            title="Order Details"
                            titleAction={
                                <button className="flex items-center gap-[.4vw] text-[.8vw] text-primary">
                                    File & Media{" "}
                                    <RxFileText className="md:text-[1vw]" />
                                </button>
                            }
                        >
                            <GoalsTextInput
                                label="Order Id"
                                disabled
                                data={data.order_code}
                                setData={(i) => setData("order_code", i)}
                            />
                            <GoalsTextInput
                                label="Product"
                                disabled
                                data={data.product}
                                setData={(i) => setData("product", i)}
                            />
                            <GoalsTextInput
                                label="Topic"
                                disabled
                                data={data.topic}
                                setData={(i) => setData("topic", i)}
                            />
                            {/* <GoalsTextInput label="Add-on" disabled /> */}
                            <SelectMultiTag
                                disabled
                                value={data.add_on}
                                label="Add on"
                                handleClearTag={() =>
                                    setData({ ...data, add_on: [] })
                                }
                            >
                                {data.add_on?.map((option, i) => {
                                    return (
                                        <SelectMultiTagItem
                                            key={i}
                                            onClick={() => {
                                                if (
                                                    !data.add_on.some(
                                                        (item) =>
                                                            item === option
                                                    )
                                                ) {
                                                    setData({
                                                        ...data,
                                                        add_on: [
                                                            ...data.add_on,
                                                            option,
                                                        ],
                                                    });
                                                }
                                            }}
                                        >
                                            {option.name}
                                        </SelectMultiTagItem>
                                    );
                                })}
                            </SelectMultiTag>
                            {type === "tuntas" && (
                                <GoalsTextInput
                                    label="Session"
                                    disabled
                                    data={data.session}
                                    setData={(i) => setData("session", i)}
                                />
                            )}

                            <GoalsTextInput
                                label="Location (Link Zoom)"
                                disabled
                                data={data.location}
                                setData={(i) => setData("location", i)}
                            />
                            <div className="flex gap-[.8vw]">
                                <GoalsTextInput
                                    label="Date"
                                    disabled
                                    grow
                                    data={data.date}
                                    setData={(i) => setData("date", i)}
                                />
                                <GoalsTextInput
                                    label="Time"
                                    disabled
                                    grow
                                    data={data.time}
                                    setData={(i) => setData("time", i)}
                                />
                            </div>

                            <input type="file" className="" />
                        </FormSection>
                        <FormSection
                            title="Tutor Information"
                            titleAction={
                                <button className="flex items-center gap-[.4vw] text-[.8vw] text-primary">
                                    File & Media{" "}
                                    <RxFileText className="md:text-[1vw]" />
                                </button>
                            }
                        >
                            <textarea
                                id="deskripsi"
                                placeholder="Deskripsi singkat tentang program ini"
                                disabled
                                className="disabled:bg-gray-100 disabled:border-gray-300 w-full h-[7.8vw] border border-neutral-50 text-[.83vw] rounded-[.4vw] px-[1.2vw] md:py-[1vw] resize-none "
                            >
                                {data.note}
                            </textarea>
                        </FormSection>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
