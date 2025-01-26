import React from 'react';
import SavedCandidates from './SavedCandidates';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidatesWrapper: React.FC = () => {
    const candidate: Candidate = {
        id: 1,
        name: 'John Doe',
        skills: ['React', 'TypeScript'],
        username: 'johndoe',
        location: 'New York, USA',
        avatar_url: 'https://example.com/avatar.jpg',
        email: 'johndoe@example.com',
      }; // Example data
  const fetchCandidate = () => {
    console.log('Fetching candidates...');
  };

  return <SavedCandidates candidate={candidate} fetchCandidate={fetchCandidate} />;
};

export default SavedCandidatesWrapper;
