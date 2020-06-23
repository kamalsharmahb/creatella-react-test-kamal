import React, { useContext, useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import GlobalStateContext from '../context/GlobalState';
import styles from './style/index.css';

const sortOptions = [
  {
    key: 'size',
    text: 'Size',
    value: 'size',
  },
  {
    key: 'Price',
    text: 'Price',
    value: 'Price',
  },
  {
    key: 'Id',
    text: 'Id',
    value: 'Id',
  },
];

const SortInput = () => {
  const [state, setState] = useState({});
  const appState = useContext(GlobalStateContext);
  const handleItemClick = (e, name) => {
    appState.actions.sortData(name, appState);
    appState.actions.setCategory(name, appState);
    setState({ key: name, text: name, value: name });
  };
  return (
    <div>
      <span>Catalogue Sort: </span>
      <span className={styles.ml10}>
        <Dropdown
          inline
          options={sortOptions}
          defaultValue={sortOptions[2].value}
          value={state.value}
          onChange={(e, { value }) => handleItemClick(e, value)}
        />
      </span>
    </div>
  );
};

export default SortInput;
