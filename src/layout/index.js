import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import config from '../../data/SiteConfig'
import styles from './index.module.scss'

const MainLayout = ({ children }) => (
  <>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
  </>
)

export default MainLayout
