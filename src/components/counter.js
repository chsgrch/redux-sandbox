import React from 'react'
import { connect } from 'react-redux'

const Counter = ({ counter, setInc, setDec, setRnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button
        className="btn btn-primary btn-lg"
        onClick={setDec}
      >DEC</button>
      <button
        className="btn btn-primary btn-lg"
        onClick={setInc}
      >INC</button>
      <button
        className="btn btn-primary btn-lg"
        onClick={setRnd}
      >RND INC</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

export default connect(mapStateToProps)(Counter);