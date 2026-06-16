


export const Fifth_text_div = ({title,para, main_style, specific_name}) => {
    return (
        <div key={specific_name.key} className={`  flex flex-col  p-0 mx-0 ${specific_name.text_div}   sm:w-full sm:mx-5 md:mx-0  h-auto gap-4 sm:w-1/2     fifth-text   justify-center items-center   ${main_style} `}>

            <h1 className={`fith_title_h1 p-0 text-black ${specific_name.text}  text-center sm:text-2xl text-lg font-semibold  `}>{title}</h1>

                <p className={`fifth_para_p m-0 sm:text-center  text-center sm:text-xl text-sm  ${specific_name.para} `}>
                    {para}
                </p>
        

        </div>
    );
}
