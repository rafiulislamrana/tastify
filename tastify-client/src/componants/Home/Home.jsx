import Banner from "../Banner/Banner";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import BrandCard from "../BrandCard/BrandCard";

const Home = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('https://tastify-server.vercel.app/brands')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    

    return (
        <div>
            <Banner></Banner>

            <div className="grid grid-cols-1 md:grid-cols-3 mx-3 gap-5 max-w-6xl lg:mx-auto pb-10">
                {
                    brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                }
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img className='h-[500px] w-full object-cover rounded-lg' src="https://i.ibb.co/h1fLLMh/baked-quails-pan-dark-surface.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full object-cover rounded-lg' src="https://i.ibb.co/4KY7GCf/bruschetta-with-meat-tomato-arugula-cream-cheese-sauce-side-view.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='h-[500px] w-full object-cover rounded-lg' src="https://i.ibb.co/48fdLmq/mixed-meat-pizza-with-pepperoni-chicken-beef.jpg" alt="" /></SwiperSlide>
            </Swiper>


            <div className="max-w-6xl mx-auto mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 pb-20">
                    <div className="flex flex-col justify-between pt-36 ">
                        <h2 className=" text-4xl lg:text-6xl font-bungee rotate-90 text-black dark:text-white">Savor</h2>
                        <img src="https://i.ibb.co/hcBh64R/pngwing-com-4.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between  pt-36 bg-secondary">
                        <h2 className="text-4xl lg:text-6xl font-bungee rotate-90 text-black dark:text-white">Enjoy</h2>
                        <img className="" src="https://i.ibb.co/qJ0RWFz/pngwing-com-2.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between pt-36 ">
                        <h2 className="text-4xl lg:text-6xl font-bungee rotate-90 text-black dark:text-white">Share</h2>
                        <img src="https://i.ibb.co/zNGcRKD/pngwing-com-1.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-between pt-36  bg-button">
                        <h2 className="text-4xl lg:text-6xl font-bungee rotate-90 text-black dark:text-white">Explore</h2>
                        <img src="https://i.ibb.co/xhCfn28/pngwing-com-3.png" alt="" />
                    </div>
                </div>
            </div>





        </div >
    );

};



export default Home;