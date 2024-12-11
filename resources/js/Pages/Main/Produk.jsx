import { useState } from "react";
import { useForm } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Filter from "../Partials/Produk/Filter";
import SearchBar from "../Partials/Produk/SearchBar";
import Bimbingan from "../Partials/Produk/Bimbingan";
import JasaRiset from "../Partials/Produk/JasaRiset";
import ProdukDigital from "../Partials/Produk/ProdukDigital";
import Webinar from "../Partials/Produk/Webinar";
import Consultation from "../Partials/Produk/Consultation";

import program1 from "/resources/img/program/dibimbing-online-30.png";
import program2 from "/resources/img/program/dibimbing-online-45.png";
import program3 from "/resources/img/program/dibimbing-offline-60.png";
import program4 from "/resources/img/program/dibimbing-offline-90.png";
import program5 from "/resources/img/program/dibimbing-tuntas.png";
import program6 from "/resources/img/program/dibimbing-olah-data.png";

import produkdigital1 from "/resources/img/produk-digital/1.png";
import produkdigital2 from "/resources/img/produk-digital/2.png";
import produkdigital3 from "/resources/img/produk-digital/3.png";

import webinar1 from "/resources/img/webinar/1.png";
import webinar2 from "/resources/img/webinar/2.png";
import webinar3 from "/resources/img/webinar/3.png";
import webinar4 from "/resources/img/webinar/4.png";
import { data } from "autoprefixer";
import SkripsiMastery from "../Partials/Produk/SkripsiMastery";

export default function Produk({
    auth,
    dataBimbingan,
    dataSkripsiMastery,
    dataJasaRiset,
    dataProdukDigital,
    dataWebinar,
    categories,
}) {
    const categoriesBimbingan = ['Semua'].concat(
        categories
        .filter(i => i.product_type.type == 'Bimbingan')
        .map(i => i.name)
    )
    const categoriesJasaRiset = ['Semua'].concat(
        categories
        .filter(i => i.product_type.type == 'Jasa Riset')
        .map(i => i.name)
    )

    const [show, setShow] = useState(Array(3).fill(false));
    const { data: searchKeyword, setData: setSearchKeyword } = useForm({keyword: ''});
    const [data1, setData1] = useState(dataBimbingan.slice());
    const [data2, setData2] = useState(dataProdukDigital.slice());
    const [data3, setData3] = useState(dataWebinar.slice());
    const [data4, setData4] = useState(dataJasaRiset.slice());
    const [data5, setData5] = useState(dataSkripsiMastery.slice());
    const [category1, setCategory1] = useState('Semua');
    const [category4, setCategory4] = useState('Semua');

    const status = ((show[0] == show[1]) == show[2]) == false;

    const searchHandler = (keyword) => {
        const temp1 = dataBimbingan
            .slice()
            .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()));
        const temp2 = dataProdukDigital
            .slice()
            .filter((item) => item.name.toLowerCase().includes(keyword));
        const temp3 = dataWebinar
            .slice()
            .filter((item) => item.name.toLowerCase().includes(keyword));
        const temp4 = dataJasaRiset
            .slice()
            .filter((item) => item.name.toLowerCase().includes(keyword));
        const temp5 = dataSkripsiMastery
            .slice()
            .filter((item) => item.name.toLowerCase().includes(keyword));
        setData1(temp1);
        setData2(temp2);
        setData3([]);
        setTimeout(() => {
            setData3(temp3);
        }, 0);
        setData4(temp4);
        setData4(temp5);
    };

    // const showHandler = (id) => {
    //     const temp = Array(3).fill(false);
    //     temp[id] = !show[id];
    //     setShow(temp);
    // };

    // const searchHandler = (keyword) => {
    //     let temp1
    //     if (category1 == 'Semua') {
    //         temp1 = dataBimbingan
    //             .slice()
    //             .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()));
    //     } else {
    //         temp1 = dataBimbingan
    //             .slice()
    //             .filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()))
    //             .filter((item) => item.category.name == category1);
    //     }
    //     const temp2 = dataProdukDigital
    //         .slice()
    //         .filter((item) => item.name.toLowerCase().includes(keyword));
    //     const temp3 = dataWebinar
    //         .slice()
    //         .filter((item) => item.title.toLowerCase().includes(keyword));
    //     setData1(temp1);
    //     setData2(temp2);
    //     setData3([]);
    //     setTimeout(() => {
    //         setData3(temp3);
    //     }, 0);
    // };

    const filterByCategory = (category, productType) => {
        if (productType == "bimbingan") {
            let temp1
            if (category == 'Semua') {
                temp1 = dataBimbingan
                .slice()
                .filter((item) => item.name.toLowerCase().includes(searchKeyword.keyword));
            } else {
                    temp1 = dataBimbingan
                        .slice()
                        .filter((item) => item.name.toLowerCase().includes(searchKeyword.keyword))
                        .filter((item) => item.category.name == category)
                }
            setData1(temp1)
            setCategory1(category)
        } else if (productType == "jasa-riset") {
            let temp4
            if (category == 'Semua') {
                temp4 = dataJasaRiset
                .slice()
                .filter((item) => item.name.toLowerCase().includes(searchKeyword.keyword));
            } else {
                    temp4 = dataJasaRiset
                        .slice()
                        .filter((item) => item.name.toLowerCase().includes(searchKeyword.keyword))
                        .filter((item) => item.category.name == category)
                }
            setData4(temp4)
            setCategory4(category)
        }
    }

    return (
        <MainLayout auth={auth} title="Produk">
            <SearchBar
                searchHandler={searchHandler}
                className="md:hidden"
                data={searchKeyword}
                setData={setSearchKeyword}
            />
            {/* <Filter show={show} showHandler={showHandler} /> */}
            <SearchBar
                searchHandler={searchHandler}
                className="hidden md:block"
                data={searchKeyword}
                setData={setSearchKeyword}
            />
            {/* <SkripsiMastery
                data={data5}
                active={true}
                status={status}
            /> */}
            <Bimbingan
                data={data1}
                active={show[0]}
                status={status}
                categories={categoriesBimbingan}
                category={category1}
                setCategory={setCategory1}
                filterHandler={filterByCategory}
            />
            <JasaRiset
                data={data4}
                active={true}
                status={status}
                categories={categoriesJasaRiset}
                category={category4}
                setCategory={setCategory4}
                filterHandler={filterByCategory}
                />
            <ProdukDigital
                data={data2}
                active={show[1]}
                status={status}
                // categories={categoriesBimbingan}
                // category={category2}
                // setCategory={setCategory2}
                // filterHandler={filterByCategory}
            />
            <Webinar data={data3} active={show[2]} status={status} />
            <Consultation />
        </MainLayout>
    );
}
