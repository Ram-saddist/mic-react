import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate=useNavigate()
    const userId=localStorage.getItem("userId")
    const [products,setProducts]=useState("")
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetchProducts()
    },[])
    function fetchProducts(){
        axios.get(`https://mern-ecommerece.onrender.com/api/products`)
            .then((res)=>{
                console.log(res.data)
                setProducts(res.data)
                setLoading(false)
            })
    }
    function addCart(productId){
        console.log(productId,userId)
        axios.post(`https://mern-ecommerece.onrender.com/api/cart/add`,{productId,quantity:1},{
            params:{userId}
        })
            .then((res)=>{
                console.log(res)
                if(res.status===200){
                    alert("Product added successfully")
                    navigate("/cart")
                }
            })
    }
    return (
        <div>
            {
                loading?(<p>Loading...</p>):
                (
                    <div className='products'>
                        {
                            products.map((item)=>(
                                <div className='product' key={item._id}>
                                    <p>Name:{item.name}</p>
                                    <p>Stock:{item.stock}</p>
                                    <p>Price:{item.price}</p>
                                    <p>Description:{item.description}</p>
                                    <button onClick={()=>addCart(item._id)}>Add to Cart</button>
                                </div>
                            ))
                        }

                    </div>
                )
            }
        </div>
    )
}

