import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function HomepageVideos() {
  return (
    <section className={clsx('hero hero--light', styles.videos)}>
      <div className="container">
        <div className="text--center">
          <h1>See it in action</h1>
        </div>
        <div className="row">
          <div className={clsx('col col--4')}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fIgzybDcvYk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className={clsx('col col--4')}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/sYbW3vFS_AE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className={clsx('col col--4')}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/r9RmdUsp1jo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>                
        </div>
        <div className="row">
          <div className={clsx('col col--4', styles.col)}>
            <img src={useBaseUrl('/img/beepberry-edc.jpg')} />
          </div>
          <div className={clsx('col col--4', styles.col)}>
            <img src={useBaseUrl('/img/beepberry-fruitforscale-2048x1443.png')} />
          </div>
          <div className={clsx('col col--4', styles.col)}>
            <img src={useBaseUrl('/img/beepberry-tuir-reddit.png')} />
          </div>            
        </div>
      </div>
    </section>
  );
}
