import { Logo } from '@/presentation/components'
import React, { memo } from 'react'
import Styles from './header.scss'

const Header: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span>Jose</span>
            <a href='#'>Sair</a>
          </div>
        </div>
      </header>
  )
}

export default memo(Header)
