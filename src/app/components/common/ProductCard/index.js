import Link from 'next/link';
import React from 'react'
import './index.scss'

const saleLogic = (printed, saling) => {
  return Math.ceil(((printed - saling) / printed) * 100);
}

function ProductCard({ data }) {
  // console.log(data)
  return (
    <div className=''>
      <div className='homepage-card'>
        <div className='sale-banner'>
          {saleLogic(data.product_regular_price, data.product_sale_price)}%
          <br /> OFF
        </div>
        <Link href={process.env.NEXT_PUBLIC_URL + "/product/" + data.product_slug}>
          <img
            src={data.product_images[0].image_url}
            alt={data.product_name}
            className='w-25'
            style={{ width: "300px" }}
            loading='lazy'
          />
        </Link>
        <div className='content'>
          <h3>{data.product_main_category}</h3>

          <Link href={process.env.NEXT_PUBLIC_URL + "/product/" + data.product_slug}>
            <h4>{data.product_name}</h4>
          </Link>
          <div className='price'>
            <span>₹{Number.parseFloat(data.product_sale_price).toFixed(2)}</span>
            ₹{Number.parseFloat(data.product_regular_price).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard