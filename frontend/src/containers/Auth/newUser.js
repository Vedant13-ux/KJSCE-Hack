import React, { Component } from 'react'
import { apiCall } from '../../services/api'

class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "one"
        }
    }
}

export default Questions