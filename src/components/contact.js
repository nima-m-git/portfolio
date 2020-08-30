import React, { useCallback } from 'react';

import axios from 'axios';
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
              // The form submission was successful
              this.resetForm();
              alert('Thanks for the message. I’ll be in touch shortly.');
            } else {
              // The form submission failed
              alert('Something went wrong');
            //   console.error(JSON.parse(response.target.response).message);
            }
          };


        // axios({
        //     method: 'POST',
        //     url:'http://localhost:3002/send',
        //     data: this.state
        // })
        // .then((response) => {
        //     if (response.data.status === 'success'){
        //         alert('Message Sent. Check your inbox for a confirmation email (may have gone to spam).');
        //         this.resetForm()
        //     } else if (response.data.status === 'fail'){
        //         alert('Message failed to send.')
        //     }
        // })
        // .catch(error => console.log(error));
    }

    resetForm() {
        this.setState({
            ...this.initialState
        })
    }

    render() {
        return (
            <div className='form container'>
                <form 
                    onSubmit={this.handleSubmit}
                    method='POST'
                    noValidate
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
            <h1>Contact Me</h1>
            <ContactForm />
        </div>
    )
}

export { Contact }