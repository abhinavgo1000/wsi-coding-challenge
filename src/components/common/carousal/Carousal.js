import React from 'react';
const rightArrow = require('../../../assets/images/rightArrow.png');
const leftArrow = require('../../../assets/images/leftArrow.png');
class Carousal extends React.Component {

  state = {
    currentItemIndex: 0
  }


  leftArrowClick = () => {
 const {currentItemIndex} = this.state;
    if(currentItemIndex !== 0){
        const currentIndex = currentItemIndex - 1;
        this.setState({currentItemIndex: currentIndex})
    }
  }

  rightArrowClick = () => {
    const {currentItemIndex} = this.state;
    if(currentItemIndex !== this.props.items.length-1){
        const currentIndex = currentItemIndex + 1;
        this.setState({currentItemIndex: currentIndex})
    }
  }

	render(){
		const {items} = this.props;
    const { currentItemIndex } = this.state;

		return (
    <div className="carousal-container">
      <div className="arrow-icons-left">
        <img src={leftArrow} onClick={this.leftArrowClick} alt="left arrow icon"/>
      </div>
      <div className="item-container">
        <img src={items[currentItemIndex].href} alt="current product" />
      </div>
      <div className="arrow-icons-right">
        <img src={rightArrow} onClick={this.rightArrowClick} alt="right arrow icon" />
      </div>
    </div>
  );
	}
}

export default Carousal;
