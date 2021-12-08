import React from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Review.css'
import img1 from './../../images/abc.png'
import img2 from '../../images/foto-sushi-6anudmpILw4-unsplash-removebg-preview.png'
import img3 from '../../images/optical-doctor-store-removebg-preview.png'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from 'react-rating';
const Review = () => {

    SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);
    // if you want to use array
    const slide = [
        { name: 'Sanjid Mahi', rating: 4, img: img1, saying: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eligendi libero architecto. Incidunt quaerat voluptatibus fugit mollitia, esse voluptatem quam beatae eos vitae. Ipsam animi tenetur officia quasi' },
        { name: 'Ifzal Hussain', rating: 5, img: img2, saying: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eligendi libero architecto. Incidunt quaerat voluptatibus fugit mollitia, esse voluptatem quam beatae eos vitae. Ipsam animi tenetur officia quasi' },
        { name: 'Rayhanul Haque', rating: 4, img: img3, saying: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eligendi libero architecto. Incidunt quaerat voluptatibus fugit mollitia, esse voluptatem quam beatae eos vitae. Ipsam animi tenetur officia quasi' }
    ];

    return (
        <div id="review" className="pt-3">
            <h1 style={{ color: 'rgb(249, 0, 77)', textTransform: 'uppercase' }} className='text-center my-3 '>Happy_Clients_</h1>
            <div className='mx-auto text-center p-5 my-5 Swiper'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    className="mySwiper"
                >

                    {slide.map((singleSlide, i) => {
                        console.log(singleSlide)
                        return (
                            <SwiperSlide key={i}>

                                <div className='text-center p-3'>
                                    <img src={singleSlide.img} className="img-fluid mx-auto" alt="" />
                                    <h5>{singleSlide.name}</h5>
                                    <Rating
                                        readonly
                                        initialRating={singleSlide.rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star"
                                    />

                                    <p class="text-start">{singleSlide.saying}</p>

                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
};

export default Review;