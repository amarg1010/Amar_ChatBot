
import React from "react";
import "./ProjectList.css";

const ProjectList = (props) => {
  const linkMarkup = props.projoptions.map((link) => (
    <li key={link.id} className="link-list-item"  >
      <div id="inner">
       <b>{link.title}</b><br/><hr/>{link.text}<br/><b>Technical Stack:</b>{link.stack}<br/><b>Host Link:</b><a href={link.host} target={"_blank"} rel="noreferrer">{link.title}</a><br/>{"\u00a0\u00a0"}
       </div>{"\u00a0"}{"\n"}{"\n"}
    </li>
  
  )
  );

  return <ul className="link-list" style={{listStyle:'none'}}>{linkMarkup}</ul>;
};

export default ProjectList;