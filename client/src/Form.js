import React, {Component} from 'react';
import axios from "axios";

class Form extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        sent: false
    }

    handleName = (e)=> {
        this.setState({name: e.target.value})
    }

    handleLastName = (e)=> {
        this.setState({lastname: e.target.value})
    }

    handleEmail = (e)=> {
        this.setState({email: e.target.value})
    }

    handleMessage = (e)=> {
        this.setState({message: e.target.value})
    }

    formSubmit = (e)=> {
        e.preventDefault()

        let date = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/forma', data)
            .then(res=> {
                this.setState({
                    sent: true,
                }),this.resetForm()
            }).catch(()=>{
                console.log('message not sent')
        })

    }

    resetForm=()=> {
        this.setState({
            name: '',
            lastname: '',
            email: '',
            message: ''
        })
        setTimeout(()=> {
            this.setState({
                sent: false,
            })
        },3000)
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className='sigleItem'>
                        <label htmlFor="name">prénom</label>
                        <input
                            type="text"
                            name="name"
                            className="name"
                            placeholder="Ton prénom ..."
                            value={this.state.name}
                            onChange={this.handleName}
                        />
                    </div>
                    <div className='sigleItem'>
                        <label htmlFor="lastname">nom</label>
                        <input
                            type="text"
                            name="lastname"
                            className="lastname"
                            placeholder="Ton nom ..."
                            value={this.state.lastname}
                            onChange={this.handleLastName}
                        />
                    </div>
                    <div className='sigleItem'>
                        <label htmlFor="email">email</label>
                        <input
                            type="text"
                            name="email"
                            className="email"
                            placeholder="Ton email ..."
                            value={this.state.email}
                            onChange={this.handleEmail}
                        />
                    </div>
                    <div className="textarea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id=""
                            cols="30" rows="10"
                            placeholder='ton message ...'
                            value={this.state.message}
                            onChange={this.handleMessage}
                        >
                        </textarea>
                    </div>
                    <div className="msg">
                        Le message est bien envoyé !
                    </div>
                    <div className="btn">
                        <button type='submit'>Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;