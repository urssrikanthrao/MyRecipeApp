import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react";
import './searchBar.css'

const SearchBar = ({ textChanged }) => {
    const onChangeHandler = (e) => {
        const text = e.target.value;
        textChanged(text);
    }

    return (
        <div className="bar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" onKeyUp={(e) => onChangeHandler(e)} className="searchbar" />
        </div>
    )
}

export default SearchBar;