import React from 'react';
import Carousal from '../common/carousal/Carousal';

class ProductImagesOverlay extends React.Component {

    closeOverlay = () => {
        this.props.closeOverlay();
    }

	render(){
		const {images} = this.props;
        console.log('images----', images);
		return (
    <div className="product-overlay">
       <div className="overlay-content">
       <div className="close-button" onClick={this.closeOverlay}>X</div>
        <h1>overlay </h1>
        <Carousal items={images} />
        </div>
    </div>
  );
	}
}

export default ProductImagesOverlay;
