import React from 'react';

class Login extends React.Component{

    state={
        email:'',
        pwd:''
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.prebventDefault()
    }
    render(){
        return(
            <div>
                <p>This is the admin dashboard</p>
            </div>
        )
    } 
}

export default Login;