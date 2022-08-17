import './App.css';
import { ChatEngine } from "react-chat-engine"

import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div>
      <header className="App-header">
      <h1>Hey Mate!! </h1>
       <h2>It's time to chat</h2>
      </header>
      <ChatEngine
            height='100vh'
            userName='zenitsu07'
            userSecret='zenitsu_07'
            projectID='abcab59b-f56c-44fd-aaae-542fe025f899'

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
            //render your own component for chatfeef by taking in chatAppProps as prop 
            
      />
      <ChatFeed />
   </div>
  );
}
export default App;