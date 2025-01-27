import Candidate from '../interfaces/Candidate.interface';


interface SavedCandidatesProps {
  candidate: Candidate;
  fetchCandidate: () => Promise<void>;
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ candidate, fetchCandidate }) => {
  // Example function to trigger fetchCandidate
  const handleFetchSavedCandidate = () => {
    fetchCandidate(); // Call the fetchCandidate function
  };

  return (
    <div>
      <h3>Saved Candidate</h3>
      <p>Name: {candidate.name?.first} {candidate.name?.last}</p>
      {/* Other details */}
      
      {/* Button or action to fetch new candidate */}
      <button onClick={handleFetchSavedCandidate}>Fetch Saved Candidate</button>
    </div>
  );
};

export default SavedCandidates;



