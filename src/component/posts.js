import React, { Component } from 'react'
import { Box, Button, Grommet, TextArea } from 'grommet';
import axios from "axios"
import Post from "./Post"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
    componentWillMount() {
        this.getPosts();
    }

    getPosts() {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                const posts = res.data.map(data => ({ title: data.title, body: data.body }));
                this.setState({ posts });
                console.log("posts",res.data);
            })

        // .then((res) =>{
        //     // this.setState({ data:res})
        //     console.log(res.data);
        //     console.log("here",this.state.data)
        // })
        // .then(data => {
        //     this.setState({ data})
        //     console.log("here",data)
        // })

        .catch(function (error) {
            console.log(error);
        });

    }



    render() {
        return (
            <div>
                <Grommet theme full>
                    <Box
                        margin="right"
                        background="neutral"
                        width="20%"
                        alignSelf='center'
                    >
                        <TextArea
                            placeholder="type here"
                            value={this.text}
                            onChange={event => this.setState({ text: event.target.value })}
                        />
                        <Button
                            label="hello world"
                            onClick={() => alert('hello, world')}
                        />
                        <ul>
                            {this.state.posts.map(function (post, index) {
                                return ( <Post
                                    key={index}
                                    text={post.title}
                                    body={post.body}/>
                                )
                            }
                            )}
                        </ul>
              
                    </Box>
                </Grommet>
            </div>
        )
    }
}

