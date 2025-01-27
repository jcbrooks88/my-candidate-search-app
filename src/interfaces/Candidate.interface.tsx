// TODO: Create an interface for the Candidate objects returned by the API
import Name from './Name.interface';
import Location from './Location.interface';
// Updated interface to match the structure of the API response

interface Candidate {
  id: number;
  name: Name; // Name is now an object with title, first, and last
  username: string;
  location: Location; // Location is now an object with city, state, and country
  email: string;
  skills: string[];
}

export default Candidate; 
