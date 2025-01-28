import Nav from './components/Nav';
import { Outlet } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Nav />
      <div className="app-header">
        <h1>Welcome to My Candidate Search App</h1>
        <p>
          This is an example of how to build a beautiful app using React.
          Give a try to the search functionality and save your favorite candidates.
        </p>
      </div>

      <main className="app-main">
        <Outlet /> {/* This renders the nested routes */}
      </main>
    </>
  );
}

export default App;


