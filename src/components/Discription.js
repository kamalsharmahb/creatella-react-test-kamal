import React from 'react'
import {Header, Container} from 'semantic-ui-react';
import AdContainer from "./AdContainer";
import styles from './style/index.css';

export default function Description(){
  return(
    <Container className={styles.description}>
      <Header>Products Grid</Header>
      <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our
        selection of ascii faces in an exciting range of sizes and prices.</p>
      <p>But first, a word from our sponsors:</p>
      <AdContainer adNo={Math.floor(Math.random() * 1000)} flag="desc"/>
    </Container>
  )
}