import react from 'react';
import './App.css';
import airbnblogo from '/airbnb1.png';
// notice the difference in importing two images from different locations
import reactlogo from './assets/react.svg';

function App() {
  let message1;
  let message = new Date();
  message = message.getHours();
  if (message > 12) {
    message1 = 'evening';
  } else message1 = 'morning';

  return (
    <>
      <nav className='navbar'>
        <img src={airbnblogo} className ='nav--airbnblogo' alt = 'Airbnb Logo'/>
        {/* Anything inside {..} is a JavaScript code */}
        {/*<img src={reactlogo} width='40px' alt = 'React Logo'/> --> comments in react*/}
      </nav>
      <div>Good {message1 + ' Hour:'+message}</div>
    </>
  );
}

export default App
