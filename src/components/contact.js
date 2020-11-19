import React from 'react';

const url = 'https://o1newthge3.execute-api.us-east-2.amazonaws.com/dev/static-site-mailer';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            email: '',
            message: ''
        }
        this.state = {
            ...this.initialState
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        console.log(JSON.stringify(data))

        const req = new XMLHttpRequest();
        req.open('POST', url, true);
        req.setRequestHeader('Accept', 'application/json; charset=utf-8');
        req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    
        req.send(JSON.stringify(data));
    
        req.onloadend = response => {
            if (response.target.status === 200) {
              this.resetForm();
              alert('Thanks for the message. I’ll be in touch shortly.');
            } else {
              alert('Something went wrong');
            }
          };

    }

    resetForm() {
        this.setState({
            ...this.initialState
        })
    }

    render() {
        return (
            <div className='form'>
                <form 
                    onSubmit={this.handleSubmit}
                    method='POST'
                >
                    <label>
                        Name:
                        <input
                            name='name'
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        E-Mail:
                        <input
                            name='email'
                            type='email'
                            value={this.state.email}
                            onChange={this.handleChange} 
                            required />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name='message'
                            value={this.state.message}
                            onChange={this.handleChange} 
                            required />
                    </label>
                    <button>Send</button>
                </form>
            </div>
        )
    }
}


const Contact = () => {
    return (
        <div className='contact container'>
            <ContactForm />
        </div>
    )
}

export default Contact