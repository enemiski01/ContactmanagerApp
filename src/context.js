import React, {Component} from 'react'

import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT':
        return {
            ...state,
            ContactInfo: state.ContactInfo.filter(contact => 
                contact.id !== action.payload )
        }

        case 'ADD_CONTACT':
        return {
            ...state,
            ContactInfo: [action.payload, ...state.ContactInfo]
        }

        case 'UPDATE_CONTACT':
        return {
            ...state,
            ContactInfo: state.ContactInfo.map(contact => contact.id === action.payload.id ? 
                (contact = action.payload) : contact)
        }

        default: 
        return state; 
    }
}

export class Provider extends Component {
    state = {
        ContactInfo: [],

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
}

    async componentDidMount() {
        const res = await axios.get('http://jsonplaceholder.typicode.com/users')
        
        this.setState({
            ContactInfo: res.data
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                    {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;