// TODO: Create an interface for the Candidate objects returned by the API

interface Candidate {
  id: number;
  name: string;
  username: string;
  location: string;
  avatar_url: string;
  email: string;
  skills: string[];
}

export default Candidate;