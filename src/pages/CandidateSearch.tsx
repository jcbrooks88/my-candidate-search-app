import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; // Fetch candidates
import Candidate from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidate();
  }, []);

  // Fetch a new candidate when called
  const fetchCandidate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchGithub();
      setCandidate(data[0]); // Assume data is an array, pick the first
    } catch (err) {
      setError('Failed to fetch candidate data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Skip the current candidate and fetch a new one
  const handleSkipCandidate = () => {
    fetchCandidate();
  };

  // Refresh candidates list
  const handleRefreshCandidates = () => {
    setCandidate(null); // Reset the current candidate
    fetchCandidate(); // Fetch a new one
  };

  return (
    <div className="container">
      <h1>Candidate Search</h1>
      {isLoading && <p>Loading candidate data...</p>}
      {error && <p className="error">{error}</p>}
      {candidate ? (
        <div className="card">
          <h2>
            {candidate.name?.title} {candidate.name?.first} {candidate.name?.last}
          </h2>
          <p>Username: {candidate.username || 'Not available'}</p>
          <p>
            Location:{' '}
            {candidate.location
              ? `${candidate.location.city}, ${candidate.location.state}`
              : 'Not available'}
          </p>
          <p>Email: {candidate.email || 'Not available'}</p>
          <div className="actions">
            <SavedCandidates candidate={candidate} fetchCandidate={fetchCandidate} />
            <button onClick={handleSkipCandidate} className="button">
              Skip Candidate
            </button>
          </div>
        </div>
      ) : (
        <p>No more candidates available for review.</p>
      )}

      {!candidate && !isLoading && !error && (
        <div>
          <p>No more candidates available for review. Try refreshing the page.</p>
          <button onClick={handleRefreshCandidates} className="button">
            Refresh Candidates
          </button>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch;





//const CandidateSearch = () => {
//return <h1>CandidateSearch</h1>;
//};
//export default CandidateSearch;