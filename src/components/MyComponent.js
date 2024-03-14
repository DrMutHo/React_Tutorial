import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: 'ssSeul',
        address: 'UET',
        age: 19
    }

    render() {
        return (
            <div>
                My name is {this.state.name}

            </div>
        )
    }
}

export default MyComponent;