// Message.js
import React from 'react';

const Message = ({ sender, content, timestamp }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="bg-blue-500 text-white p-2 rounded-lg">
        <p>{content}</p>
      </div>
      <span className="text-gray-500 text-xs ml-2">{timestamp}</span>
    </div>
  );
};

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        className="flex-grow border border-gray-300 p-2 rounded-lg"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded-lg ml-2"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
};

const MessagePage = () => {
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'John', content: 'Hey! How are you?', timestamp: '10:00 AM' },
    { id: 2, sender: 'You', content: 'I am good, thanks!', timestamp: '10:01 AM' },
    { id: 3, sender: 'John', content: 'Great to hear!', timestamp: '10:02 AM' },
  ]);

  const handleSend = (newMessage) => {
    setMessages([
      ...messages,
      { id: messages.length + 1, sender: 'You', content: newMessage, timestamp: 'Just now' },
    ]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md h-[600px] overflow-auto">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="h-[500px] overflow-auto">
        {messages.map((msg) => (
          <Message key={msg.id} {...msg} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default MessagePage;
