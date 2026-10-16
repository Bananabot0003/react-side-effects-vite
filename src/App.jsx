
import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch a joke from the API
  function fetchJoke() {
    setLoading(true);

    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
.then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
        setJoke('Failed to load joke.');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  // Fetch a joke when the app first loads
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>

      <JokeDisplay joke={joke} loading={loading} />

      <FetchButton fetchJoke={fetchJoke} />
    </div>
  );
}

export default App;
