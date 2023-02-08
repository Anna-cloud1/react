import React, { Component} from "react";


class Life extends Component {
  constructor(props) {
    super(props);
    console.log( '=> constructor')

  }

  componentDidMount() {
    console.log('=> componentDidMount');

  } // создание 


  componentWillUnmount() {
     console.log('=> componentWillUnmount');
  } // очистка, компонента уходит со стр


  shouldComponentUpdate(nextProps, nextState) {
    // this.props, this,state;
    console.log(nextProps, nextState);
     console.log('=> shouldComponentUpdate');
return nextProps.number % 2 
  } // в зависимости от того как изм пропсы или стейт, принимает решение запускать рендер или нет (сущ для оптимизации)
  // выполняется до рендера


  componentDidUpdate(prevProps, prevState) {
    this.props
    console.log(prevProps);
console.log('=> componentDidUpdate');
  } // выполняется после рендера, с уже обновленными значемниями 
render() {
   console.log( '=> render')
  return (
   <>
    <div className="number">{this.props.number}</div>
    </>)
}
}

export default Life;