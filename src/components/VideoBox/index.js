import React from 'react'
import Link from 'gatsby-link'

import styles from './VideoBox.module.sass'

import Triangle from '../../../assets/Triangle.png'

const VideoBox = ({ title, image, description, link, color }) => (
  <div className={styles.container} style={{ backgroundImage: `linear-gradient(-180deg, ${color} 1%, #FFFFFF 69%)`}}>
    <Link to={link}>
      <div className={styles.content}>
        <div className={styles.video} style={{ backgroundImage: `url(${image})` }}>
          <img src={Triangle} className={styles.triangle} />
        </div>
        <div className={styles.title}>
          {title}
        </div>
        {description && (
          <div className={styles.description}>
            {description}
          </div>
        )}
      </div>
    </Link>
  </div>
)

export default VideoBox
