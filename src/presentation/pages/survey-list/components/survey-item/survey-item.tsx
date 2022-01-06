import React from 'react'
import Styles from './survey-item-styles.scss'
import { Icon, IconName } from '@/presentation/components'

const SurveyItem: React.FC = () => {
  return (
    <li className={Styles.surveyItemWrap}>
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
  )
}

export default SurveyItem
