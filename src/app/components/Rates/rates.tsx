export default function Rates () {
    return(
        <>
            <section className="container bg-white dark:bg-dark py-0 max-xxl:px-0">
                <div className="relative py-2" data-slider="rate">
                    <div className="swiper" data-slider-swiper="rate">
                        <div className="swiper-wrapper !ease-linear">

                            <div className="swiper-slide flex items-center border-r border-solid border-black/10 dark:border-white/10 w-auto pr-5 sm:pr-8">
                                <picture>
                                    <source src="/img/pictures/test.webp" type="image/webp" />
                                    <img className="icon text-2.5xl" src="/img/pictures/test.svg" alt="test"/>
                                </picture>
                                <div className="flex flex-col text-xs ml-3">
                                    <span className="uppercase opacity-80">0xbtc/USD</span>
                                    <div className="flex items-center gap-2 font-semibold">
                                        <span className="opacity-80">1.912</span>
                                        <span className="<%= i % 2 === 0 ? 'text-red' : 'text-green' %>" className={i % 2 === 0 ? 'text-red' : 'text-green'}>-0.07%</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div
                        className="hidden xxl:block absolute top-0 bottom-0 left-0 z-10 bg-gradient-to-r from-white dark:from-dark to-transparent w-20"></div>
                    <div
                        className="hidden xxl:block absolute top-0 bottom-0 right-0 z-10 bg-gradient-to-l from-white dark:from-dark to-transparent w-20"></div>
                </div>
            </section>
        </>
    );
}