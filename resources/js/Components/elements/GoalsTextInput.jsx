import React from "react";
import { FiX } from "react-icons/fi";

const GoalsTextInput = ({
    type = "text",
    label = "",
    placeholder = "Goals Input",
    className = "",
    error = "",
    success = "",
    data,
    setData,
    cancelButton=false,
    required=false,
    ...rest
}) => {
    return (
        <div className="flex flex-col gap-[2vw] md:gap-[.4vw]">
            {label != "" ? (
                <label>{label}<sup className={`${required ? "" : "hidden"} text-red-600`}>*</sup></label>
            ) : (<></>)}
            <div>
                <div className="relative flex">
                    <input
                        {...rest}
                        type={type}
                        placeholder={placeholder}
                        className={`w-full flex justify-between items-center focus:ring-0 focus:border-neutral-50 px-[3vw] md:px-[1vw] rounded-md border border-neutral-50 text-dark h-[12vw] md:h-[3vw] placeholder:text-light-grey ${cancelButton ? 'pe-[9vw] md:pe-[2.6vw]' : ''} ${className}`}
                    />
                    {cancelButton ? (
                        data != "" ? (
                            <div className="absolute right-0 top-[5%] me-[2.4vw] md:me-[.8vw] h-[90%] cursor-pointer bg-white flex items-center">
                                <FiX className="text-[4.5vw] md:text-[1.25vw]" onClick={() => setData("")} />
                            </div>
                        ) : (<></>)
                    ) : (<></>)}
                </div>
                {error != "" ? (
                    <p className="text-red-500 text-[3.6vw] md:text-[.9vw]">{error}</p>
                ) : (<></>)}
                {success != "" ? (
                    <p className="text-green-500 text-[3.6vw] md:text-[.9vw]">{success}</p>
                ) : (<></>)}
            </div>
        </div>
    );
};

export default GoalsTextInput;
