// import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import React, { useEffect, useState } from 'react'
import ProductDetailPage from './pages/ProductDetail'
import { addProduct, deleteProduct, getAllProduct, updateProduct } from './api/product'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProduct from './pages/admin/UpdateProduct'
import Singup from './pages/admin/Singup'
import { getAllUsers, singin, singup } from './api/user'
import Singin from './pages/admin/Singin'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import AdminLayout from './pages/layout/AdminLayout'
import { addCategory, deleteCategory, getAllCategory, updateCategory } from './api/category'
import Category from './pages/admin/Category'
import AddCategory from './pages/admin/AddCategory'
import UpdateCategory from './pages/admin/UpdateCategory'

function App() {
  const [products, setProduct] = useState([])
  const [users, setUser] = useState([])
  const [categories,setCategory] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id:any) => {
    const newData = products.filter(product=> product._id !== id)
    if(confirm('Bạn có muốn xóa'))
    deleteProduct(id).then(() => setProduct([...newData]))
  } 
  const onHandleAdd = (product:any) => {
    addProduct(product).then(()=> setProduct([...products,product]))
  }
  
  const onHandleUpdate = (product:any,id:any) => {
    const newData = products.filter(item=> item._id != id)
    updateProduct(product).then(() => setProduct([...newData,product]))
   }


   useEffect(() => {
    getAllCategory().then(({ data }) => setCategory(data))
  }, [])
  const onHandleRemoveCate = (id:any) => {
    const newDataCte = categories.filter(category=> category._id !== id)
    if(confirm('Bạn có muốn xóa'))
    deleteCategory(id).then(() => setCategory([...newDataCte]))
  } 
  const onHandleAddCate = (category:any) => {
    addCategory(category).then(()=> setCategory([...categories,category]))
  }
  
  const onHandleUpdateCate = (category:any,id:any) => {
    const newDataCate = categories.filter(item=> item._id != id)
    updateCategory(category).then(() => setCategory([...newDataCate,category]))
   }  


   
useEffect(() => {
    getAllUsers().then(({ data }) => setUser(data))
    
  }, [])
  const onHandleAddUser = (user:any) => {
    singup(user).then(()=> {
      setUser([...users])  
      if( user){
        navigate('/singin')
        alert("Ngon luôn")
      }
    }).catch(error=>{
      alert(error.response.data.message)
    })
  }
  const onHandleSingin = (user:any) => {
    singin(user).then(({data}) => {localStorage.setItem("accessToken", data.accessToken) 
    console.log(data.accessToken)
    console.log( data);
    if(data.user.role == 'admin'){
      navigate('/admin')
    }else{
      navigate('/')
    }
    
  } 
  ).catch(error=>{
    alert(error.response.data.message)
  })
    
  }

  const onHandleLogout = () =>{
    localStorage.removeItem("accessToken")
    navigate('/singin')
    location.reload()
  }
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products}  />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/singup' element={<Singup onAddUser={onHandleAddUser}  /> } />
          <Route path='/singin' element={<Singin  onSignin={onHandleSingin}  /> } />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products' >
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} onLogout={onHandleLogout} />} />
                <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
                <Route path=':id' element={<UpdateProduct products={products} onUpdate={onHandleUpdate}  />} />
                
          </Route>
          <Route path='categories'>
            <Route index element={<Category />} />
            <Route path='addcate' element={<AddCategory onAddCate={onHandleAddCate} />} />
            <Route path=':id' element={<UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate} />} />
          </Route>
        </Route>

         {/* <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProduct products={products} onUpdate={onHandleUpdate}  />} />
        <Route path='/singup' element={<Singup onAddUser={onHandleAddUser}  /> } />
        <Route path='/singin' element={<Singin  onSignin={onHandleSingin}  /> } />
        <Route path='/:id' element={<UpdateCategory categories={categories} onUpdateCate={onHandleUpdateCate} />} /> */}
        
      </Routes>
    </div >
  )
}

export default App
