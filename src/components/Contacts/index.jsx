import React from 'react';
import Contact from '../Contact';
import styles from './Contacts.module.css';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    const { contacts } = props;
    this.state = {
      contacts: contacts,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.male && props.female) {
      return {
        contacts: props.contacts.filter((e) =>
          (e.firstName + e.lastName + e.phone).toLowerCase().includes(props.search.toLowerCase()),
        ),
      };
    } else if (props.male) {
      return {
        contacts: props.contacts
          .filter((e) =>
            (e.firstName + e.lastName + e.phone).toLowerCase().includes(props.search.toLowerCase()),
          )
          .filter((e) => e.gender === 'male'),
      };
    } else if (props.female) {
      return {
        contacts: props.contacts
          .filter((e) =>
            (e.firstName + e.lastName + e.phone).toLowerCase().includes(props.search.toLowerCase()),
          )
          .filter((e) => e.gender === 'female'),
      };
    } else {
      return {
        contacts: props.contacts
          .filter((e) =>
            (e.firstName + e.lastName + e.phone).toLowerCase().includes(props.search.toLowerCase()),
          )
          .filter((e) => !e.gender),
      };
    }
  }

  render() {
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
