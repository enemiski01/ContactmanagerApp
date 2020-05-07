import React, { Component } from 'react';
import { Consumer } from '../../context';

import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';


class EditContact extends Component {
        
    state= {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params

        const res = await axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)

        const contact = res.data
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })
    }


    handleChange = (event) => {

        const { name, value } = event.target

        this.setState({
            [name] : value
        })
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        
        const { name, email, phone } = this.state;

        //check for error

        if (name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if (email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }


        const updatedContact= {
            name,
            email,
            phone
        }

        const { id } = this.props.match.params

        const res = await axios.put
        (`http://jsonplaceholder.typicode.com/users${id}`, 
        updatedContact);

        dispatch({type:'UPDATE_CONTACT', payload: res.data})

        //clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            error: {}
        });

        this.props.history.push('/');
    }
  

    render() {
        
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                        <TextInputGroup
                         label="Name"
                         name="name"
                         placeholder="Enter Name..."
                         value={name}
                         onChange={this.handleChange}
                         error={errors.name}
                        />

                        <TextInputGroup
                         label="Email"
                         type="email"
                         name="email"
                         placeholder="Enter Email..."
                         value={email}
                         onChange={this.handleChange}
                         error={errors.email}
                        />

                        <TextInputGroup
                         label="Phone"
                         name="phone"
                         placeholder="Enter Phone..."
                         value={phone}
                         onChange={this.handleChange}
                         error={errors.phone}
                        />

                        <input type="submit" 
                        value="Update Contact" 
                        className="btn btn-light btn-block" />
                    </form>
                    
                </div>
            </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default EditContact;