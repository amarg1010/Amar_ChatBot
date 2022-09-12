
import React from "react";

import "./ContactList.css";

const ContactList = (props) => {
  const linkMarkup = props.contoptions.map((link) => (
    <li key={link.id} className="link-list-item" id="outer3">
       <b>Address:</b> {link.address}<br/>
       <b>City:</b>{link.city}<br/>
       <b>State:</b>{link.state}<br/>
       <b>Mobile No:</b>{link.phone}<br/>
       <a href="https://github.com/amarg1010" target="_blank"><img src="data:image/png;base64,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" width="30px"></img></a>
     {"\u00a0"}{"\u00a0"}{"\u00a0"} <a href="https://www.linkedin.com/in/amar-gakhare-0498851a7/" target="_blank"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='%23069' fill-rule='nonzero'%3E %3Cpath d='M0 7.556h5.333V23.11H0zM2.906 0C1.149 0 0 1.152 0 2.667c0 1.481 1.115 2.666 2.838 2.666h.034c1.791 0 2.906-1.185 2.906-2.666C5.744 1.152 4.663 0 2.906 0zM18.133 7.111c-2.704 0-3.915 1.515-4.592 2.58V7.479H8.444v15.633h5.096v-8.73c0-.467.034-.934.168-1.268.369-.934 1.207-1.9 2.615-1.9 1.844 0 2.581 1.433 2.581 3.535v8.363H24v-8.964c0-4.802-2.514-7.036-5.867-7.036z'/%3E %3C/g%3E %3C/svg%3E"></img></a> 
    </li>
  ));

  return <ul id="inner3" className="link-list" style={{listStyle:'none'}}>{linkMarkup}</ul>;
};

export default ContactList;