import React, { Component } from 'react'
import MainPage from '../containers/homePage'
import Comments from './comments'
import Navber from './navbar'
import { Box } from 'grommet';
export default class main extends Component {

    render() {
        return (
            <Box>
                <Navber />
                <MainPage />
                {/* <Comments /> */}
            </Box>
        )
    }
}
