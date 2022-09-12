import React from 'react';

class ActionProvider extends React.Component {
    constructor(createChatBotMsg,setStateFunc) {
  super(createChatBotMsg,setStateFunc);
    this.createChatBotMsg=createChatBotMsg
    this.setState = setStateFunc;
}
greet()
{
    const greetmsg=this.createChatBotMsg("Hi, How can I help you?");
    this.updateChatbotState(greetmsg)
}
Hi()
{
    const greetmsg=this.createChatBotMsg("Hi, How can I help you?");
    this.updateChatbotState(greetmsg)
}


namste()
{
    const namstemsg=this.createChatBotMsg("Namste, How can I help you?");
    this.updateChatbotState(namstemsg)
}
hola()
{
    const namstemsg=this.createChatBotMsg("Hola, How can I help you?");
    this.updateChatbotState(namstemsg)
}

How()
{
    const namstemsg=this.createChatBotMsg("I am Absoulty Fine ");
    this.updateChatbotState(namstemsg)
}

Hobbies()
{
    const namstemsg=this.createChatBotMsg("Love to play Cricket and Chess");
    this.updateChatbotState(namstemsg)
}

motivate()
{
  const namstemsg=this.createChatBotMsg("A man is made by his belief. As he belives so he becomes.");
  this.updateChatbotState(namstemsg)
}


sorry()
{
    const namstemsg=this.createChatBotMsg("Sorry, I didn't get you! can you please try it in other way.");
    this.updateChatbotState(namstemsg)
}
like()
{
  const namstemsg=this.createChatBotMsg("Absolutely.! You're the best");
  this.updateChatbotState(namstemsg)
}
technical= ()=>
{
    const namstemsg=this.createChatBotMsg( "Ok, So let me tell you about my Technical Stacks:",
    {
      widget: "Technical Stacks",
    }
    );
    this.updateChatbotState(namstemsg)
}
handlePersonalInfo = () => {
    const message = this.createChatBotMsg(
      "Ok, So let me tell you about myself:",
      {
        widget: "Personal Info",
      }
    );

    this.updateChatbotState(message);
  };
  
  handleAcademicInfo = () => {
    const message = this.createChatBotMsg(
      "Ok, So let me tell you about my Academics:",
      {
        widget: "Academic Info",
      }
    );

    this.updateChatbotState(message);
  };
  handleProjectInfo = () =>{
    const message = this.createChatBotMsg(
      "I have done various projects on different technical stacks such as HTML,CSS,JavaScript and React:",
      {
        widget: "Project Info",
      }
    );

    this.updateChatbotState(message);
  }
  contacts = () =>{
    const message = this.createChatBotMsg(
      "My Contact Information are given below:",
      {
        widget: "Contact Info",
      }
    );

    this.updateChatbotState(message);
  }
moody()
{
  const message = this.createChatBotMsg("MOODY");
  this.updateChatbotState(message)
}
  song()
  {
    const message = this.createChatBotMsg(
      "My Favourite song is Salam-E-Ishq",
      {
        widget: "favsong",
      }
    );

    this.updateChatbotState(message);
  }
updateChatbotState(message)
{
    this.setState(prevState=>({
        ...prevState, messages:
         [...prevState.messages,message]
    }))
}
    render() {
        return <div></div>;
    }
}


export default ActionProvider;