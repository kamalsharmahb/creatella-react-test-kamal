import React from 'react'
import {Advertisement} from 'semantic-ui-react';
import styles from './style/index.css';

export default function AdContainer({adNo}){
  return(
    <Advertisement unit='medium rectangle' style={{ width: '100%' }}>
      <div className={styles.ad}>
        <img src={`api/ads/?r=${adNo}`} alt="(╯°□°)╯︵ spɐ" />
      </div>
    </Advertisement>
  )
}