function Element() {
  return (
    <div>
      <p>This is a paragraph</p>
    </div>
  )
}

// document.querySelector('#root').append(<Element/>); appends object
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(<Element/>);

// practice challenge- more managable component distribution
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />

      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2021 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <div>
      // this is the child component of parent component Page
      <Header /> 
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))