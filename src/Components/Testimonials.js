import React from 'react';
import './myStyle.css';
import reviews from '../data';
import { useState } from 'react';

const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const{name,img,txt,designation} = reviews[index]

    // Next Button Function
    console.log(reviews[index])
    const nextButton = ()=>{
        setIndex( (index)=>{
            let newIndex = index + 1;
            if (newIndex > reviews.length-1) {
                return 0;
            }
            else{
                return newIndex;
            }
        } )
    }
    // Prev Button Function
    console.log(reviews[index])
    const prevButton = ()=>{
        setIndex( (index)=>{
            let newIndex = index - 1;
            if (newIndex < 0) {
                return 0;
            }
            else{
                return newIndex;
            }
        } )
    }
    return (
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
                <div className="col-8 testimonial_area">
                    <h1 className=" main_heading">Our Testimonials</h1>
                    <div className="navigation d-flex justify-content-end">
                        <i onClick={prevButton} className="bi bi-arrow-left-circle-fill"></i>
                        <i onClick={nextButton} className="bi bi-arrow-right-circle-fill"></i>
                    </div>
                    <img className="profile_img img-fluid" src={img} alt="" />
                    <p className="quote_txt">
                        {txt}
                    </p>
                    <p className="user_name">
                        {name}
                    </p>
                    <p className="designation">
                        {designation}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Testimonials