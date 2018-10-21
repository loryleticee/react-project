import React, { Component } from 'react';

class Footer extends Component {
    render(){
        return(
            <div className = "conntainer">
                <div className = "control-label">
                    <input 
                        className = "form-control"
                        placeholder = "https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274"
                    />
                    <input 
                        className = "form-control"
                        placeholder = "https://bootswatch.com/lux/"
                    />
                </div>
                <div>
                    <footer className = "blockquote-footer">
                        <cite>
                            by {this.props.lastName+" "+this.props.firstName}
                        </cite>
                    </footer>
                </div>
            </div>
        );
    }

}
export default Footer;