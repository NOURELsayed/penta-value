import React, { Component } from 'react'
import { Box, Button, TextArea } from 'grommet';
import axios from "axios"
import Post from "../components/Post"
import Comment from "../components/comment"
import Navbar from "../components/navbar"



export default class MainPage extends Component {
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


    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
                console.log("posts", res.data);
                //   console.log(data.postId,data.email)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    getUser(id) {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
                console.log('user:', users)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    /*           .then(res => {
                  const  userId = res.data.userId;
                  this.setState({ userId });
                  console.log('user:', userId)
              })
              .catch(function (error) {
                  console.log(error);
              });
  
      } */
    getComment(id) {
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => {
                const comments = res.data;
                this.setState({ comments });
                console.log('comments:', comments)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    componentDidMount() {
        this.getPosts();
        this.getUser()
        this.getComment()
    }
    render() {
        const { posts,text,users,comments } = this.state
        return (
            <Box border fill>
                 <Navbar profilename={users.username}/>
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
                    {posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                text={post.title}
                                body={post.body}
                                name={post.name}
                                username={users.username} />
                        )
                    }
                    )}
                </ul>
                <ul>
                    {comments.map((comment) => {
                        return (<Comment
                            key={comment.id}
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

