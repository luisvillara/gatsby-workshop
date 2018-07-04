import React from 'react'
import Link from 'gatsby-link'

import styles from './Header.module.sass'

import PMoreLogo from '../../../assets/P-MORE.png'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <Link to="/"><img src={PMoreLogo} className={styles.logo} width="auto" height="50px" /></Link>
  </div>
)

export default Header
