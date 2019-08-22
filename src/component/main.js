import React, { Component } from 'react'
import Posts from './posts'
import Comments from './comments'
import Navber from './navbar'
export default class main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
    }
    render() {
        return (
            <div style={{
                margin: 'auto',
                width: '75%',
                border: '3px solid gray',
                padding: '10px'
            }}>
                <Navber />
                <Posts />
                <Comments />
                    <div>
                   { this.state.posts.forEach(post => {
                        post.comments.forEach(c => {
                            //your logic
                        })
                    })
                }
                    </div>
            </div>
        )
    }
}
