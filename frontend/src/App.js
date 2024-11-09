import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Profile, History,EditProfile, AddProduct, EditProduct, ProductDetail, Homepage, Login, Regis, SellerProfile } from './Component/index.js'
import { UserProvider } from './UserContext.js';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/regis' element={<Regis/>}/>
          <Route path='/home' element={<Homepage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/edit-profile' element={<EditProfile/>}/>
          <Route path='/add-product' element={<AddProduct/>}/>
          <Route path='/edit-product' element={<EditProduct/>}/>
          <Route path='/product-detail' element={<ProductDetail/>}/>
          <Route path='/history' element={<History/>}/>
          <Route path='/seller-profile' element={<SellerProfile/>}/>
        </Routes>
      </Router>
    </UserProvider>
    
  );
}

export default App;
