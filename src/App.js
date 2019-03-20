import React, { Component, Fragment} from "react";
import MainContainer from './MainContainer/MainContainer';

import "./App.css";
import LoadingScreen from './components/loadingScreen/LoadingScreen';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false
    }
  }
  componentDidMount(){
    console.log("update")
    setTimeout(() => {
      this.setState({
        isLoading : true
      });
    }, 1200);
  }

  render(){
    return(
      <Fragment>
        {this.state.isLoading === true ?  <MainContainer/> : <LoadingScreen/>}       
      </Fragment>
    )
  };
}

export default App;
