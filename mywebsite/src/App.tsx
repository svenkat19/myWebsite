import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Loading from './components/Loading';

function App(): React.ReactElement {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Generate a random duration between 2000 ms (2 seconds) and 5000 ms (5 seconds)
    const randomDelay = Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

    const timer = setTimeout(() => {
      setLoading(false);
    }, randomDelay);

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='main'>
      {loading ? <Loading /> : (
        <>
          <Navbar />
          <Home />
        </>
      )}
     
    </div>
  );
}

export default App;
