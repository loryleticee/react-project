import React, { Component } from 'react';

class TodoList extends Component {

    constructor(){
        super();

        this.state = {
            userInput : '',
            items:[]

        };
    }

    onChange(event){
        this.setState({
            userInput:event.target.value
        },() => console.log(this.state.userInput));
    }

    addTodo(event){
        //Empeche le rechargement de la page 
        event.preventDefault();
        this.setState({
            //ES6
            items: [...this.state.items, this.state.userInput],
            userInput : ''
        });
    }
    deleteTodo(event){
        event.preventDefault();
        const array = this.state.items;
        const index = array.indexOf(event.target.value) ;
        
        //Supprime 
        array.splice(index,1);
        //Mon tableau items devient mon tableau array après modification
        this.setState({
            items: array
        })
    }
    renderTodos() {
        return this.state.items.map((item) => {
            //Expression reguliere qui annule les espaces
            var regex = new RegExp("[^\\s]");

            if(item.length>1 && !regex){
                return(
                    <div className = "list-group-item d-flex justify-content-between align-items-center" key  = { item }>
                        { item } <button onClick = { this.deleteTodo.bind(this)} >X</button> 
                    </div>
                );
            }
        });
    }

    render() {
        return(
            <div className = "jumbotron"> 
                <h1 align = "center" >My TodoList  </h1>
                <form className = "form-group ">
                    <input 
                        required 
                        className = "form-control"
                        type = "text" 
                        value = { this.state.userInput }
                        placeholder ="Add a row"
                        onChange = { this.onChange.bind(this) }
                    />
                    <br/>
                    <input 
                        required
                        className = "btn btn-primary"
                        type = "submit"
                        value = "Send to list"
                        onClick ={this.addTodo.bind(this) }
                    />
                </form>
                <div className = "list-group">
                    { this.renderTodos() }
                </div>
            </div>
        );
    }



}
export default TodoList ;