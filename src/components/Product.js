import React from 'react'
import {Button, Card, Segment} from 'semantic-ui-react';
import styles from './style/index.css';

export default function AdContainer({ product }){
  const centsToDollarString = (price) => (price / 100).toLocaleString("en-US", {style: "currency", currency: "USD"});

  const displayDate = (date) => {
    const millisInADay = 1000 * 60 * 60 * 24;
    let diffInDays = (new Date().getTime() - date.getTime()) / millisInADay;

    if (diffInDays < 1) {
      return "Today"
    } else if (diffInDays < 7) {
      return `${Math.floor(diffInDays)} days ago`
    } else {
      return date.toDateString()
    }
  };

  return(
    <Card>
      <Card.Content>
        <Segment size='massive'>
          <div className={styles.face} style={{fontSize: product.size}}>{product.face}</div>
        </Segment>
        <Card.Meta>Price: {centsToDollarString(product.price)}</Card.Meta>
        <Card.Meta>Size: {product.size}</Card.Meta>
        <Card.Meta>Date: {displayDate(new Date(product.date))}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button color='green'>
          Buy Now
        </Button>
      </Card.Content>
    </Card>
  )
}