import React from 'React';
import SubPage from './SubPage.jsx';
import Styles from './style.css';

export default function() {
  return (
    <div>
      <div className={Styles.mainPage}>Comfortable With React Seed</div>
      <SubPage />
    </div>
  );
};