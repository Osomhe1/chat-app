import React from 'react';
import { ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

import './App.css'
import LoginForm from './components/LoginForm';

// import React from 'react'

export default function App() {

   if (!localStorage.getItem('username')) return <LoginForm />
    return (
      <div>
       

        <ChatEngine
          height='100vh'
          projectID='c4a296c5-5c47-47bc-8fb6-5fa207f63220'
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      </div>
    )
}
