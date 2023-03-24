import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Introducing Code Canvas',
    image: 'img/1.png',
    description: (
      <>
          Code Canvas is a platform that enables artists to create and publish long-form generative art on the Solana blockchain. With Code Canvas, artists can create unique and dynamic generative art pieces that are accessible and collectible by enthusiasts worldwide.
      </>
    ),
  },
  {
    title: 'Incredible User Experience',
    image: 'img/2.png',
    description: (
      <>
          Code Canvas uses state-of-the-art technology to ensure the fastest rendering engine for a seamless user
          experience. Our rendering engine is optimized to render generative art pieces quickly and efficiently,
          using graphics processing units (GPUs) and other hardware accelerators.
      </>
    ),
  },
  {
    title: 'Triple Storage',
    image: 'img/3.png',
    description: (
      <>
          Code Canvas stores your code in three different places for security and accessibility.
          We store your code on the Solana blockchain, IPFS, and Arweave, ensuring that it is always secure and
          accessible to you and your collectors.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
