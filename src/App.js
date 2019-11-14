import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.scss';
import { foodList } from './foodList/foodList';
import Home from './components/Home';
import Products from './components/Products';
import Detail from './components/Detail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foodList,
      isOpen: false,
      isProducts: false
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


  showProduct = () => {
    this.setState({
      isProducts: true
    })
  }

  render() {
    const { foodList, isOpen, isProducts } = this.state;
    return (
      <Switch>
        <Route exact path="/" component={()=>{
          return (
            <Home
            foodList={foodList}
            isOpen={isOpen}
            hideNav={this.hideNav}
            showNav={this.showNav}
            showProduct={this.showProduct}
            isProducts={isProducts}
            />
          );
        }}
        />
        <Route path="/products" component={()=>{
          return(
            <Products
            foodList={ foodList }
            />
          );
        }
      }
      />
      <Route path="/:name" component={(routerProps)=>{
        return(
          <Detail
          routerProps={ routerProps }
          foodList={ foodList }
          />
        );
      }}
      />
      </Switch>
    );
  }
}

export default App;
