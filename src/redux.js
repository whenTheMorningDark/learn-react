import {createStore} from "redux";

function counter(state = 0,action) {
  switch(action.type){
    case "加机枪":
      return state + 10;
    case "减机枪":
      return state - 10;
    default:
      return 10
  }
}
const store = createStore(counter);

const init = store.getState();
console.log(init);

function listener(){
  const current = store.getState();
  console.log(`现在${current}`);
}
store.subscribe(listener);
store.dispatch({type:"加机枪"});
store.dispatch({type:"减机枪"});
store.dispatch({type:"加机枪"});
store.dispatch({type:"加机枪"});

