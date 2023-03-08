// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function callAll(...fns) {
  return (...args) => {
    fns.forEach(fn => {
      fn && fn(...args)
    })
  }
}


function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)


  //Prop Getter FUNCTION Here!!!,
  //Consumer can use their own logic while used capabiltieis from our prop getter logic.
  function getTogglerProps({onClick, ...props} = {}) {
    return {
      'aria-pressed': on,
      onClick: callAll(onClick, toggle),
      ...props,
    }
  }

  return {
    on, 
    toggle, 
    // togglerProps: {
    //   'aria-pressed': on,
    //   onClick: toggle, 
    // },
    getTogglerProps,
  }

  //you set togglerProps, to the attributes and define them 
  //than use togglerProps in the declaration of the component in App return statement
}

function App() {
  const {on, getTogglerProps} = useToggle()
  return (
    <div>
      <Switch {...getTogglerProps({on})} />
      <hr />
      <button
        {...getTogglerProps({
          'aria-label': "custom-button",
          onClick: () => console.info('onButtonClick'),
        })}
      >
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
