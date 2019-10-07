import React from 'react';
import {connect} from "react-redux";
import {addGun,removeGun,addGunAsync} from "./index.redux";
import './App.css';
const  mapStateToProps = (state, ownProps) => {
  return {
    num: state.counter
  }
}
const actionCreators = {addGun,removeGun,addGunAsync};
class App extends React.Component{
  render(){
    const addGun = this.props.addGun;
    const removeGun = this.props.removeGun;
    const addGunAsync = this.props.addGunAsync;
    const num = this.props.num;
    return(
      <div>
        <p>现在有{num}</p>
        <button onClick={()=>addGun()}>添加武器</button>
        <button onClick={()=>removeGun()}>删除武器</button>
        <button onClick={()=>addGunAsync()}>晚点</button>
      </div>
    )
  }
}
App = connect(mapStateToProps,actionCreators)(App);

export default App;
