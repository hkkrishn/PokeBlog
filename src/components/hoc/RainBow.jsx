import React from 'react'

const RainBow = (WrappedComponent)  =>{
  const colours = ['red','blue','yellow','orange','green','indigo','violet']
  const randomColour = colours[Math.floor((Math.random() *5))]
  const className = `${randomColour}-text`

  return (props) => {
    return(
      <div className = {className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}
  
export default RainBow
