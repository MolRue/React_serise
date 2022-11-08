import React from 'react';
import styles from './CSSModule.module.css';

const SCCModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요 . 저는 <span className="something">css module</span>
    </div>
  );
};

export default SCCModule;
