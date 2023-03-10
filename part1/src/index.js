import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({course}) => <h1>{course}</h1>
const Content = (props) => {
  return <p>
    {props.part1} {props.exercises1}<br/>
    {props.part2} {props.exercises2}<br/>
    {props.part3} {props.exercises3}
  </p>
}
const Total = (props) => {
  return <p>
    {props.part4} {props.allParts}
  </p>
}
const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const part4 = "Number of exercises"
  const allParts = exercises1 + exercises2 + exercises3
  const titulo = <h1>'Hola mundo'</h1>
const App = () => {
  return (
    <div>
      {titulo}
      <Header course={course}/>
      <Content 
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2}
        part3={part3} exercises3={exercises3}
      />
      <Total
        part4={part4} allParts={allParts}
      />
      
    </div>
  )
}
  


ReactDOM.render(<App 

  />, document.getElementById('root'))