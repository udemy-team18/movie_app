import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
// import styles from 'styles/css/Search.module.css';
import styles from '../styles/css/Search.module.css';

const Search = ({ object, getData }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value.toLowerCase());
  };

  const filter = () => {
    const name = object.filter(item => item.title.toLowerCase().includes(value));

    getData(name);
  };

  return (
    <div className={styles.search}>
      <input className={styles.input} placeholder="영화명을 입력하세요" onChange={handleChange}></input>
      <FaMagnifyingGlass className={styles.icon} onClick={filter} />
    </div>
  );
};

export default Search;
