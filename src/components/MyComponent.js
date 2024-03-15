import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'ssSeul',
        address: 'UET',
        age: 19
    }

    handleClick = (event) => {
        console.log(" random ", Math.floor((Math.random() * 100) + 1))

        this.setState({
            name: 'Mut Ho',
            age: Math.floor((Math.random() * 100) + 1)
        })
    }

    handleOnMouseOver(event) {
        // console.log(event.pageX)
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;