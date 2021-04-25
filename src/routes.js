import React from 'react'
import {Route, Link} from 'react-router-dom'
import Home from './pages/Home/Index'
import Layout from './hoc/Layout'

const Routes = () => {

    return (
        
        <Route path="/" component={Home} />
    )
}

export default Routes;