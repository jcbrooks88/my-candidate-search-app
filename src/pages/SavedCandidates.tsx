import React from 'react';
import Candidate from '../interfaces/Candidate.interface';

interface SavedCandidatesProps {
  candidate?: Candidate; // Candidate can now be undefined
  fetchCandidate: () => void;
}

const SavedCandidates: React.FC<SavedCandidatesProps> = ({ candidate, fetchCandidate }) => {
  if (!candidate) {
    return <p>No saved candidate available.</p>;
  }

  const {
    name,
    username,
    location,
    email,
    skills = [],
  } = candidate;

  return (
    <div>
      <h2>Saved Candidate</h2>
      <div>
        <h3>
          {name?.title} {name?.first} {name?.last}
        </h3>
        <p>Username: {username || 'Unknown'}</p>
        <p>
          Location:{' '}
          {location
            ? `${location.city}, ${location.state}`
            : 'Unknown'}
        </p>
        <p>Email: {email || 'Unknown'}</p>
        <p>Skills: {skills.length > 0 ? skills.join(', ') : 'No skills listed'}</p>
        <button onClick={fetchCandidate}>Fetch New Candidate</button>
      </div>
    </div>
  );
};

export default SavedCandidates;

