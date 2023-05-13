import React from 'react'
import img1 from '../images/category/cat-1.png'
import img2 from '../images/category/cat-2.png'
import img3 from '../images/category/cat-1.png'
import img4 from '../images/category/cat-2.png'
import img5 from '../images/category/cat-1.png'
import img6 from '../images/category/cat-2.png'
const Catg = () => {
  const data = [
    {
      cateImg: img1,
      cateName: "Apple",
    },
    {
      cateImg: img2,
      cateName: "Samasung",
    },
    {
      cateImg: img3,
      cateName: "Oppo",
    },
    {
      cateImg: img4,
      cateName: "Vivo",
    },
    {
      cateImg: img5,
      cateName: "Redimi",
    },
    {
      cateImg: img6,
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands</h1>
          <h1>Shops</h1>
        </div>
        {
          data.map((value, index) => {
            return (
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
        <div className="box box2">
          <button>View all Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
