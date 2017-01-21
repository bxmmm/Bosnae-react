import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImages, resetImages } from '../actions/index';

// const IMAGES =
// [{
//   src: "https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/15241749_10205463103776375_7641853656527436579_n.jpg?oh=0d90db978c9ebc20ba5a628cc4ea070b&oe=58BCB646",
//   thumbnail: "https://scontent.fbeg1-1.fna.fbcdn.net/v/t1.0-9/15241749_10205463103776375_7641853656527436579_n.jpg?oh=0d90db978c9ebc20ba5a628cc4ea070b&oe=58BCB646",
// }]

var IMAGES = []

class Galerija extends Component {
	constructor(props) {
		super(props);
		
		// dispatch to fetch images
		this.props.getImages();
		
		this.makeList = this.makeList.bind(this);

		
	}
	makeList (link) {
		var oneImage = {src: link.url, thumbnail: link.url}
		IMAGES.push(oneImage)
		console.log('davdim', IMAGES)
	}
	componentWillUnmount(){
		// dispatch action to reset state of images to []
		this.props.resetImages();
		IMAGES = [];
	}
	render() {
		if ( ! this.props.images) {
			return (
				<div></div>
			)
		} 
		return (
			<div>
				{this.props.images.images.map(this.makeList)}
				<Gallery images={IMAGES} rowHeight={100} margin={5} enableImageSelection={false} />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getImages, resetImages}, dispatch);
}
function mapStateToProps(state) {
	console.log('mapstat', state)
	return {images : state.images}
}

export default connect(mapStateToProps, mapDispatchToProps)(Galerija);