import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'
import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './hoc/Layout'
import './index.css'

const App = () => {

    return <Router>
        <Layout>
            <Routes />
        </Layout>
    </Router>

}

ReactDOM.render(<App/>, document.getElementById('root'));