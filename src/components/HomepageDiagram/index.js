import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageDiagram() {
  return (
    <section className={styles.diagram}>
      <div className="container">
        <h1>Technical Diagram</h1>
        <img src="/img/beepberry-diagram.svg" className="img-svg"/>
      </div>
    </section>
  );
}