import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShowListUsers: true
    }


    handleShowHide = () => {
        this.setState({
            isShowListUsers: !this.state.isShowListUsers
        })
    }



    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }}>
                        {this.state.isShowListUsers === true ? "Hide list users" : "Show list users"}
                    </span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {listUsers.map((user) => {

                            return (
                                <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfo