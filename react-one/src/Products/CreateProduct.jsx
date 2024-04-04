import React, { useState } from "react";

const CreateProduct = () => {
    let [product,setProduct] = useState({"name":"", "img":"", "price":0, "qty":0, "info":"" })

    return <>
    <div className="container">
        <div className="row">
            <div className="col">
                <form>
                  
                </form>
            </div>
        </div>
    </div>
    </>
}
export default CreateProduct