import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageDiagram() {
  return (
    <section className={styles.diagram}>
      <div className="container">
        <h1>Technical Diagram</h1>
        <img src={useBaseUrl('/img/beepberry-diagram.svg')} className="img-svg" />
      </div>
    </section>
  );
}