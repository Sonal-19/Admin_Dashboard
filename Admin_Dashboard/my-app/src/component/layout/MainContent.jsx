import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Forget from '../Pages/Auth/Forget';
import Login from '../Pages/Auth/Login';
import Signup from '../Pages/Auth/Signup';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Account from '../Pages/Admin/Account';
import AddProduct from '../Pages/product/AddProduct';
import ProductList from '../Pages/product/ProductList';
import EditProduct from '../Pages/product/EditProduct';
import UserList from '../Pages/User/UserList';
import EditUser from '../Pages/User/EditUser';
import AddUser from '../Pages/User/AddUser';
import AddAdmin from '../Pages/Admin/AddAdmin';
import AdminList from '../Pages/Admin/AdminList';
import EditAdmin from '../Pages/Admin/EditAdmin';
import WeatherCard from '../Weather/WeatherCard';
import TodoList from '../Pages/Admin/TodoList';
import PrivacyPolicy from '../Pages/CustomerPolicies/PrivacyPolicy';
import TermsConditions from '../Pages/CustomerPolicies/TermsConditions';
import TermsOfUse from '../Pages/CustomerPolicies/TermsOfUse';
import AddBlog from '../Pages/Blog/AddBlog';
import BlogList from '../Pages/Blog/BlogList';
import ViewBlog from '../Pages/Blog/ViewBlog';
import EditBlog from '../Pages/Blog/EditBlog';
import Chart from '../Pages/Dashboard/Chart';
import Progress from '../Pages/Dashboard/Progress';
import ContactList from '../Pages/User/ContactList';



const MainContent = () => {
  return (
    <>
      <div className='main-content col-10 mt-5 pt-4'>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/Admin_Dashboard' element={<Dashboard />} />
          <Route path='/account' element={<Account />} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/productlist' element={<ProductList/>} />
          <Route path='/editproduct/:productId' element={<EditProduct/>} />
          <Route path='/userlist' element={<UserList/>} />
          <Route path='/adduser' element={<AddUser/>} />
          <Route path='/edituser/:userId' element={<EditUser/>} />
          <Route path='/addadmin' element={<AddAdmin/>} />
          <Route path='/adminlist' element={<AdminList/>} />
          <Route path='/editadmin/:adminId' element={<EditAdmin/>} />
          <Route path='/weather' element={<WeatherCard/>} />
          <Route path='/todo' element={<TodoList/>} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
          <Route path='/termsconditions' element={<TermsConditions/>} />
          <Route path='/termsuse' element={<TermsOfUse/>} />
          <Route path='/addblog' element={<AddBlog/>} />
          <Route path='/bloglist' element={<BlogList/>} />
          <Route path='/viewblog/:blogId' element={<ViewBlog/>} />
          <Route path='/editblog/:blogId' element={<EditBlog/>} />
          <Route path='/chart' element={<Chart/>} />
          <Route path='/progress' element={<Progress/>} />
          <Route path='/contactlist' element={<ContactList/>} />
          
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
