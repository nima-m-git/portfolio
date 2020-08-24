import React from 'react';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // Submit Email
    }

    render() {
        return (
            <div className='form container'>
                <form 
                    onSubmit={this.handleSubmit}
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
                    <input
                        type='submit'
                        value='Send'/>
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