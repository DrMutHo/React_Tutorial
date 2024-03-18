import React, { useEffect, useState } from "react";
import './DisplayInfo.scss'
import logo from '../logo.svg'

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all users')
            }

        }, [listUsers]
    );

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? "Hide List User" : "Show List User"}
                </span>
            </div>

            {isShowHideListUser &&
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div>
                                <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>
                                <hr />
                            </div>

                        )
                    })}
                </div>
            }
        </div>
    )
}

export default DisplayInfo