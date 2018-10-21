import React ,{ Component } from 'react';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

addOne(){
    this.setState({
        count: this.state.count + 1 
    });
}

removeOne(event){
    if( this.state.count >0 ){
        this.setState({
            count: this.state.count - 1
        });
    }
}

render() {
    return (
        <div className = "jumbotron">
            <h1 align = "center"> Bienvenue </h1>
            <p 
                className = "text-secondary" > 
                Mon conteur : {this.state.count}
            </p>
            <button 
                className = "btn btn-primary btn-lg btn-block" 
                onClick = { () => this.addOne() } 
            >
                +1 
            </button>
            <button 
                className = "btn btn-primary btn-lg btn-block" 
                onClick = { this.removeOne.bind(this) }
            >
                -1
            </button>
        </div>
        

        )
}




}

export default Home;