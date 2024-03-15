import React from 'react';
import AddUserInfo from './AddUserInfo';
import DisplayInfo from './DisplayInfo';

class MyComponent extends React.Component {

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

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
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                />
            </div>
        )
    }
}

export default MyComponent;