import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const ProductManagementPage = (props:any) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        setData(props.products)
    },[props])
    const removeProduct = (id:any) => {
        props.onRemove(id)
    }
const onHandleLogout = (e:any) =>{
    e.preventDefault();
    props.onLogout()
}

   
    return (
        <div>
            <button><Link to={'/admin/products/add'}>Add New Product</Link></button>
           
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((product,index)=>{
                        return(
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.categoryId}</td>
                                <td>
                                    <button onClick={()=>removeProduct(product._id)}>Remove</button>
                                    <button><Link to={`${product._id}`}>Update</Link></button>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            <form action="" onSubmit={onHandleLogout}>
                <button>Lượn</button>
            </form>
        </div>
    )
}

export default ProductManagementPage