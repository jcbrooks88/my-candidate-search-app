import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

export const searchGithub = async () => {
  const url = 'https://randomuser.me/api/?results=5';  // Fetch 5 random users

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.results;  // Access the 'results' array from the response
  } catch (err) {
    throw new Error('Failed to fetch candidate data. Please try again.');
  }
};


