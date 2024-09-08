// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import Home from './components/homePage';
import HomePage from './components/homePage';
import Harvest from './components/HarvestJara';
import NotFound from './components/notFound';
import Marry from './components/premiummarry'
import Premium from './components/premiumjara';
import Yarri from './components/premiumyarry';
import Header from './components/header'; 
import Story from './components/ourstory';
import Form from  './components/form';
import Honey from './components/marrihoney';
import Footer from './components/Footer';
import Productmarry from './components/productmarry'
import Productjarrah from './components/Productjarrah'
import Productyarri from './components/Productyarri';
import Productharvest from './components/productharvest';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import './index.css';

function App() {
  return (
    <>
      

      <Router>
        <div>
          <Header/>
          {/*  Create Slugs using Routes */}
          <Routes>
            {/* <Route exact path='./homePage' element={<Home/>}/> */}
            <Route exact path="/" element={<HomePage />} />
            <Route path="/HarvestJara" element={<Harvest />} />
          
            <Route path="*" element={<NotFound />} />
            <Route path="/premiumjara" element={<Premium/>}/>
            <Route path="/premiummarry" element={<Marry/>}/>
            <Route path="/ourstory" element={<Story/>}/>
            <Route path="/premiumyarry" element={<Yarri/>}/>
            <Route path="/form" element={<Form/>}/>
            <Route path="/marrihoney" element={<Honey/>}/>
            <Route path="/productmarry" element={<Productmarry/>}/>
            <Route path="/productjarrah" element={<Productjarrah/>}/>
            <Route path="/productyarri" element={<Productyarri/>}/>
            <Route path="/productharvest" element={<Productharvest/>}/>
          
          </Routes>
          <Footer/>
        </div>
      </Router>


      
    </>
  );
}

export default App;
