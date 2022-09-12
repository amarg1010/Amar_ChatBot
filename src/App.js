import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import ActionProvider from './components/ActionProvider';
import Config from './components/Config';
import MessageParser from './components/MessageParser';

function App() {
  return (
    <div className="App">
       <div style={{maxwidth:"500px"}}>
        <Chatbot config={Config} actionProvider={ActionProvider} messageParser={MessageParser}  steps={[
         {
          id:'intro', 
          message:'Hello world. I am a chatbot.',
         }]} /> 
    </div>
    </div>
  );
}

export default App;

