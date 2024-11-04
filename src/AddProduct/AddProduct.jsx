import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddProduct() {
    const navigate=useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category,setCategory]=useState('')
    const [stock,setStock]=useState('')
    const [description,setDescription]=useState('')
    const userRole=localStorage.getItem('role')
    async function addProduct(){
        const newProduct={name,price,category,description,stock,role:userRole}
        console.log(newProduct)
        const response=await axios.post(`https://mern-ecommerece.onrender.com/api/products/add`,newProduct)
        if(response.status===201){
            navigate("/")
        }
        else{
            console.log("product not added")
        }
    }
    return (
        <div className='product-container'>
            <div className='form-group'>
                <label>Product name</label>
                <input 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input 
                    value={price} 
                    onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Stock</label>
                <input 
                    value={stock} 
                    onChange={(e)=>setStock(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input 
                    value={description} 
                    onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Category</label>
                <input 
                    value={category} 
                    onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <button onClick={addProduct}>Add Prodct</button>
        </div>
    )
}