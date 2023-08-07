import React from 'react';
import styles from './Contact.module.css';

class Contact extends React.Component {
  constructor({ props }) {
    super(props);
    this.firstName = props.firstName || 'N/A';
    this.lastName = props.lastName || 'N/A';
    this.phone = props.phone || 'N/A';
    this.gender = props.gender || 'N/A';
  }

  render() {
    return (
      <>
        <div className={styles.contactBlock}>
          <p className={styles.text}>
            name: {this.firstName} {this.lastName}
          </p>
          <p className={styles.text}>phone: {this.phone}</p>
          <p className={styles.text}>gender: {this.gender}</p>
          <div className={styles.events}>
            <button className="call">call</button>
            <button className="send">send message</button>
          </div>
        </div>
      </>
    );
  }
  // componentDidMount() {
  //   this.render();
  // }
}

export default Contact;
