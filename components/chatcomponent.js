import { MessageList } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import React, { useState } from 'react';

export default function ChatComponent() {
  const [messages, setMessages] = useState([
    {
      position: 'right',
      type: 'text',
      text: 'Hello',
      date: new Date(),
    },
    {
      position: 'left',
      type: 'text',
      text: 'Hi',
      date: new Date(),
    },
  ]);

  return (
    <use client>
    <MessageList
      className='message-list'
      lockable={true}
      toBottomHeight={'100%'}
      dataSource={messages}
    />
    </use>
  )
}
