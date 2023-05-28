import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductsList from './ProductsList';
import CreateProductForm from './CreateProductForm';
import EditProductForm from './EditProductForm';

ReactDOM.render(
  <React.StrictMode>
    
    <ProductsList />
    <CreateProductForm/>
    <EditProductForm/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
