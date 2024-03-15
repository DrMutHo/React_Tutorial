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

    handleOnChangeInput = (event) => {

        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age} years old
                {/* <button onClick={(event) => { this.handleClick(event) }}>Click me</button> */}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MyComponent;