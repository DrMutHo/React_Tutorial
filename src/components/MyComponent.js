import React from 'react';
import UserInfo from './UserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "ssSeul", age: "19" },
            { id: 2, name: "Mut Ho", age: "68" },
            { id: 3, name: "Bach", age: "86" },
        ]
    }

    render() {
        return (
            <div>
                <UserInfo />
                <br /><br />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        )
    }
}

export default MyComponent;