import React from 'react'
import {Advertisement} from 'semantic-ui-react';
import styles from './style/index.css';

export default function AdContainer(){
  return(
    <Advertisement unit='large leaderboard' style={{ width: '90%' }}>
      <div className={styles.ad}>
        <img src='https://cdn.flashtalking.com/xre/421/4214881/2812635/image/2812635.gif?63816247' />
      </div>
    </Advertisement>
  )
}