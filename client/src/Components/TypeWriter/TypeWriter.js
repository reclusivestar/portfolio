import React, { useState, useEffect } from 'react'
import './TypeWriter.css'

const CONSTANTS = {
  DELETING_SPEED: 30,
  TYPING_SPEED: 120
}

export default function TypeWriter({ messages, heading }) {
  const [state, setState] = useState({
    text: "",
    message: "",
    isDeleting: false,
    loopNum: 0,
    typingSpeed: CONSTANTS.TYPING_SPEED,
  });

  useEffect(() => {
    let timer = "";
    const handleType = () => {
      setState(cs => ({
        ...cs, // cs means currentState
        text: getCurrentText(cs),
        typingSpeed: getTypingSpeed(cs)
      }));
      timer = setTimeout(handleType, state.typingSpeed);
    };
    handleType();
    return () => clearTimeout(timer);
  }, [state.isDeleting]);

  useEffect(() => {
    if (!state.isDeleting && state.text === state.message) {
      setTimeout(() => {
        setState(cs => ({
          ...cs,
          isDeleting: true
        }))
      }, 500);
    } else if (state.isDeleting && state.text === "") {
      setState(cs => ({
        ...cs, // cs means currentState
        isDeleting: false,
        loopNum: cs.loopNum + 1,
        message: getMessage(cs, messages)
      }));
    }
  }, [state.text, state.message, state.isDeleting, messages]);

  function getCurrentText(currentState) {
    return currentState.isDeleting
      ? currentState.message.substring(0, currentState.text.length - 1)
      : currentState.message.substring(0, currentState.text.length + 1);
  }

  function getMessage(currentState, data) {
    return data[Number(currentState.loopNum) % Number(data.length)];
  }

  function getTypingSpeed(currentState) {
    return currentState.isDeleting
      ? CONSTANTS.TYPING_SPEED
      : CONSTANTS.DELETING_SPEED;
  }

  return (
     <div className="row banner">
     <div className="banner-text">
        <h1 className="responsive-headline">Hi, I'm Tanmay Kumar.</h1>
       
        <h3><span>{state.text}</span><span id="cursor" /></h3>
        <hr />
        <ul className="social">
            <li key="linkedin"><a href="https://www.linkedin.com/in/tkumar01/"><i className="fa fa-linkedin"></i></a></li>
            <li key="github"><a href="https://github.com/reclusivestar"><i className="fa fa-github"></i></a></li>
        </ul>
     </div>
  </div>
  );
}