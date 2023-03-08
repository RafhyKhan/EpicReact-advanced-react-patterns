// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  //mapping child compoennts
  return React.Children.map(children, child => {
    if (allowedTypes.includes(child.type)) {
      const newChild = React.cloneElement(child, {on, toggle} )
      return newChild
    }
    return child
  })
}

// 🐨 Flesh out each of these components
const ToggleOn = ({on, children}) => (on ? children : null)
const ToggleOff = ({on, children}) => (on ? null : children)
const ToggleButton = ({on, toggle}) => <Switch on={on} onClick={toggle} />


//TO make only specific props can get its functionality
const allowedTypes = [ToggleOn, ToggleOff, ToggleButton]


//You can make any number of toggle button witht he same benefits, easily
function MyToggleButton({on, toggle}) {
  return on ? 'the button is on yo.' : 'the button is off soooo.'
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <span>Hello</span>
        <ToggleButton />
        <MyToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
