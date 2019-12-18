import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        this.userChange = this.userChange.bind(this);
        this.passChange = this.passChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    userChange(e) {
        const { username, value } = e.target;
        this.setState({ [username]: value });
      }
    
      passChange(e) {
        const { password, value } = e.target;
        this.setState({ [password]: value });
      }

      handleSubmit(e) {
        
        const { username, password} = this.state;
        if(username === 'DANS' && password === '123'){
            alert('thanks for login');
        };
        e.preventDefault();
      }
    

   

    render() {
        // const { username, password} = this.state;
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Username:
                <input type="text" onChange={this.userChange} />
                </label>
                <label>
                Password:
                <input type="password" onChange={this.passChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
)
    }
    }
export default Login; 