import React, { Component } from 'react'

export class ClassCompo extends Component {
  render() {
    return (
      <div className='classparam'>
     <h2> This is Created Using Class Component</h2>
     <p> This is Done Using External Css</p>
     <p style={{color:"#0721EA"}}> This is Done Using Inline css</p>
      </div>
    )
  }
}

export default ClassCompo