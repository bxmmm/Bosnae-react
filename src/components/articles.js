import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getArticles } from '../actions/index';

class Articles extends Component {
	constructor(props) {
		super(props);

		this.state={
			title: '',
			_id: '',
			body: '',
			image: '',
			created: ''
		};

		this.listArticles = this.listArticles.bind(this);
		this.showArticle = this.showArticle.bind(this);
		// dispatch request to get data from api
		this.props.getArticles();
	}
	showArticle(e) {
		this.setState({
			title: e.title
		});
	}
	listArticles(article) {

		return (
			<li onClick={e => this.setState({
					title: article.title,
					body: article.body,
					_id: article._id,
					created: article.created,
					image: article.image
				})} key={article._id}>{article.title}
			</li>
		);
	}
	render() {
		var title = this.state.title;
		var image = this.state.image;
		var body = this.state.body;


		if(!this.props.data) {
			return <h1>Loading</h1>;
		}


		return (
			<div className='row'>
				<div className='col-md-2'>
					<ul>
						{this.props.data.articles.map(this.listArticles)}
					</ul>
				</div>
				<div className='col-md-10'>
					<div className='show-article'>
						<h2>{title}</h2>
						<img src={image}/>
						<p>{body}</p>
					</div>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({getArticles}, dispatch);
}
function mapStateToProps(state){
	console.log('mapstate',state.articles);
	return {data: state.articles};
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);