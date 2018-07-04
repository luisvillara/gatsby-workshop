import React from 'react'
import Link from 'gatsby-link'

import VideoBox from '../components/VideoBox'
import styles from '../styles/index.module.sass'

const IndexPage = () => (
  <div className={styles.container}>
    <div className={styles.boxContainer}>
      <VideoBox title="Fake Happy" image="https://image.ibb.co/kn8gsJ/fake_happy.jpg" color="#FAF000" />
    </div>
    <div className={styles.boxContainer}>
      <VideoBox title="Fake Happy" image="https://image.ibb.co/kn8gsJ/fake_happy.jpg" color="#FAF000" />
    </div>
  </div>
)

export default IndexPage
