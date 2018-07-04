import React from 'react'

import styles from '../styles/videoTemplate.module.sass'

const VideoTemplate = ({ data }) => {
  const { markdownRemark: { frontmatter: { title, image, color }, html } } = data
  return (
    <div className={styles.container}>
      <div className={styles.box} style={{ backgroundImage: `linear-gradient(-180deg, ${color} 1%, #FFFFFF 69%)`}}>
        <div className={styles.content}>
          <div className={styles.image} style={{ backgroundImage: `url(${image})`}}></div>
          <div className={styles.info}>
            <p className={styles.title}>{title}</p>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoTemplate

export const pageQuery = graphql`
  query VideoByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        color
        image
      }
    }
  }
`
