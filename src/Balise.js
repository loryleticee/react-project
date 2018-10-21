import React, { Component } from 'react';
import { isNull } from 'util';

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
        let i=1 ;
        for (let chr of this.state.userInput) {

            var inputSize = this.state.userInput.length;
            
            var indexNextChar = this.state.userInput.length-this.state.userInput.length+i+1;

            var nextChar = this.state.userInput.substring(i,indexNextChar);

            var re = new RegExp('[0-9]');


      
            if(re){
                var mi = this.state.tab.push(("<"+chr+"></"+chr+">").repeat(nextChar));
            }else{
                if(!/^(.).?[0-9]/.test({chr})){
                    var mi = this.state.tab.push("<"+chr+"></"+chr+">");
                }
            }
            if( i < inputSize){
                i++;
            }
        }
        this.setState({
            tab : [...this.state.tab, mi],
            userInput:''
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

            var regex = new RegExp("[^\\s]");

            if(item.length>=1 ){
                
                return(
                    <div className = "list-group-item d-flex justify-content-between align-items-center" key  = { item }>
                    <textarea className = "form-control" id = "exampleTextarea" rows="3" value = {item}/>
                    </div>
                );
                
            }
        });
       
    }

    render() {
        return(
            <div className = "jumbotron"> 
                <h1 align = "center" >My TAGS  </h1>
                <form className = "form-group">
                    <input 
                        className = "form-control is-valid" id="inputValid"
                        required
                        defaultValue = "p"
                        type = "text" 
                        value = { this.state.userInput }
                        placeholder ="For  <p></p><p></p>      tape      p2"
                        onChange = { this.onChange.bind(this) }
                    />
                    <br/>
                    <input 
                        required
                        className = "btn btn-primary btn-lg btn-block"
                        type = "submit"
                        value = "GET IT"
                        onClick = {this.addTodo.bind(this) }
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