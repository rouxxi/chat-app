import React from "react";
import "./Contact.css";

const Contact = () =>{
    const ImageUrl = "https://randomuser.me/api/portraits/men/71.jpg";
    const name = "George";
    const Online = true;
    return( 
        <section className="Contact">
            <img className="avatar" src={ImageUrl} alt="Avatar"/>
            <section className="status">
                <div className="name">{name}</div>
                <div>
                    <div className="status-online"></div>
                    <div className="status-text">{Online?"Online":"Offline"}</div>
                </div>
            </section>
        </section>
     );
}


export default Contact;