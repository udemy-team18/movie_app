<<<<<<< HEAD
import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "styles/css/Search.module.css";

const Search = ({ object, getData }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
=======
import React, { useState } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import styles from 'styles/css/Search.module.css';

const Search = ({ object, getData }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10
    setValue(e.target.value.toLowerCase());
  };

  const filter = () => {
<<<<<<< HEAD
    const name = object.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
=======
    const name = object.filter(item => item.title.toLowerCase().includes(value));
>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10

    getData(name);
  };

  return (
    <div className={styles.search}>
<<<<<<< HEAD
      <input
        className={styles.input}
        placeholder="영화명을 입력하세요"
        onChange={handleChange}
      ></input>
=======
      <input className={styles.input} placeholder="영화명을 입력하세요" onChange={handleChange}></input>
>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10
      <FaMagnifyingGlass className={styles.icon} onClick={filter} />
    </div>
  );
};

export default Search;
