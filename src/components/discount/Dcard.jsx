import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";
import '../newarrivals/style.css'

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next dcardAr'>
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev dcardAr'>
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  )
}
const Dcard = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <div className="container ">
        <Slider {...settings}>
          {Ddata.map((val, index) => {
            return (
              <div className="dcard" key={index}>
                <div className="box ">
                  <div className="img">
                    <img src={val.cover} alt="arrival" width='100%' />
                  </div>
                  <h4>{val.name}</h4>
                  <span>{val.price}</span>
                </div>
              </div>
            )
          })
          }
        </Slider>
      </div>
    </>
  )
}

export default Dcard