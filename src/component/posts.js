import React, { Component } from 'react'
import { Box,Grommet } from 'grommet';
import axios from "axios"
import Post from "./Post"
import { FormGroup,Button,Input } from 'reactstrap';
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
                console.log("posts", res.data);
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
                        <FormGroup>
                            <Input type="textarea" name="text" id="exampleText" style={{
                                margin: '10% 30% 10% 60%',
                                width: '900px'
                            }} />
                              <Button outline color="secondary" style={{marginLeft: '600px'}}>Post</Button>
                        </FormGroup>
                        <ul>
                            {this.state.posts.map(function (post, index) {
                                return (<Post
                                    key={index}
                                    text={post.title}
                                    body={post.body} />
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

