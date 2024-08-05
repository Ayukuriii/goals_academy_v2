import React from "react";
import { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function FAQ({ data }) {
    return (
        <section className="w-[90vw] mx-auto py-[7.4vw] md:py-[3.7vw]">
            <div className="flex flex-wrap justify-between mx-auto">
                <div className="w-full relative space-y-[5.5vw] md:space-y-[2.5vw]">
                    <h2 className="text-[3.7vw] md:text-[1.8vw] text-center">
                        Paling Sering{" "}
                        <span className="text-primary-40">Ditanyakan</span>
                    </h2>
                    <FAQContent data={data} />
                </div>
            </div>
        </section>
    );
}

function FAQItem({ id, show, toggleShow, question, answer }) {
    const condition = show[id];

    function FAQIcon() {
        if (condition) {
            return (
                <i className="flex items-center justify-center w-4 h-4 text-white rounded-full fa-solid fa-minus bg-secondary text-10 xs:text-12 md:text-6 lg:text-10 xl:text-12 xs:w-5 xs:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"></i>
            );
        } else {
            return (
                <i className="flex items-center justify-center w-4 h-4 text-white rounded-full fa-solid fa-plus bg-secondary text-10 xs:text-12 md:text-6 lg:text-10 xl:text-12 xs:w-5 xs:h-5 md:w-3 md:h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5"></i>
            );
        }
    }

    return (
        <>
            <button
                type="button"
                className="flex items-center w-full gap-3 p-[3.7vw] shadow-md rounded-[2.7vw] md:rounded-[.8vw] md:p-[1.2vw]"
                onClick={() => toggleShow(id)}
            >
                {/* <div><FAQIcon /></div> */}
                <div className="text-start">
                    <p className="font-medium">{question}</p>
                    <TECollapse show={condition} className="shadow-none">
                        {/* <br /> */}
                        <div>{answer}</div>
                    </TECollapse>
                </div>
                <i className={`ml-auto text-secondary fa-solid fa-chevron-down transition-all ${
                    condition ? "transform rotate-180" : ""
                }`}></i>
            </button>
        </>
    );
}

function FAQContent({ data }) {
    const [show, setShow] = useState(Array(data.length).fill(false));

    const toggleShow = (id) => {
        const temp = Array(data.length).fill(false);
        temp[id] = !show[id];
        setShow(temp);
    };

    return (
        <div className="w-full space-y-[1.3vw] md:space-y-[.8vw]">
            {data.map(({ question, answer }, index) => {
                if (index != data.length - 1) {
                    return (
                        <div key={index} className="">
                            <FAQItem
                                id={index}
                                show={show}
                                toggleShow={toggleShow}
                                question={question}
                                answer={answer}
                            />
                            {/* <hr className="border-dark" /> */}
                        </div>
                    );
                } else {
                    return (
                        <FAQItem
                            key={index}
                            id={index}
                            show={show}
                            toggleShow={toggleShow}
                            question={question}
                            answer={answer}
                        />
                    );
                }
            })}
        </div>
    );
}
