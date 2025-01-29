import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API'; // Fetch candidates
import Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    fetchCandidate();
  }, []);

  // Fetch a new candidate when called
  const fetchCandidate = async () => {
    setIsLoading(true);
    setError(null);
    setSaved(false); // Reset save state when new candidate is fetched
    
    try {
      const data = await searchGithub();
      console.log('Fetched Data:', data); // Debugging log
      if (!data.length) throw new Error('No candidates found');
      setCandidate(data[0]);
    } catch (err) {
      console.error('Error fetching candidate:', err);
      setError('Failed to fetch candidate. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Save candidate to local storage
  const handleSaveCandidate = () => {
    if (!candidate) return;

    try {
      const storedCandidates: Candidate[] = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      storedCandidates.push(candidate);
      localStorage.setItem('savedCandidates', JSON.stringify(storedCandidates));
      setSaved(true); // Set saved state to true when candidate is saved
    } catch (error) {
      console.error('Error saving candidate:', error);
      setError('Failed to save candidate. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="app-buttons">Candidate Search</h2>
      {isLoading && <p>Loading candidate data...</p>}
      {error && <p className="error">{error}</p>}
      {candidate ? (
        <div className="card">
          <h3>
            {candidate.name.title} {candidate.name.first} {candidate.name.last}
          </h3>
          <p><strong>Username:</strong> {candidate.username}</p>
          <p><strong>Location:</strong> {candidate.location.city}, {candidate.location.state}, {candidate.location.country}</p>
          <p><strong>Email:</strong> {candidate.email}</p>
          <p><strong>Skills:</strong> {candidate.skills ? candidate.skills.join(', ') : 'No skills listed'}</p>

          <div className="actions">
            <button 
              onClick={handleSaveCandidate} 
              className="button save-btn" 
              disabled={saved}
            >
              {saved ? 'Candidate Saved' : '⭐ Save Candidate'}
            </button>
            <button onClick={fetchCandidate} className="button skip-btn">⏭ Skip Candidate</button>
          </div>
        </div>
      ) : (
        <p>No more candidates available for review.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
