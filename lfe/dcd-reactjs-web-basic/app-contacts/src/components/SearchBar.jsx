import React from 'react';
import PropTypes from 'prop-types';
 
function SearchBar({ keyword, keywordChange }) {
  return (
    <>
      <span id='search-name' htmlFor="search-name">Search</span>
      <input
      id='search-name'
      name='search-name'
      className="search-bar"
      type="text"
      placeholder="Search by name"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)} />
    </>
  )
}
 
SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}
 
export default SearchBar;