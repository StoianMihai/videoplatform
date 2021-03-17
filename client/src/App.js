import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
    return (
        <Router>
            <Route path='/search/:keyword' component={HomePage} />
            <Route path='/' component={HomePage} exact />
        </Router>
    )
}

export default App;