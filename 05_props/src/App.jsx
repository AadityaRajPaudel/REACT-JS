import React from 'react';
import './App.css'

function App() {

  return (
    <div className='card-container'>

      {/* 
      If there were hard coded contacts, they would be individually placed in individual 'card' divs with hard coded info
      Like, below in img, there would be src='location to card 1's image', and so on (like we did in youtube clone coding)
      */}
      <div className='card'>
        <img/>
        <p></p>
        <p></p>
      </div>

      {/* But if we use component, and mention <Card/>, this would create multiple components by reusing code but this would be like a function that accepts parameters but always return same result no matter the parameters
      So we pass props to the component call to make sure calling a component with different props will lead to return of different elements from that called component.
      Props are custom values so they can be named any.
      */}
      <Card 
        img = "source"
        name = "name"
        contact = "123"
        email = "email.com@"
      />

      {/* The above props are used in <Card/> given that there is a .js file containing Card component that has a blueprint of a card, uses these datas and return unique card based on it */}
    </div>
  )
}

export default App
