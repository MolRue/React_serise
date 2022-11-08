import { Route, Routes, Profile } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
  );
}

export default App;
