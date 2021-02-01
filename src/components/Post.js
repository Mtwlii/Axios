import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount() {
        console.log(this.props)
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts' + id)
            .then((res) => {
                this.setState({
                    post: res.data
                })
            });
    }
    render() {

        const post = this.state.post ? (

            <div className="post">
                <h3 className="text center">
                    {this.state.post.title}
                </h3>
                <p>{this.state.post.body}</p>
            </div>
        ) : (
                <div className="text-center">
                    <h4>Loading Post...</h4>
                </div>
            )
        return (
            <div className="container">
                { post}
            </div>
        )
    }
}
export default Post