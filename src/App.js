import './App.css';
import React from 'react';
import Contacts from './components/Contacts';
import Search from './components/Search';

const contacts = [
  {
    firstName: 'Барней',
    lastName: 'Стинсовський',
    phone: '+380956319521',
    gender: 'male',
  },
  {
    firstName: 'Робін',
    lastName: 'Щербатська',
    phone: '+380931460123',
    gender: 'female',
  },
  {
    firstName: 'Анонімний',
    lastName: 'Анонімус',
    phone: '+380666666666',
  },
  {
    firstName: 'Лілія',
    lastName: 'Олдровна',
    phone: '+380504691254',
    gender: 'female',
  },
  {
    firstName: 'Маршен',
    lastName: 'Еріксонян',
    phone: '+380739432123',
    gender: 'male',
  },
  {
    firstName: 'Теодор',
    lastName: 'Мотсбес',
    phone: '+380956319521',
    gender: 'male',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      checkedOne: true,
      checkedTwo: true,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  handleSearch(value) {
    this.setState({
      searchValue: value,
    });
  }

  handleChangeOne() {
    this.setState({
      checkedOne: !this.state.checkedOne,
    });
  }
  handleChangeTwo() {
    this.setState({
      checkedTwo: !this.state.checkedTwo,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="header">
          <p className="logo">Contacts</p>
          <div className="filters">
            <Search handleSearch={this.handleSearch} />
            <div className="checkboxes">
              <label>
                <input
                  type="checkbox"
                  checked={this.state.checkedOne}
                  onChange={this.handleChangeOne}
                />
                male
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={this.state.checkedTwo}
                  onChange={this.handleChangeTwo}
                />
                female
              </label>
            </div>
          </div>
        </div>
        <div className="contacts">
          <Contacts
            contacts={contacts}
            search={this.state.searchValue}
            male={this.state.checkedOne}
            female={this.state.checkedTwo}
          />
        </div>
      </div>
    );
  }
}

export default App;
