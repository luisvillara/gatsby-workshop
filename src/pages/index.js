import React from 'react'
import Link from 'gatsby-link'

import VideoBox from '../components/VideoBox'
import styles from '../styles/index.module.sass'

const IndexPage = ({ data: { allMarkdownRemark } }) => (
  <div className={styles.container}>
    {allMarkdownRemark.edges.map((video, index) => (
      <div key={`video_${index}`} className={styles.boxContainer}>
        <VideoBox
          title={video.node.frontmatter.title}
          image={video.node.frontmatter.image}
          color={video.node.frontmatter.color}
          link={video.node.frontmatter.path}
        />
      </div>
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query GetIndexData {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            color
            path
            image
          }
          html
        }
      }
    }
  }
`
