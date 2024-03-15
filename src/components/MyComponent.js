import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'ssSeul',
        address: 'UET',
        age: 19
    }

    handleClick(event) {
        // console.log("My name is ", this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }

    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default MyComponent;