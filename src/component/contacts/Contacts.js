import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from '../../context'

class Contacts extends Component {
 
  render() {
    
          return (
            <Consumer>
              {value => {
                const { ContactInfo } = value
                return (
                  <React.Fragment>
                    <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> list</h1>
              {ContactInfo.map(attr => (
                <Contact
                  key={attr.id}
                  contact={attr}
                 
                />
              ))}
            </React.Fragment>
                )
              }}
            </Consumer>
          )
  }
}

export default Contacts;
