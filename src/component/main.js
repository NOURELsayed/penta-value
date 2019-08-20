import React, { Component } from 'react'
import Posts from './posts'
import Comments from './comments'
export default class main extends Component {
    render() {
        return (
            <div style={{  margin: 'auto',
                width: '75%',
                border: '3px solid gray',
                padding: '10px'}}>
               <Posts/>
               <Comments/> 
            </div>
        )
    }
}
