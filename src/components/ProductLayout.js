import React, {useContext} from 'react';
import { Card, Header, Segment, Loader } from 'semantic-ui-react';
import GlobalStateContext from "../context/GlobalState";
import AdContainer from '../components/AdContainer';
import Product from './Product'
import styles from './style/index.css';

const WaitForAd = 20;
const timeForAd = (a) => (a % (WaitForAd) === WaitForAd - 1);

let Oops = () => (
  <Segment className={styles.oops}>
    <Header as={'h3'}>
      Oops.. something went wrong \_(ʘ_ʘ)_/
    </Header>
  </Segment>
);

let Loading = () => (
  <Segment basic className={styles.loadingFooter}>
    <Loader active inline='centered' />
  </Segment>
);

let End = () => (
  <Segment basic className={styles.loadingFooter}>
    <Header as='h3'>
      ~ end of catalogue ~
    </Header>
  </Segment>
);

export default function ProductLayout({products}){
  const appState = useContext(GlobalStateContext);
  return(
    <React.Fragment>
      <Card.Group className={styles.productLayout}>
        {products.map((product, i) => (
          <React.Fragment key={i}>
            <Product product={product}/>
            {timeForAd(i) && <AdContainer/>}
          </React.Fragment>
          )
        )}
      </Card.Group>
      {appState.isFetching && <Loading/>}
      {!appState.hasMore && <End/>}
      {appState.error && <Oops/>}
    </React.Fragment>
  )
}
