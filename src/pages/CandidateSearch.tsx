// CandidateSearch.tsx
import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';
import SavedCandidates from './SavedCandidates';
import styles from '../styles/style';

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await searchGithub();
      setCandidate(data);
    } catch (err) {
      setError('Failed to fetch candidate data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkipCandidate = () => {
    fetchCandidate();
  };

  return (
    <div style={styles.container}>
      <h1>Candidate Search</h1>
      {isLoading && <p>Loading candidate data...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {candidate && (
        <div style={styles.card}>
          <img src={candidate.avatar_url} alt={`${candidate.name}'s avatar`} style={styles.avatar} />
          <h2>{candidate.name}</h2>
          <p>Username: {candidate.username}</p>
          <p>Location: {candidate.location || 'Not available'}</p>
          <p>Email: {candidate.email || 'Not available'}</p>
          <p>Company: {candidate.company || 'Not available'}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
            View GitHub Profile
          </a>
          <div style={styles.actions}>
            <SavedCandidates candidate={candidate} fetchCandidate={fetchCandidate} />
            <button onClick={handleSkipCandidate} style={styles.button}>
              - Skip Candidate
            </button>
          </div>
        </div>
      )}
      {!candidate && !isLoading && !error && <p>No more candidates available for review. Try refreshing the page.</p>
      }
    </div>
  );
};

export default CandidateSearch;

//const CandidateSearch = () => {
//return <h1>CandidateSearch</h1>;
//};
//export default CandidateSearch;