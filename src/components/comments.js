import React, { Component } from 'react'
import { Box, Grommet} from 'grommet';
import axios from "axios"
import Comment from "./comment"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }
    componentWillMount() {
        this.getComments();
    }
    getComments() {
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                const comments = res.data.map(data => ({ name: data.name, body: data.body, email: data.email }));
                this.setState({ comments});
                console.log("comments",res.data);
                console.log("comments wa7ed",res.data[10]);
            })

        .catch(function (error) {
            console.log(error);
        });

    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <Grommet theme full>
                    <Box
                        margin="right"
                        background="neutral"
                        width="20%"
                        alignSelf='center'
                    >
                          <ul>
                            {comments.map((comment, index)=> {
                                return ( <Comment
                                    key={index}
                                    name={comment.name}
                                    email={comment.email}
                                    comment={comment.body}/>
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

