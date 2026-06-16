

export const Image_div  = ({second_div_ref,image1,image2,image3,image4,image5}) => {

    return (

         <div ref={second_div_ref} className="w-full pt-20 overscroll-contain lg:grow-3 gap-10 grow-2 lg:flex-2 lg:shrink-2 h-screen max-h-screen f  text-black">
                        <div className="w-full h-[38vh] sm:h-[45vh] py-2 md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                            <img src={image1} alt="Project 1" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                            <img src={image2} alt="Project 2" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                            <img src={image3} alt="Project 3" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                            <img src={image4} alt="Project 4" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="w-full h-[38vh] py-2 sm:h-[45vh] md:h-[55vh] lg:h-[75vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900">
                            <img src={image5} alt="Project 5" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>
    )
}