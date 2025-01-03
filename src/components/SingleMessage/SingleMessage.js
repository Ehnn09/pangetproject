import React from 'react';
import styles from './SingleMessage.module.css';

const SingleMessage = () => {
  return (
    <div className="message-container">
      <div className="message-box">
        <div className="heart-icon">💖</div>
        <p className="message-text">Dito ko nalang sabihin hindi ka naman makausap ng maayos sa personal todo iwas ka e HAHA

          kala mo naman laki ng kasalanan ko, nag open up lang din ako... pakiramdam ko kasi sasabog ako pag di ko nasabi HAHAHA, wala naman akong ibang masasabihan kasi nakakatawa naman talaga pati ikaw natawa nga.
          hindi ko din nga alam bat ko bigla nasabi yun hindi ko naman sadya,wala naman ako balak sabihin yun nagtanong ka pa kasi HAHAHA
        </p>

        <p className="message-text"> kalimutan nalang natin kagaguhan ko HAHA.. Hindi ko kasi alam pwede pala mangyari yun tas sayo pa. kaya nga nasabi ko nabubuang na ko, yaan mo na lang ako panget lilipas din yan </p>
        <div className="footer">
          <span className="author">- Your Kuyang Pogi</span>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
