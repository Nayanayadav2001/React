import React, {useState} from "react";

let Counter = () => {
    let [product,setProduct] = useState({
        p_Name:"Apple iPhone 15",
        img:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false',
        price: 72999,
        qty:1
    })

    let incrHandler = () => {
        setProduct({...product,qty:product.qty +1})
    }
    let decrHandler = () => {
        setProduct({...product,qty:product.qty -1})
    }

    return <div className="container">
        <div className="row">
            <div className="col-md-6">
                <table className="table table-hover">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.p_Name}</td>
                            <td> <img src={product.img} height='50px'/></td>
                            <td>{product.price}</td>
                            <td> <i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty} <i className="fa fa-plus-circle" onClick={incrHandler}></i></td>
                            <td>{product.qty * product.price}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default Counter