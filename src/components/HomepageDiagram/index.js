import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageDiagram() {
  return (
    <section className={clsx('hero hero--light', styles.diagram)} >
      <div className="container">
        <h1>Technical Diagram</h1>
        <div className={styles.front}></div>
        <div className={styles.back}></div>
      </div>
    </section>
  );
}