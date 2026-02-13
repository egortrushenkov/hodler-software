import RateSliderClient from "@/app/(frontend)/components/Rates/rates.client"
import RateSlider from "@/app/(frontend)/components/Rates/rate";

export default function Header () {
    return (
        <>
            <RateSlider/>
            <header className="container flex items-center justify-between gap-6 sticky top-0 left-0 right-0 z-30 bg-grey dark:bg-black py-4" data-header>
                <button className="btn btn-gray dark:btn-smokie btn-fill dark:btn-light xl:hidden bg-transparent rounded text-black dark:text-white" data-sidebar-open="menu" data-waved="dark" data-waved-reverse>
                    Header
                </button>
            </header>
        </>
    );
}