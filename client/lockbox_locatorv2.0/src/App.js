import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyList from "./components/PropertyList";
import Form from "./components/Form";
import Navbar from "./components/Navbar";


function App() {
  useEffect(() => {
    axios.get('/api/examples')
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }, []);
  return (
    <Router>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<PropertyList />} />
          <Route path='/create' element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
