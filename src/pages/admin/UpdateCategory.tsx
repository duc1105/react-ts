import React,{useEffect,useState} from 'react'
import { useParams , useNavigate } from 'react-router-dom'
const UpdateCategory = (props) => {
    const {id} = useParams();
    const [category,setCategory] = useState({})
    const [inputValue,setInputValue] = useState({})
    useEffect(()=>{
        const currentCate = props.categories.find(category=>category._id == id)
        setCategory(currentCate)
    },[props])
    const onHandleChange = (e)=>{
        const  name = e.target.name
         const  value = e.target.value
        setInputValue({...inputValue,[name]: value})
    }
    const onHandleSubmit = (e) =>{
        e.preventDefault()
        const updateCate = {...category,...inputValue}
        props.onUpdateCate(updateCate,id)
    }
  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
            <input type="text" defaultValue={category?.name} onChange={onHandleChange} name='name' />
            <button type="submit">Update Product</button>
        </form>
    </div>
  )
}

export default UpdateCategory
