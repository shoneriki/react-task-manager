

function App() {
  const name = 'Sho'
  // 2/27/2021-4:50..22.58
  // variable defined above return, and put into h2 dynamically in curly brackets
  const x = false

  return (
    // this is JSX, not html
    <div className='container'>
      <h1>Hello From React</h1>
      {/* can only have one parent element, h2 shouldn't go outside app */}
      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;
