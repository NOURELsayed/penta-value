import React, { Component } from 'react'
import { Box } from 'grommet';
import axios from "axios"
import Post from '../components/Post'
export default class profilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            text: '',
            users: '',
            userId: '',
        };
    }
    componentWillMount() {
        this.getProfilePosts();
    }

    getProfilePosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
            .then(res => {
                const posts = res.data.map(data => ({ title: data.title, body: data.body, name: data.name, userId: data.userId }));
                this.setState({ posts });
                console.log("posts", res.data);
                //   console.log(data.postId,data.email)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        return (
            <Box>
                  <ul>
                    {this.state.comments.map((comment, index) => {
                        return (<Post
                            key={index}
                            username={comment.name}
                            body={comment.body} />
                        )
                    }
                    )}
                </ul>
            </Box>
        )
    }
}
