import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost, deleteSinglePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount() {
		this.props.fetchSinglePost(this.props.params.id);
	}

	onDeleteClick() {
		this.props.deleteSinglePost(this.props.params.id)
			.then(() => {
				console.log('deleted)');
				this.context.router.push('/');
			});
	}

	render() {
		const { post } = this.props;
		
		if(!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/">Back to Index</Link>
				<button 
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}>
					Delete Post
				</button>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchSinglePost, deleteSinglePost })(PostsShow);