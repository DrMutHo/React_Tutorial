import React, { useState } from "react";
import './DisplayInfo.scss'
import logo from '../logo.svg'

// class DisplayInfo extends React.Component {
//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 {true &&
//                     <div>
//                         {listUsers.map((user) => {
//                             return (
//                                 <div>
//                                     <div key={user.id} className={+user.age > 25 ? "green" : "red"}>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                     <hr />
//                                 </div>

//                             )
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

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