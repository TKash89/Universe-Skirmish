import React from "react"

const Square = (props) => {

  const handleClick =() => {
    // alert(props.index)
    props.handleGameplay(props.index)
  }
  return (
    <>
      <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}
export default Square

