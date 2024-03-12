import React, {Fragment} from 'react'
class Product extends React.Component{
    state = {
        product:{
        product_Name:"Apple iPhone 14",
        price:56999,
        image:'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70&crop=false',
        qty:1
    }

}
    incrHandler = () => {
        this.setState({product:{...this.state.product, qty:this.state.product.qty +1}})
    }
    decrHandler = () => {
        this.setState({
            qty:this.state.qty -1
        })
    }

    render(){

        return  <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-10">
                        <table className='table'>
                            <thead>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product.product_Name}</td>
                                    <td><img src={this.state.product.image} height={"100px"} alt=""/></td>
                                    <td>{this.state.product.price}</td>
                                    <td><i className = 'fa fa-minus-circle' onClick={this.decrHandler}></i> {this.state.product.qty} <i className = 'fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                    <td>{this.state.product.price * this.state.product.qty}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Product