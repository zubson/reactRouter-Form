import React, {Component} from 'react';
import {fetchPosts} from '../actions/index';
import {connect} from 'react-redux';

class PostIndex extends Component {

    POSTS = [];

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPostList(postData) {
        return (
            <a className="list-group-item" key={postData.id}>
                <h4 className="list-group-item-heading">{postData.title}</h4>
                <p>Categories: {postData.categories}</p>
            </a>
        );
    }

    render() {
        return (
            <div>
                <h2 className="header">List of blog posts</h2>
                <div className="list-group">
                    {/*{this.POSTS.map(this.renderPostList)}*/}
                </div>
            </div>
        );
    }
}

export default connect(null, {fetchPosts})(PostIndex);