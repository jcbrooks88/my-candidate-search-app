// TODO: Add necessary code to display the navigation bar and link between the pages
  //const Nav = () => {
  //return (
  // <div>Nav</div>
  // )
  // };
  // export default Nav;

  import { Link } from "react-router-dom";

  const Nav = () => {
    return (
      <nav aria-label="Main navigation" className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Candidate Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/SavedCandidates" className="nav-link">
              Saved Candidates
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Nav;
  
  
