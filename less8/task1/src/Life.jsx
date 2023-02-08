import React, { Component} from "react";


class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');

  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');

  } // создание 


  shouldComponentUpdate(nextProps, nextState) {
    // this.props, this,state;
    console.log(nextProps, nextState);
     console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
return nextProps.number % 2 
  } // в зависимости от того как изм пропсы или стейт, принимает решение запускать рендер или нет (сущ для оптимизации)
  // выполняется до рендера


  componentDidUpdate() {
  
console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  } // выполняется после рендера, с уже обновленными значемниями \


  componentWillUnmount() {
     console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  } // очистка, компонента уходит со стр





render() {

   console.log('return React element to build DOM');
  return (
   <>
    <div className="number">{this.props.number}</div>
    </>)
}
}

export default Life;