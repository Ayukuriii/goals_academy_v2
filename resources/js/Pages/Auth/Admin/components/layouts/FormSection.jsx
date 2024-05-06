const FormSection = ({
    title,
    children = <></>,
    titleAction = <></>,
    className = "",
    bordered = false
}) => {
    return (
        <div
            className={`${bordered && "border"} bg-white w-full rounded-[.8vw] pt-[3.3vw] pb-[5.5vw] md:p-[3.3vw] space-y-[5.5vw] md:space-y-[1.6vw] ${className}`}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-[1vw] font-medium">{title}</h2>

                {titleAction}
            </div>
            <div className="space-y-[1.2vw]">{children}</div>
        </div>
    );
};

export default FormSection;
