import React from 'react';

export class Form extends React.Component {
    state ={
        firstName: '',
        email: '',
        subscription: false,
    }

    handleChangeName = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if (this.state.firstName.length < 2) {
            alert('firstName too short')
        }
    }

    handleChangeCheckBox = (event) => {
        this.setState({[event.target.name]: event.target.checked})
    }

    handleChangeEmail = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSendButton = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!this.state.email) {
            alert('email no enter')
            return;
        }
        if (!emailRegex.test(this.state.email)) {
            alert('email is not correct')
            return;
        }
        if (this.state.subscription) {
            alert('Thank you for subscription')
            return;
        }
        this.setState({ email: '', subscription: false})
        alert('You should agree subscription');
    }

    render() {
        const {firstName, email, subscription} = this.state;

        return <div>
            <input
                type="text"
                name="firstName"
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChangeName}
                onBlur={this.validateName}
            />
            <br/>
            <input
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChangeEmail}
                // onBlur={this.validateEmail}
            />
            <div>
                <input
                type="checkbox"
                name="subscription"
                checked={subscription}
                onChange={this.handleChangeCheckBox}
                /> I agree with terms and conditions
            </div>
            <button onClick={this.handleSendButton}>Send</button>
        </div>
    }
}