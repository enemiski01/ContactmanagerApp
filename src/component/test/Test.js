import React, { Component } from 'react'

class Test extends Component {

    state={
        title: ''
    }

    async componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => this.setState({
      title: data.title
  }));
    }

    //componentWillMount() {
    //    console.log("componentWillMount...");
    //}

    
   // componentDidUpdate() {
    //    console.log("componentDidUpdate...");
    //}

    //componentWillUpdate() {
    //    console.log("componentWilUpdate...");
    //}

    //componentWillReceiveProps(nextProps, nextState) {
    //    console.log("componentWilUpdate...");
    //}

     //static getDerivedStateFromProps(nextProps, prevState) {
     //   return null;
     //}

    render() {
        const { title, body } = this.state
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
        )
    }
}

export default Test
