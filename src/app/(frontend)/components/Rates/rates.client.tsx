// components/RateSlider/RateSlider.tsx
'use client'

import type { Rate } from '@/types/Rate'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { media } from '@/app/(frontend)/utils/media'
import Picture from '@/app/(frontend)/components/Picture/picture'
import 'swiper/css'


export default function RateSliderClient({ rates }: { rates: Rate[] }) {
    return (
        <div className="relative py-2" data-slider="rate">
            <Swiper
                modules={[Autoplay]}
                slidesPerView="auto"
                slidesPerGroup={1}
                spaceBetween={20}
                speed={8000}
                loop={true}
                allowTouchMove={false}
                watchSlidesProgress={true}
                breakpoints={{
                    [media.sm]: { spaceBetween: 32 },
                }}
                autoplay={{
                    delay: 0,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                }}
                className="!ease-linear [&_.swiper-wrapper]:!transition-timing-[linear]"
            >
                {rates.map((rate) => (
                    <SwiperSlide
                        key={rate.id}
                        className="flex items-center border-r border-solid border-black/10 dark:border-white/10 !w-auto pr-5 sm:pr-8"
                    >
                        <Picture
                            src={rate.image}
                            format="svg"
                            className="icon text-2.5xl"
                        />
                        <div className="flex flex-col text-xs ml-3">
                            <span className="uppercase opacity-80">{rate.symbol}/USD</span>
                            <div className="flex items-center gap-2 font-semibold">
                                <span className="opacity-80">{rate.current_price}</span>
                                <span className={rate.price_change_percentage_24h < 0 ? 'text-red' : 'text-green'}>
                {rate.price_change_percentage_24h}%
              </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="hidden xxl:block absolute top-0 bottom-0 left-0 z-10 bg-gradient-to-r from-white dark:from-dark to-transparent w-20" />
            <div className="hidden xxl:block absolute top-0 bottom-0 right-0 z-10 bg-gradient-to-l from-white dark:from-dark to-transparent w-20" />
        </div>
    )
}
