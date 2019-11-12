import React from 'react';
import './styles/App.scss';
import { foodList } from './foodList/foodList';
import Home from './components/Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foodList,
      isOpen: false
    }
  }

  showNav = () => {
    this.setState({
      isOpen: true
    })
  }

  hideNav = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { foodList, isOpen } = this.state;
    return (
      <Home
      foodList={foodList}
      isOpen={isOpen}
      hideNav={this.hideNav}
      showNav={this.showNav}
      />
    );
  }
}

export default App;
