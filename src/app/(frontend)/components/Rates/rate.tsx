import { fetchApiRate } from "@/services/rate"
import RateSliderClient from "@/app/(frontend)/components/Rates/rates.client";
export default async function RateSlider() {
    const rates = await fetchApiRate()
    return (
        <>
            <section className="container bg-white dark:bg-dark py-0 max-xxl:px-0">
                <RateSliderClient rates={rates}/>
            </section>
        </>
    )
}