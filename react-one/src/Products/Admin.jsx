import React, { useEffect, useState } from "react";
import Axios from 'axios'



const Admin = () => {
    let [products,setProducts] = useState([])
    useEffect(()=>{
        getProducts()
    },[])

    let getProducts = () => {
        Axios.get('http://127.0.0.1:5000/api/products')
        .then((resp)=>{
           setProducts(resp.data)
        })
        .catch()
    }


    return <>
    <pre>{JSON.stringify(products)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.length>0? <>
                            {
                                products.map((product)=>{
                                    return <tr>
                                         <td>{product.name}</td>
                                         <td>{product.price}</td>
                                         <td>{product.qty}</td>
                                         <td><img src={product.image} height={"20px"} alt="" /></td>
                                         <td>{product.info}</td>
                                    </tr>
                                })
                            }
                            </>: <h3>No Data</h3>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
}
export default Admin