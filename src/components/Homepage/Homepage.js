import React from 'react'
import './Homepage.css'
import flipcart from '../../assets/flipcart.png'
import amazon from '../../assets/amazon.png'
import nike from '../../assets/nike_red.png'
// eslint-disable-next-line
const Homepage = () => {
    return (
        <section className='homepage'>
            <div className="section1">
                <h1 >YOUR FEET<br />
                    DESERVE<br />
                    THE BEST</h1>
                <h4>YOUR FEET DESERVE THE AND WE'RE HERE TO
                    HELP YOU WITH OUR SHOES.YOUR FEET DESERVE
                    THE BEST AND WERE HERE TO HELP YOU WITH OUR
                    SHOES.</h4>
                <div className="btns">
                    <button className='btn1'>Shop Now</button>
                    <button className='btn2'>Category</button>
                </div>
                <h5>
                    <span>Also Available On</span>
                    <img src={flipcart} alt="" />
                    <img src={amazon} alt="" />
                </h5>
            </div>
            <div className="section2">
                <img src={nike} alt="" />
            </div>
        </section>
    )
}

export default Homepage