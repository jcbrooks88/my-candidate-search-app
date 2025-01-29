import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    // Retrieve saved candidates from localStorage
    const storedCandidates = localStorage.getItem('savedCandidates');
    if (storedCandidates) {
      try {
        setSavedCandidates(JSON.parse(storedCandidates) as Candidate[]);
      } catch (error) {
        console.error("Error parsing saved candidates:", error);
      }
    }
  }, []);

  const handleRemoveCandidate = (id: string) => {
    // Filter out the candidate by id
    const updatedCandidates = savedCandidates.filter(candidate => candidate.id !== id);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates)); // Update localStorage
  };

  return (
    <main>
      <h2 className="app-buttons">Saved Candidates</h2>
      
      {savedCandidates.length === 0 ? (
        <p>No saved candidates.</p>
      ) : (
        <div className="saved-candidates-list">
          {savedCandidates.map((candidate) => (
            <div key={candidate.id} className="card">
              <div className="card-info">
                <h3 className="candidate-name">
                  {candidate.name.title} {candidate.name.first} {candidate.name.last}
                </h3>
                <p><strong>Location:</strong> {candidate.location.city}, {candidate.location.state}, {candidate.location.country}</p>
                <p><strong>Email:</strong> <a href={`mailto:${candidate.email}`}>{candidate.email}</a></p>
                <p><strong>Skills:</strong> {Array.isArray(candidate.skills) && candidate.skills.length ? candidate.skills.join(', ') : 'No skills listed'}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemoveCandidate(candidate.id)}>🗑 Remove</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default SavedCandidates;
