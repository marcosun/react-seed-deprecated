import React from 'React';
import SubPage from './SubPage';
import SubPage2 from './SubPage2';
import Styles from './style.css';

export default function() {
  return (
    <div>
      <div className={Styles.mainPage}>Comfortable With React Seed</div>
      <SubPage />
      <SubPage2 />
    </div>
  );
};