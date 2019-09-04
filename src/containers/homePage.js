import React, { Component } from 'react'
import { Box, Button, TextArea } from 'grommet';
import axios from "axios"
import Post from "../components/Post"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            text: '',
            users: []
        };
    }
    componentWillMount() {
        this.getPosts();
        this.getUser()
    }

    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data.map(data => ({ title: data.title, body: data.body, name: data.name }));
                this.setState({ posts });
                console.log("posts", res.data);
                //   console.log(data.postId,data.email)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    getUser() {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log(users)
                // console.log(res.data.username)
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        const { posts } = this.state
        const { text } = this.state;
        const { users } = this.state;
        return (
            <Box border fill>
                <Box>
                    <Box width='800px' margin='auto'>
                        <TextArea
                            value={text}
                            onChange={event => this.setState({ text: event.target.value })}
                            resize="horizontal"
                        />
                        <Button
                            alignSelf="center"
                            label="Post"
                            onClick={() => { }}
                        />
                    </Box>

                    <ul>
                        {posts.map((post, index) => {
                            return (<Post
                                key={index}
                                text={post.title}
                                body={post.body}
                                name={post.name} />
                            )
                        }
                        )}
                    </ul>
                    <li>
                        <Post username={users.username} />
                    </li>
                </Box>
            </Box>
        )
    }
}

