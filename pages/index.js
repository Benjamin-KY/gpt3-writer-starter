import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  const [userInput, setUserInput] = useState('');
  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };  
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>GPT-3 Writer App Build with a React/NextJS/CSS Front-end</h1>
          </div>
          <div className="header-subtitle">
            <h2>Ben Kereopa-Yorke</h2>
          </div>
        </div>
        {/* Add this code here*/}
        <div className="prompt-container">
          <textarea placeholder="start typing here" className="prompt-box" value={userInput} onChange={onUserChangedText}/>
        </div>
        <div className="prompt-buttons">
           <a className="generate-button" onClick={null}>
              <div className="generate">
                  <p>Generate</p>
            </div>
          </a>
      </div>
  </div>
  </div>
    );
  };

export default Home;