import React from 'react';
import Contact from '../Contact';
import styles from './Search.module.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        onChange={(e) => this.props.handleSearch(e.target.value)}
        className="findInput"
        placeholder="find"
      />
    );
  }
}

export default Search;
