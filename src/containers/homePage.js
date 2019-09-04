import React, { Component } from 'react'
import { Box, Button, TextArea } from 'grommet';
import axios from "axios"
import Post from "../components/Post"
import Comment from "../components/comment"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: [],
            text: '',
            users: '',
            userId:'',
        };
    }
    componentWillMount() {
        this.getPosts();
        this.getUser()
         this.getComment()
    }

    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
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

    getUser(id) {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)

            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log('user:',users)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
   getComment() {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=1`)
            .then(res => {
                const comments = res.data;
                this.setState({ comments });
                console.log('comments:',comments)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
 
    render() {
        const { posts } = this.state
        const { text } = this.state;
        const { users } = this.state;
        const { comments } = this.state;
      console.log('testUsers:', users)
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
                            return (
                            <Post
                                key={index}
                                text={post.title}
                                body={post.body}
                                name={post.name}
                                username={users.username} />
                            )
                        }
                        )}
                    </ul> 
                     <ul>
                        {comments.map((comment, index) => {
                            return (<Comment
                                key={index}
                                username={comment.name}
                                body={comment.body} />
                            )
                        }
                        )}
                    </ul> 
                </Box>
            </Box>
        )
    }
}

