import React,{ Component } from 'react'
import './component/assissment.css'
import ClassCompo from './component/ClassCompo'
import Funcompo from './component/Funcompo'
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      Funf:false,
      ClassC:false
    }
  }
  func1=()=>{
    this.setState({
      Funf:!this.state.Funf
    })
  }
  class1=()=>{
    this.setState({
      ClassC:!this.state.ClassC
    })
  }
  render(){
    return(
      <div className='component1'>
        <h1 className='a'> Styling Using Function And Class Component</h1>
        <button className='btn1' onClick={this.func1}>Using Function Component</button>
        <button className='btn2' onClick={this.class1}>Using Class Component</button>
        {this.state.Funf && <Funcompo />}
        {this.state.ClassC && <ClassCompo />}
      </div>
    )
  }
}
export default App