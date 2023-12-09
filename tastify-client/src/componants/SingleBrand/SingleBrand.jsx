import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Noprod from "../../assets/image/no-product-found.png"

const SingleBrand = () => {
    const [products, setProducts] = useState([])
    const brand = useLoaderData()
    const brandName = useParams();

    const { ads1, ads2, ads3 } = brand;

    useEffect(() => {
        fetch(`https://tastify-server.vercel.app/products/${brandName.brand}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
   

    return (
        <div>
            <div className='py-5'>
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
                    <SwiperSlide><img className='h-[250px] md:h-[500px] w-full object-cover rounded-lg' src={ads1} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[250px] md:h-[500px] w-full object-cover rounded-lg' src={ads2} alt="" /></SwiperSlide>
                    <SwiperSlide><img className='h-[250px] md:h-[500px] w-full object-cover rounded-lg' src={ads3} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className='max-w-6xl mx-auto py-10'>
                <h1 className="font-car font-bold text-6xl text-center text-black dark:text-white">Products</h1>
                {
                    products.length ? <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 pb-20 mx-3'>
                        {
                            products.map(product => <ProductCard key={products._id} product={product}></ProductCard>)
                        }
                    </div> : <>
                        <div className='flex pt-10 justify-center'> <img className='w-1/2' src={Noprod} alt="" />   </div>
                        <p className='text-center'>(No product found)</p>
                    </>
                }
            </div>
        </div>
    );
};

export default SingleBrand;