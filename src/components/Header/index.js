import React from 'react'
import styles from './Header.module.sass'

import PMoreLogo from '../../../assets/P-MORE.png'

const Header = ({ siteTitle }) => (
  <div className={styles.container}>
    <img src={PMoreLogo} className={styles.logo} width="auto" height="50px" />
  </div>
)

export default Header
