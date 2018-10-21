import React ,{ Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { author: '', text: '' };
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    }
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.author} said “${this.state.text}”`)
        this.setState({
            author: '',
             text: ''
        })
        //we will be tying this into the POST method in a bit
    }
    render() {
        return (
            <form className = "jumbotron" onSubmit={ this.handleSubmit }>
            <input
                required
                className = "form-control"
                type='text'
                placeholder='Votre nom'
                value={ this.state.author }
                onChange={ this.handleAuthorChange } />
            <br/>
            <input
                required
                className = "form-control"
                type = 'text'
                placeholder = 'Dites moi un mot'
                value={ this.state.text }
                onChange={ this.handleTextChange } />
                <br/>
            <input
                className = "btn btn-primary btn-lg btn-block"
                type = 'submit'
                value = 'Post' />
            </form>
        )
    }
}

   export default Form ;