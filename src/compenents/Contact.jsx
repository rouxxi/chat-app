import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";



class Contact extends React.Component{
        constructor(props){
        super(props);
        this.state = {online: props.online};
        
        }
 render(){
    return( 
        <section className="Contact">
            <img className="avatar" src={this.props.avatar} alt="Avatar"/>
            <section className="status">
                <div className="name">{this.props.name}</div>
                <div 
                className ="beau"
                onClick={event=>{
                    const opositeConec = !this.state.online;
                    this.setState( {online : opositeConec})
                }} >
                    <div className={this.state.online?"status-online":"status-offline"}></div>
                    <div className="status-text">{this.state.online?"Online":"Offline"}</div>
                </div>
            </section>
        </section>
     );
}
}


Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;