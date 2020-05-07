import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context'

class Contact extends Component {

    state={onShowClick: false}

    
    
    onDeleteClick = async (id, dispatch) => {
      try {
        await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
        dispatch({type: 'DELETE_CONTACT', payload: id})
      } catch (e) {
        dispatch({type: 'DELETE_CONTACT', payload: id})
      }
       
    };
     
    render() {

        const { id, name, email, phone } = this.props.contact;

        const { onShowClick } = this.state;

        return (

            <Consumer>
                {value => {

                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3">
                <h3>{name}<i className="fa fa-sort-down" 
                style={{cursor: 'pointer'}}
                onClick={ () => this.setState({
                    onShowClick: !this.state.onShowClick
                })}
                />
               
                <i 
                className="fa fa-times text-right" 
                style={{cursor: 'pointer', 
                float: 'right', 
                color: 'red',
                fontSize: '22px'
                }} 
                
                onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                    <Link to={`contact/edit/${id}`}>
                        <i 
                        className="fa fa-pencil"
                        style={{
                            cursor: 'pointer',
                            float: 'right',
                            color: 'black',
                            marginRight: '1rem'
                        }}
                        ></i>
                    </Link>
                </h3>

                {onShowClick ? <ul className="list-group">
                    <li className="list-group-item"> {email}</li>
                    <li className="list-group-item"> {phone}</li>
                    
                   </ul> : null}
                   
            </div>
                    )
                }}
            </Consumer>

            
        )
    }
}

Contact.propTypes= {
    contact: PropTypes.object.isRequired,
    
}

export default Contact