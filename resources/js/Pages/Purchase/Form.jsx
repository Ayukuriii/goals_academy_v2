import { useState } from "react";
import { useForm } from "@inertiajs/react";
import moment from "moment";
import MainLayout from "@/Layouts/MainLayout";
import GoalsButton from "@/Components/GoalsButton";
import ExpandedButton from "@/Components/ExpandedButton";
import GoalsDatePicker from "@/Components/Form/GoalsDatePicker";
import { GoalsSelectInput, GoalsSelectInputItem } from "@/Components/Form/GoalsSelectInput";
import { GoalsSelectMultipleInput, GoalsSelectMultipleInputItem } from "@/Components/Form/GoalsSelectMultipleInput";
import GoalsUploadFile from "@/Components/Form/GoalsUploadFile";
import PromoForm from "@/Pages/Partials/Purchase/Form/PromoForm";
import PurchaseMethodForm from "@/Pages/Partials/Purchase/Form/PurchaseMethodForm";
import { createTheme } from "@mui/material";
import "@/script/momentCustomLocale";
import { FiInfo } from "react-icons/fi";

export default function Form({ auth, date, dataProduct, paymentMethods }) {
    const userId = auth.user.id;
    // console.log(dataProduct);
    // Code to input form data
    const { data, setData, errors, setError, post } = useForm({
        schedule: "",
        city: "",
        place: "",
        document: [],
        topic: "",
        init_price: dataProduct.price,
        promo: "",
        discount: 0,
        purchase_method: "",
        admin: 0,
        product_id: dataProduct.id,
        add_on: [],
        add_on_price: 0,
        total_price: dataProduct.price,
    });

    // Code to input temp form data
    const { data: temp, setData: setTemp } = useForm({
        schedule: "",
        city: "",
        place: "",
        document: "",
        topic: "",
        init_price: dataProduct.price,
        promo: "",
        discount: 0,
        purchase_method: "",
        admin: 0,
        product_id: dataProduct.id,
        add_on: [],
        add_on_price: 0,
    });

    // Initialize product's category
    const categoriesName = dataProduct.categories
        .map((item) => item.name)
        .join(" ")
        .toLowerCase();
    // const category = categoriesName.includes("online")
    //     ? "online"
    //     : categoriesName.includes("offline")
    //     ? "offline"
    //     : categoriesName.includes("tuntas")
    //     ? "tuntas"
    //     : categoriesName.includes("review")
    //     ? "review"
    //     : "";
    const category = "offline";

    // Initialize form rules
    let rules = {};

    // Initialize available availableAddOn
    let availableAddOn = dataProduct.add_ons;

    if (category == "online") {
        rules = {
            schedule: 1,
            topic: 0,
            document: 0,
            add_on: 0,
        };
    } else if (category == "offline") {
        rules = {
            schedule: 1,
            city: 1,
            place: 1,
            topic: 0,
            document: 0,
            add_on: 0,
        };
    } else if (category == "tuntas") {
        rules = {
            topic: 0,
            document: 0,
            add_on: 0,
        };
        availableAddOn.pop();
    } else if (category == "review") {
        rules = {
            topic: 1,
            document: 1,
            add_on: 0,
        };
    }

    // Code to initialize unavailable dates
    const unavailableDate = date.map((i) => i.date);

    // Initialize Cities and Places option
    const cities = ["Malang", "Surabaya", "Jakarta"];
    const places = {
        Malang: ["Kafe 1", "Kafe 2", "Kafe 3", "Kafe 4", "Kafe 5"],
        Surabaya: ["Kafe 6", "Kafe 7", "Kafe 8", "Kafe 9", "Kafe 10"],
        Jakarta: ["Kafe 11", "Kafe 12", "Kafe 13", "Kafe 14", "Kafe 15"],
    };

    // Initialize Topics
    const topics = [
        "Topic 1",
        "Topic 2",
        "Topic 3",
        "Topic 4",
        "Topic 5",
        "Topic 6",
        "Topic 7",
        "Topic 8",
    ];

    // Initialize purchase methods
    const purchaseMethods = paymentMethods;

    // Submit function
    const submit = (e) => {
        e.preventDefault();
        post("/produk");
    };

    // Code to check and input promo
    const promoHandler = (inputCode, successCallback, processCallback) => {
        processCallback(true);
        fetch("/api/coupon-check", {
            method: "post",
            headers: {
                accept: "application.json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputCode: inputCode, userId: userId }),
        })
            .then((response) => response.json())
            .then((response) => {
                processCallback(false);
                if ("data" in response) {
                    let promoDiscount = 0;
                    if (parseInt(response.data.is_price)) {
                        promoDiscount = parseFloat(response.data.value);
                    } else {
                        promoDiscount =
                            (parseFloat(data.init_price) *
                                parseFloat(response.data.value)) /
                            100;
                    }
                    let adminFee = 0;
                    if (data.purchase_method != "") {
                        if (parseInt(data.purchase_method.is_price)) {
                            adminFee = parseFloat(
                                data.purchase_method.admin_fee
                            );
                        } else {
                            adminFee = Math.ceil(
                                ((parseFloat(data.init_price) -
                                    parseFloat(promoDiscount) +
                                    parseFloat(data.add_on_price)) *
                                    parseFloat(
                                        data.purchase_method.admin_fee
                                    )) /
                                    100
                            );
                        }
                    }
                    const totalPrice =
                        parseFloat(data.init_price) -
                        parseFloat(promoDiscount) +
                        parseFloat(data.add_on_price) +
                        adminFee;
                    setData({
                        ...data,
                        promo: temp.promo,
                        discount: promoDiscount,
                        admin: adminFee,
                        total_price: totalPrice,
                    });
                    alert(response.message);
                    successCallback();
                } else {
                    setTemp({ ...temp, promo: data.promo, discount: 0 });
                    alert(response.message);
                }
            });
    };

    return (
        <MainLayout auth={auth} title="Purchase">
            <section
                id="purchase-form"
                className="mb-[12vw] md:mb-16 lg:mb-20 xl:mb-24 3xl:mb-32"
            >
                <div className="md:container mx-auto pt-[12vw] md:pt-[1vw] justify-between text-[3.5vw] md:text-[1vw] space-y-[1vw]">
                    <div className="flex flex-col md:flex-row gap-[4vw] md:gap-0">
                        <MainCard
                            dataProduct={dataProduct}
                            data={data}
                            setData={setData}
                            temp={temp}
                            setTemp={setTemp}
                            unavailableDate={unavailableDate}
                            availableAddOn={availableAddOn}
                            cities={cities}
                            places={places}
                            topics={topics}
                            rules={rules}
                        />
                        <SummaryCard
                            dataProduct={dataProduct}
                            data={data}
                            setData={setData}
                            temp={temp}
                            setTemp={setTemp}
                            purchaseMethods={purchaseMethods}
                            totalPrice={data.total_price}
                            promoHandler={promoHandler}
                            submit={submit}
                            rules={rules}
                        />
                    </div>
                    <LengkapiProfilAlert data={data} setData={setData} />
                </div>
            </section>
        </MainLayout>
    );
}

function MainCard({
    dataProduct,
    data,
    setData,
    temp,
    setTemp,
    unavailableDate,
    availableAddOn,
    cities,
    places,
    topics,
    rules,
}) {
    const [showForm, setShowForm] = useState({
        schedule: false,
        city: false,
        place: false,
        topic: false,
        addOn: false,
        document: false,
    });
    const features = dataProduct.features[0];
    const theme = createTheme({
        typography: {
            fontSize: {
                1: "1vw",
                4: "4vw",
            },
        },
    });

    const showFormHandler = (key, value) => {
        const tempShowForm = { ...showForm };
        Object.keys(tempShowForm).forEach((i) => {
            i == key ? (tempShowForm[i] = value) : (tempShowForm[i] = false);
        });
        setShowForm(tempShowForm);
    };

    return (
        <div className="md:w-[72%] border-1 md:rounded-[.8vw] md:p-[1.75vw] h-fit">
            <div className="flex flex-col gap-[4vw] md:gap-0">
                <div className="container md:w-full mx-auto flex flex-col gap-[4vw] md:gap-[1vw] py-[1vw] md:py-0">
                    <h3 className="w-8/12 md:w-full text-secondary font-semibold text-[5vw] md:text-[1.8vw]">
                        {dataProduct.name}
                    </h3>
                    <p>{dataProduct.description}</p>
                    <div className="flex flex-wrap items-center gap-[3vw] md:gap-[1.5vw]">
                        <div className="flex items-center gap-[3vw] md:gap-[.5vw]">
                            <i className="fa-regular fa-calendar text-primary"></i>
                            <p>{features.times}x Pertemuan</p>
                        </div>
                        <div className="flex items-center gap-[3vw] md:gap-[.5vw]">
                            <i className="fa-solid fa-clock text-[3vw] md:text-[.9vw] text-primary"></i>
                            <p>{features.duration} Menit</p>
                        </div>
                        <div className="flex items-center gap-[3vw] md:gap-[.5vw]">
                            <i className="fa-solid fa-location-dot text-primary"></i>
                            <p>
                                {features.category.slice(0, 1).toUpperCase() +
                                    features.category.slice(1)}
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="hidden md:block mt-[2vw] mb-[2.5vw]" />
                <div className="md:hidden h-[4vw] bg-slate-100"></div>
                <div className="container md:w-full mx-auto grid grid-cols-2 gap-[4vw] md:gap-[1vw] text-[.9vw]">
                    <div className="container md:w-full mx-auto flex flex-col gap-[4vw] md:gap-[1vw] py-[4vw] md:py-0">
                        <GoalsDatePicker
                            show={showForm.schedule}
                            setShow={(i) => showFormHandler("schedule", i)}
                            label="Pilih Jadwal Bimbinganmu"
                            data={data.schedule}
                            setData={(i) => setData("schedule", i)}
                            minDate={moment()}
                            maxDate={moment().add(6, "days")}
                            shouldDisableDate={unavailableDate}
                            theme={theme}
                            slotProps={{
                                toolbar: { hidden: true },
                                actionBar: {
                                    sx: { display: "none" },
                                },
                                switchViewButton: {
                                    sx: { display: "none" },
                                },
                                nextIconButton: {
                                    sx: { fontSize: "1.75vw" },
                                },
                                previousIconButton: {
                                    sx: { fontSize: "1.75vw" },
                                },
                                calendarHeader: {
                                    sx: {
                                        fontSize: "1vw",
                                        height: "4vw",
                                        maxHeight: "unset",
                                        margin: 0,
                                        padding: "0 0 1vw 1.25vw",
                                    },
                                },
                            }}
                            sx={{
                                fontSize: "fontSize.1",
                                minWidth: "unset",
                                width: "100%",
                                height: "20vw",
                                padding: "0 1vw 0",
                                maxHeight: "unset",
                                "& .MuiDateCalendar-root": {
                                    width: "100%",
                                    height: "fit-content",
                                    maxHeight: "unset",
                                },
                                "& .MuiPickersLayout-contentWrapper": {
                                    width: "100%",
                                    height: "100%",
                                },
                                "& .MuiDayCalendar-monthContainer": {
                                    width: "100%",
                                    height: "fit-content",
                                    position: "relative",
                                },
                                "& .MuiPickersSlideTransition-root": {
                                    width: "100%",
                                    height: "fit-content",
                                    minHeight: "unset",
                                },
                                "& .MuiDayCalendar-weekDayLabel": {
                                    width: "2.5vw",
                                    height: "2.5vw",
                                },
                                "& .MuiPickersDay-root": {
                                    width: "2.5vw",
                                    height: "2.5vw",
                                },
                                "& .MuiPickersDay-root.Mui-selected": {
                                    backgroundColor: "#FF8854",
                                },
                                "& .MuiPickersDay-root.Mui-selected:hover": {
                                    backgroundColor: "#FF6420",
                                },
                                "& .MuiPickersYear-yearButton.Mui-selected": {
                                    backgroundColor: "#FF8854",
                                },
                            }}
                        />
                        <GoalsSelectInput
                            show={showForm.city}
                            setShow={(i) => showFormHandler("city", i)}
                            label="Kota Bimbingan"
                            placeholder="Pilih Kota"
                            data={data.city}
                        >
                            {cities.map((item, index) => {
                                return (
                                    <GoalsSelectInputItem
                                        key={index}
                                        onClick={() => setData("city", item)}
                                    >
                                        {item}
                                    </GoalsSelectInputItem>
                                );
                            })}
                        </GoalsSelectInput>
                        <GoalsSelectInput
                            show={showForm.place}
                            setShow={(i) => showFormHandler("place", i)}
                            label="Lokasi Bimbingan"
                            placeholder="Pilih Lokasi Bimbingan"
                            data={data.place}
                        >
                            {data.city != "" ? (
                                places[data.city].map((item, index) => {
                                    return (
                                        <GoalsSelectInputItem
                                            key={index}
                                            onClick={() =>
                                                setData("place", item)
                                            }
                                        >
                                            {item}
                                        </GoalsSelectInputItem>
                                    );
                                })
                            ) : (
                                <GoalsSelectInputItem>
                                    Pilih kota terlebih dahulu
                                </GoalsSelectInputItem>
                            )}
                        </GoalsSelectInput>
                        <GoalsSelectInput
                            show={showForm.topic}
                            setShow={(i) => showFormHandler("topic", i)}
                            label="Topik Bimbingan"
                            placeholder="Pilih Topik Bimbingan"
                            data={data.topic}
                        >
                            {topics.map((item, index) => {
                                return (
                                    <GoalsSelectInputItem
                                        key={index}
                                        onClick={() => setData("topic", item)}
                                    >
                                        {item}
                                    </GoalsSelectInputItem>
                                );
                            })}
                        </GoalsSelectInput>
                        <GoalsSelectMultipleInput
                            show={showForm.addOn}
                            setShow={(i) => {
                                if (
                                    !(
                                        data.add_on.every(
                                            (i) =>
                                                temp.add_on.filter(
                                                    (j) => j.id == i.id
                                                ).length
                                        ) &&
                                        temp.add_on.every(
                                            (i) =>
                                                data.add_on.filter(
                                                    (j) => j.id == i.id
                                                ).length
                                        )
                                    )
                                ) {
                                    setTemp("add_on", data.add_on);
                                }
                                showFormHandler("addOn", i);
                            }}
                            label="Add-On"
                            placeholder="Tambah Add-On"
                            data={data.add_on}
                            onClick={() => {
                                if (
                                    !(
                                        data.add_on.length == 0 &&
                                        temp.add_on.length == 0
                                    ) &&
                                    !(
                                        data.add_on.every(
                                            (i) =>
                                                temp.add_on.filter(
                                                    (j) => j.id == i.id
                                                ).length
                                        ) &&
                                        temp.add_on.every(
                                            (i) =>
                                                data.add_on.filter(
                                                    (j) => j.id == i.id
                                                ).length
                                        )
                                    )
                                ) {
                                    let addOnPrice = 0;
                                    if (temp.add_on.length) {
                                        addOnPrice = temp.add_on
                                            .map((i) => parseFloat(i.price))
                                            .reduce(
                                                (total, i) =>
                                                    parseFloat(total) +
                                                    parseFloat(i)
                                            );
                                    } else {
                                        addOnPrice = 0;
                                    }
                                    let adminFee = 0;
                                    if (data.purchase_method != "") {
                                        if (
                                            parseInt(
                                                data.purchase_method.is_price
                                            )
                                        ) {
                                            adminFee = parseFloat(
                                                data.purchase_method.admin_fee
                                            );
                                        } else {
                                            adminFee = Math.ceil(
                                                ((parseFloat(data.init_price) -
                                                    parseFloat(data.discount) +
                                                    addOnPrice) *
                                                    parseFloat(
                                                        data.purchase_method
                                                            .admin_fee
                                                    )) /
                                                    100
                                            );
                                        }
                                    }
                                    const totalPrice =
                                        parseFloat(data.init_price) -
                                        parseFloat(data.discount) +
                                        addOnPrice +
                                        adminFee;
                                    setData({
                                        ...data,
                                        add_on: temp.add_on,
                                        add_on_price: addOnPrice,
                                        admin: adminFee,
                                        total_price: totalPrice,
                                    });
                                }
                            }}
                        >
                            {availableAddOn.map((item, index) => {
                                return (
                                    <GoalsSelectMultipleInputItem
                                        key={index}
                                        checked={
                                            temp.add_on.filter(
                                                (i) => i.id == item.id
                                            ).length
                                        }
                                        onClick={() => {
                                            if (
                                                temp.add_on.filter(
                                                    (i) => i.id == item.id
                                                ).length
                                            ) {
                                                setTemp(
                                                    "add_on",
                                                    temp.add_on.filter(
                                                        (i) => i.id != item.id
                                                    )
                                                );
                                            } else {
                                                const tempAddOn =
                                                    temp.add_on.slice();
                                                tempAddOn.push(item);
                                                setTemp("add_on", tempAddOn);
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </GoalsSelectMultipleInputItem>
                                );
                            })}
                        </GoalsSelectMultipleInput>
                    </div>
                    <GoalsUploadFile
                        data={data}
                        removeFile={(i) => {
                            setData(
                                "document",
                                data.document.filter((j) => j != i)
                            );
                        }}
                        setData={(i) =>
                            setData({
                                ...data,
                                document: data.document.concat(i),
                            })
                        }
                    />
                </div>
                <div className="md:hidden h-[4vw] bg-slate-100"></div>
            </div>
        </div>
    );
}

function SummaryCard({
    dataProduct,
    data,
    setData,
    temp,
    setTemp,
    purchaseMethods,
    promoHandler,
    totalPrice,
    submit,
    rules,
}) {
    const [showPromoForm, setShowPromoForm] = useState(false);
    const [showPurchaseMethodForm, setShowPurchaseMethodForm] = useState(false);
    const [showDocument, setShowDocument] = useState(true);
    const currency = Intl.NumberFormat("id-ID");
    return (
        <div className="md:w-[30%] md:ms-[3vw] flex flex-col gap-[4vw] md:gap-[2vw]">
            <div className="relative border-1 md:rounded-[1vw] pt-[2vw] md:p-[1.75vw] h-fit">
                <div className="container md:w-full mx-auto">
                    <div className="flex flex-col-reverse md:flex-col gap-[4vw] md:gap-0">
                        <ExpandedButton
                            className={`rounded-[.8vw] md:rounded-[.4vw] bg-green-50 text-green-500 border-1 border-green-500 h-[9vw] md:h-[3.1vw] mb-[1.5vw]`}
                            textClassName="font-normal"
                            onClick={() => setShowPromoForm(!showPromoForm)}
                        >
                            {data.discount > 0
                                ? "Promo Terpakai"
                                : "Masukkan Kode Promo"}
                        </ExpandedButton>
                        <div>
                            <div className="hidden md:block">
                                <h5 className="font-semibold mb-[2vw] md:mb-[.5vw] text-[3vw] md:text-[1vw]">
                                    Deskripsi Pesanan
                                </h5>
                            </div>
                            <div className="md:hidden">
                                <h5 className="md:hidden font-medium my-[2vw] md:mb-[.5vw] text-[3vw] md:text-[1.2vw]">
                                    Ringkasan Transaksi
                                </h5>
                                <hr className="border-dark" />
                            </div>
                            <table className="w-full border-separate border-spacing-y-[3vw] md:border-spacing-y-[.5vw] text-gray-500 my-1">
                                <tbody>
                                    <tr>
                                        <td>Dibimbing Sekali</td>
                                        <td className="font-bold text-right">
                                            {currency.format(data.init_price) >
                                            0
                                                ? `IDR ${currency.format(
                                                      data.init_price
                                                  )}`
                                                : "IDR 0"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Promo</td>
                                        <td className="font-bold text-right">
                                            {currency.format(data.discount) > 0
                                                ? `IDR ${currency.format(
                                                      data.discount
                                                  )}`
                                                : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Add-On</td>
                                        <td className="font-bold text-right">
                                            {currency.format(
                                                parseFloat(data.add_on_price)
                                            ) > 0
                                                ? `IDR ${currency.format(
                                                      parseFloat(
                                                          data.add_on_price
                                                      )
                                                  )}`
                                                : "-"}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Biaya Admin</td>
                                        <td className="font-bold text-right">
                                            {data.admin != 0 ? data.admin : "IDR 0"}
                                        </td>
                                    </tr>
                                    {data.add_on.map((item, index) => {
                                        return (
                                            <tr>
                                                <td>{item.name}</td>
                                                <td className="font-bold text-right">
                                                    IDR {currency.format(item.price)}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <hr className="mt-[.5vw] mb-[1vw]" />
                        <div className="hidden md:flex justify-between items-center font-poppins mb-[1.25vw]">
                            <p className="font-semibold text-[3vw] md:text-[1vw] text-black">
                                Total
                            </p>
                            <h2 className="font-semibold text-secondary md:text-[1.3vw] text-right">
                                IDR {currency.format(totalPrice)}
                            </h2>
                        </div>
                        <div className="grid gap-[4vw] md:gap-[1.25vw]">
                            <ExpandedButton
                                className={`rounded-[.8vw] md:rounded-[.4vw] h-[9vw] md:h-[3.1vw] border-1 border-light-grey`}
                                textClassName="font-normal"
                                onClick={() =>
                                    setShowPurchaseMethodForm(
                                        !showPurchaseMethodForm
                                    )
                                }
                            >
                                {data.purchase_method != "" ? (
                                    <div className="flex items-center gap-[2vw] md:gap-[.5vw]">
                                        <img
                                            src={`/img/purchase/${data.purchase_method.name.toLowerCase()}.png`}
                                            alt={data.purchase_method.name}
                                            className="w-[4vw] md:w-[1.5vw]"
                                        />
                                        {data.purchase_method.name}
                                    </div>
                                ) : (
                                    "Pilih Metode Pembayaran"
                                )}
                            </ExpandedButton>
                        </div>
                    </div>
                    <div>
                        <PromoForm
                            show={showPromoForm}
                            setShow={setShowPromoForm}
                            data={data}
                            setData={setData}
                            temp={temp}
                            setTemp={setTemp}
                            promoHandler={promoHandler}
                        />
                        <PurchaseMethodForm
                            show={showPurchaseMethodForm}
                            setShow={setShowPurchaseMethodForm}
                            data={data}
                            setData={setData}
                            temp={temp}
                            setTemp={setTemp}
                            purchaseMethods={purchaseMethods}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-[4vw] md:mt-0">
                        <div className="md:hidden">
                            <p className="mb-[1vw]">Total pembelian</p>
                            <p className="font-poppins text-secondary font-bold text-[5.25vw]">
                                IDR {currency.format(totalPrice)}
                            </p>
                        </div>
                        <GoalsButton
                            className="w-6/12 md:w-full mt-[1.25vw] xl:py-[1vw] rounded-[.5vw]"
                            isActive={
                                !(
                                    data["purchase_method"] == "" ||
                                    Object.keys(
                                        Object.fromEntries(
                                            Object.entries(rules).filter(
                                                ([, value]) => value
                                            )
                                        )
                                    )
                                        .map((i) => data[i])
                                        .includes("")
                                )
                            }
                            onClick={submit}
                        >
                            Bayar Sekarang
                        </GoalsButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LengkapiProfilAlert = ({ data, setData }) => {
    const [showLengkapiProfilForm, setShowLengkapiProfilForm] = useState(false);

    return (
        <div>
            <LengkapiProfilForm
                show={showLengkapiProfilForm}
                setShow={setShowLengkapiProfilForm}
                data={data}
                setData={setData}
            />

            <div className="md:w-[67%] border-1 md:rounded-[1vw] md:p-[1.75vw] h-fit bg-info-10 flex justify-between items-center">
                <div className="flex items-center gap-[1vw]">
                    <FiInfo className="text-[2vw] text-info-50" />
                    <span className="font-semibold text-[.83vw]">
                        Yuk, lengkapin profilnya agar bisa transaksi !
                    </span>
                </div>
                <button
                    className="flex items-center bg-info-50 hover:bg-info-30 rounded-[0.4vw] px-[1.6vw] py-[0.6vw] text-[.8vw] text-white"
                    onClick={() => setShowLengkapiProfilForm(true)}
                >
                    Lengkapi Profil
                </button>
            </div>
        </div>
    );
};
