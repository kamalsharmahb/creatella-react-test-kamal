import React, {useContext, useEffect, useRef, useState} from 'react';
import TopHeader from "./TopHeader";
import ProductLayout from "./ProductLayout";
import Description from "./Discription";
import GlobalStateContext from "../context/GlobalState";
import styles from './style/index.css';

export default function HomeLayout() {
  const [data, setData] = useState([]);
  const page = useRef(1);
  const appState = useContext(GlobalStateContext);

  const handleScroll = () => {
    if ((window.innerHeight + document.documentElement.scrollTop) !== document.body.scrollHeight) {
      return
    }
    appState.hasMore && appState.actions.setIsFetching(true, appState);
  };

  useEffect(() => {
    if (!appState.isFetching) return;
    page.current = page.current + 1;
    appState.hasMore && appState.actions.loadDataOnScroll(page.current, appState.category);
  }, [appState.isFetching]);

  useEffect( ()=>{
    appState.data
      .then((data)=>{
        if(data.response) setData(data.response);
        if(data.error) appState.actions.setError(appState, true)
    })
  }, [appState.data]);

  useEffect(() => {
    if (appState.newData.length === undefined){
      appState.newData.then((data)=>{
        if(data.response.length > 0) setData(prevState => ([...prevState, ...data.response]));
        else appState.actions.setHasMoreData(false, appState);
        appState.actions.setIsFetching(false, appState);
      });
    }
  }, [appState.newData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <React.Fragment>
      <TopHeader appState={appState}/>
      <Description/>
      <div className={styles.background}>
        <ProductLayout products = {data}/>
      </div>
    </React.Fragment>
  );
}