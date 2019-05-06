import React from 'react';
import ProductDetailsOverlay from '../product-images-overlay/ProductImagesOverlay';
class ProductDetails extends React.Component {

		state = {
			showOverlay: false
		}

		onImageClick = () => {
			this.setState({showOverlay: true})
		}

		closeOverlay = () => {
this.setState({showOverlay: false})
		}

	render(){
		console.log('props---', this.props);
		const {name, hero, priceRange, images} = this.props.product;
		const { showOverlay } = this.state;
		console.log('name===', name);
		return (
    <div className="product-details">
        <p className= "product-item"><span>Name :: </span> <span>{name} </span></p>
        <p><span>price range :: </span> <span>{priceRange.selling.low} - {priceRange.selling.high} </span></p>
        <img onClick={this.onImageClick} src={hero.href} width={hero.width}
         	alt="product icon" height={hero.weight}/>
         {showOverlay && <ProductDetailsOverlay images={images} closeOverlay={this.closeOverlay} />}
    </div>
  );
	}
}

export default ProductDetails;
