import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

const Contact = (props) =>{
 
    return( 
        <section className="Contact">
            <img className="avatar" src={props.avatar} alt="Avatar"/>
            <section className="status">
                <div className="name">{props.name}</div>
                <div>
                    <div className={props.online?"status-online":"status-offline"}></div>
                    <div className="status-text">{props.online?"Online":"Offline"}</div>
                </div>
            </section>
        </section>
     );
}


Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;