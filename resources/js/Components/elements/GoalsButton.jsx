import { Link } from "@inertiajs/react";
import React from "react";

const GoalsButton = ({
    className = "",
    children,
    variant = "primary",
    isLink = false,
    href = "/",
    ...rest
}) => {
    const Wrapper = isLink ? Link : "React.Fragment";

    function getVariantClassName() {
        switch (variant) {
            case "primary":
                return "bg-secondary hover:bg-primary text-white ";
            case "bordered":
                return "border-2 border-secondary text-secondary hover:border-primary hover:text-primary";
            case "info":
                return "bg-info-40 hover:bg-info-50 text-white";
            case "primary-inverse":
                return "bg-primary-10 text-secondary hover:bg-primary-20";
            case "success":
                return "bg-success-50 hover:bg-success-60 text-white";
            case "success-bordered":
                return "border-2 border-success-50 text-success-50 hover:border-success-60 hover:text-success-60 ";
            default:
                return "border-1 border-neutral-20";
        }
    }

    return (
        <Wrapper href={href}>
            <button
                className={`font-medium px-[8.3vw] md:px-[2vw] py-[3.2vw] md:py-[.8vw] rounded-[1.8vw] md:rounded-[.4vw] text-[3.7vw] md:text-[1vw] transition-all ${getVariantClassName()} ${className}`}
                {...rest}
            >
                {children}
            </button>
        </Wrapper>
    );
};

export default GoalsButton;
