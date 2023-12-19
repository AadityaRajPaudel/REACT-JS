/*
  import React from "react";
  import ReactDOM from "react-dom/client"
*/

/* 
ReactDOM.render(<p>This is a paragraph</p>, document.getElementById('root'))
or
ReactDOM.render(
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  , document.getElementById('root')
)

.render takes single parent element as first argument, which may contain multiple child elements
*/

// function Content() {
//   return (
//     <p>Content tag</p>
//   )
// }

// ReactDOM.render(
//   <Content/>,
//   document.getElementById('root')
// )

/*
  let element = document.createElement('p');
  element.textcontent = 'this is a paragraph';
  element.className = 'header';
  document.getElementById('root').append(element);
  console.log(element) --> just a regular html element

  let element = <h1 className='header'>This is a header</h1>
  console.log(element) --> a JS object

  ReactDOM.render(element, document.getElementById('root'))

*/

/*
  const page = 
    <div>
      <h1>This is Header</h1>
      <p>Paragraph </p>
    </div>
  console.log(page);
  ReactDOM.render(page, document.getElementById('root'))
*/

ReactDOM.render(<div>This is a div</div>, document.getElementById('root'));
