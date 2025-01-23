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
      <nav style={styles.navbar}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="/" style={styles.link}>Candidate Search</Link>
          </li>
          <li style={styles.navItem}>
            <Link to="/SavedCandidates" style={styles.link}>Saved Candidates</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "center",
      padding: "10px",
      backgroundColor: "#f4f4f4",
      borderBottom: "1px solid #ccc",
    },
    navList: {
      listStyleType: "none",
      display: "flex",
      gap: "20px",
      margin: 0,
      padding: 0,
    },
    navItem: {
      fontSize: "18px",
    },
    link: {
      textDecoration: "none",
      color: "#007bff",
    },
  };
  
  export default Nav;
  
