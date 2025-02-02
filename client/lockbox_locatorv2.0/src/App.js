import './App.css';

function App() {
  useEffect(() => {
    axios.get('/api/examples')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div className="App">
      <h1>Lockbox Locator v2.0</h1>
    </div>
  );
}

export default App;
