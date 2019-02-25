import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import Layout from "../components/layout"
import SEO from "../components/seo"

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () =>{
    this.setState({counter: this.state.counter + 1});
    console.log('counter after increment', this.state.counter)
  }

  decrementCounter = () =>{
    this.setState({counter: this.state.counter - 1});
    console.log('counter after decrement', this.state.counter)
  }

  render () {
    return (
      <Layout>
        <SEO title = "counter"/>
        <h1>COUNTER:</h1>
        <div>{this.state.counter}</div> 
        <button onClick={()=>{this.incrementCounter()}}>Increment</button>
        <button onClick={()=>{this.decrementCounter()}}>Decrement</button> 
      </Layout>
    )
  }
}


export default Counter
