import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "styles/Search.module.css";


function Search(){
    const [value,setValue] = useState('');
    
    const handleChange = (e)=>{
        setValue(e.target.value);
    }

    const handleClick = (e)=>{
        console.log("클릭")
    }

    const movieFilter = ()=>{
        
    }


    return (
        <div className = {styles.search}>
            <input className = {styles.input} placeholder = "영화명을 입력하세요" onChange = {handleChange}></input>
            <FaMagnifyingGlass className = {styles.icon} onClick = {handleClick}/>
        </div>
    )
}

export default Search;