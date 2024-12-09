import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

  const [allproducts, setAllProducts] =useState([]);

  const fetchInfo = async () =>{
    await fetch('http://localhost:3050/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllProducts(data)})
  }

  useEffect(()=>{
    fetchInfo()
  },[])

  const remove_product = async (id) =>{
    await fetch('http://localhost:3050/removeproduct',{
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product,index)=>{
          return <><div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={()=>{remove_product(product.id)}} src={cross_icon} className='listproduct-remove-icon' alt="" />
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct