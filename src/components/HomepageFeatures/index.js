import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    italics: 'Sharp',
    title: ' Display',
    Svg: require('@site/static/img/feature-sharpdisplay-400x240.svg').default,
    description: (
      <>
        Ultra-low power, high contrast, high resolution, Sharp Memory LCD display.
      </>
    ),
  },
  {
    title: 'Tactile keyboard & touchpad',
    Svg: require('@site/static/img/feature-keyboard.svg').default,
    description: (
      <>
        Clicky keyboard w/ backlight and touchpad for easy input and navigation. Customizable keymap to suit your needs.
      </>
    ),
  },
  {
    title: 'Powered by Raspberry Pi',
    Svg: require('@site/static/img/feature-raspberrypizero.svg').default,
    description: (
      <>
        Powered by the Pi Zero W (optional) or any other compatible SBCs (e.g. Radxa Zero, MQ-Pro) with the low profile solderless header.
      </>
    ),
  },
];

function Feature({Svg, italics, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><i>{italics}</i>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx('hero hero--dark', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
