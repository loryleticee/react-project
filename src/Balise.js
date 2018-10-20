import React, { Component } from 'react';

class Balise extends Component {

    constructor(){
        super();

        this.state = {
            userInput : '',
            items:[],
            tab: [],
            char:'',
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
        for (var chr of this.state.userInput) {
            var mi = this.state.tab.push("<"+chr+"></"+chr+">");
        }
        this.setState({
            tab : [...this.state.tab, mi]
         })
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
        return this.state.tab.map((item) => {
            return(
                <div className = "list-group-item d-flex justify-content-between align-items-center" key  = { item }>
                   <input type="text" value = {item}/> <button onClick = { this.deleteTodo.bind(this)} >X</button> 
                </div>
            );
        });
    }

    render() {
        return(
            <div className = "jumbotron"> 
                <h1 align = "center" >Mes Balises  </h1>
                <form className = "form-group">
                    <input 
                        required
                        className = "form-control"
                        type = "text" 
                        value = { this.state.userInput }
                        placeholder ="Renseigner un item"
                        onChange = { this.onChange.bind(this) }
                    />
                    <br/>
                    <input 
                        required
                        className = "btn btn-primary"
                        type = "submit"
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
export default Balise ;