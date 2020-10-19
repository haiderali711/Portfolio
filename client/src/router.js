import React from 'react'
import Home from './Views/Home'
import {BrowserRouter, Route} from 'react-router-dom'
import LoginItem from './Components/LoginItem'
import RegisterItem from './Components/RegisterItem'

export default function router() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginItem} />
            <Route path="/register" exact component={RegisterItem} />
        </BrowserRouter>
    )
}
