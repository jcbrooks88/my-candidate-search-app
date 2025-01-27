// styles.ts
const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    card: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px auto',
      maxWidth: '400px',
      textAlign: 'center',
    },
    avatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '16px',
    },
    link: {
      textDecoration: 'none',
      color: '#007bff',
    },
    actions: {
      marginTop: '16px',
    },
    
    button: {
      margin: '5px',
      padding: '10px 15px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#0056b3',
      },
    },
    
    error: {
      color: 'red',
    },

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
  };
  
  export default styles;
  