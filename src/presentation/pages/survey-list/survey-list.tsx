import { Footer, Header, Icon, IconName } from '@/presentation/components'
import React from 'react'
import Styles from './survey-list.scss'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <Icon className= {Styles.iconWrap} iconName={IconName.thumbUp} />
              <time>
                <span className={Styles.day}>14</span>
                <span className={Styles.month}>dez</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework favorito?</p>
            </div>
            <footer>Ver resultado</footer>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
