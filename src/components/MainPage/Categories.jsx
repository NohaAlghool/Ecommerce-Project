import React from 'react'
import Img1 from '../images/category/cat1.png'
import Img2 from '../images/category/cat2.png'
import Img3 from '../images/category/cat3.png'
import Img4 from '../images/category/cat4.png'
import Img5 from '../images/category/cat5.png'
import Img6 from '../images/category/cat6.png'
import Img7 from '../images/category/cat7.png'
import Img8 from '../images/category/cat8.png'
import Img9 from '../images/category/cat9.png'
import Img10 from '../images/category/cat10.png'
import Img11 from '../images/category/cat11.png'
const Categories = () => {
  const data =[
    {
      cateImg: Img1,
      cateName: "Fashion",
    },
    {
      cateImg: Img2,
      cateName: "Electronic",
    },
    {
      cateImg:Img3,
      cateName: "Cars",
    },
    {
      cateImg: Img4,
      cateName: "Home & Garden",
    },
    {
      cateImg: Img5,
      cateName: "Gifts",
    },
    {
      cateImg:Img6,
      cateName: "Music",
    },
    {
      cateImg:Img7,
      cateName: "Health & Beauty",
    },
    {
      cateImg:Img8,
      cateName: "Pets",
    },
    {
      cateImg:Img9,
      cateName: "Baby Toys",
    },
    {
      cateImg: Img10,
      cateName: "Groceries",
    },
    {
      cateImg:Img11,
      cateName: "Books",
    },
  ]
  return (
    <>
    <div className="category">
      {
        data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          )
        })}
    </div>
    </>
  )
}

export default Categories