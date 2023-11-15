function NavBar() {
  return (
    <div>
      <h1>REACT-JS</h1>
      <p>To understand more about the basics</p>
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

ReactDOM.render(
  <NavBar/>,
  document.querySelector('.container')
)
/*
  alternate way

  const navbar = (
    <nav>
      <h1>Bob's navbar</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );

  ReactDOM.render(navbar, document.querySelector('.container'))
*/