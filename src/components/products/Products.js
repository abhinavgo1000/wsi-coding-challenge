import React from 'react';
import ProductDetails from '../product-details/ProductDetails';
import './Products.css'
	const data = require('../../data/data.json');
class Products extends React.Component {
	
	state = {
		productData: data.groups
	}


	
	render(){
		const { productData } = this.state;
		console.log('productData---', productData);
		return (
    <div className="products-container">
        <h1>Product Details</h1>
        {
        	productData.map((product, key) => (<ProductDetails key={key} product={product} />))
        }        
    </div>
  );
	}
}

export default Products;
