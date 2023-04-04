import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
const ProductPage = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div>
            <h1>Product Page</h1>
            {
                data.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <Link to={`/products/${product._id}`}>ad</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductPage