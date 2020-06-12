import React, { Component } from 'react';
import UserManager from '../../modules/UserManager';
import './UserForm.css'

class UserForm extends Component {
    state = {
        username: "",
        password: "",
        name: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create User     
    object, invoke the UserManager post method, and redirect to the full user list
    */
    constructNewUser = evt => {
        evt.preventDefault();
        if (this.state.username === "" ||  this.state.password === "" ||  this.state.name === ""  ) {
            window.alert("Please input an User Name and Password");
        } else {
            this.setState({ loadingStatus: true });
            const user = {
                username: this.state.username,
                password: this.state.password,
                name: this.state.name
            };

            // Create the user and redirect user to user list
            UserManager.post(user)
            .then(() => this.props.history.push("/users"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="username"
                        placeholder="User Name"
                        />
                        <label htmlFor="UserName">User Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="password"
                        placeholder="Password"
                        />
                        <label htmlFor="password">Password</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="name"
                        placeholder="Name"
                        />
                        <label htmlFor="name">Name</label>
                        
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewUser}
                        >Register User</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default UserForm