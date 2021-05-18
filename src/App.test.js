import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
it('renders without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);
ReactDOM.unmountComponentAtNode(div);
});








// import React,{ Component } from "react";

// class BindingComponent extends Component {
  
//   constructor(){
//     super()
//     this.onClickMe = this.onClickMe.bind(this);
//   }
  
//   onClickMe(evt){
//     console.log(this)
//   }
//     render(){
//       return (
//       <div>
//         <button  onClick={this.onClickMe} >
//           click me </button>
//       </div>
//     )
//   }
// }

// export default BindingComponent
