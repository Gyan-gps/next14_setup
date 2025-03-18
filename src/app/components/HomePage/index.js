import React from 'react'
import MenuFive from '../common/CategoryHeader/MenuFive'
import dynamic from 'next/dynamic';
import BrandsTwo from './Brands/BrandsTwo';
import ShopProducts from './ShopProducts';
const Carousel = dynamic(() => import("../common/Carousel"), {
  ssr: false,
});
// import Carousel from '../common/Carousel'

function HomePage({ data }) {
  // console.log(data)
  return (
    <div>
      <MenuFive categories={data.categories} />
      <Carousel />
      <div className='container'>
        <BrandsTwo
          mainHeading={"Categories"}
          description={
            "Explore wide range of products from various categories."
          }
          data={data.cat}
        />
        <ShopProducts
          brandsData={data.categories.slice(0, 4)}
          data={data.product}
        />
      </div>
    </div>
  )
}

export default HomePage