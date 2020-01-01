import React from 'react'

class Cell extends React.component {
  constructor(props){
    super(props)
    this.state={color:props.value}
  }
}

ColorChange=()=>{
  this.setState({
    color:'#333'
  })
}

render(){
  return (
    <div className="cell" style={{backgroundColor:this.state.color}} omClick={ColorChange}>
    </div>
  )
}
