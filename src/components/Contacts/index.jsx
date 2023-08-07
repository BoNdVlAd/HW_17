import React from 'react';
import Contact from '../Contact';
import styles from './Contacts.module.css';

class Contacts extends React.Component {
  constructor(props1) {
    const { props, search, male, female } = props1;
    super(props1);
    this.state = {
      contacts: props,
      search: search,
      male: male,
      female: female,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(value) {
    console.log(value);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('male', props.male);
    console.log('female', props.female);
    return {
      contacts: props.props.filter((e) =>
        (e.firstName + e.lastName).toLowerCase().includes(props.search.toLowerCase()),
      ),
      search: props.search,
      male: props.male,
      female: props.female,
    };
  }

  render() {
    console.log('CONTACTS STATE', this.state.search);

    return (
      <div className={styles.contacts}>
        {this.state.contacts.map((e, i) => (
          <Contact key={e.firstName} props={e} />
        ))}
      </div>
    );
  }
}

export default Contacts;
