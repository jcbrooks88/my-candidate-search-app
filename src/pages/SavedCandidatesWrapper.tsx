import React from 'react';
import SavedCandidates from './SavedCandidates';
import Candidate from '../interfaces/Candidate.interface';


const SavedCandidatesWrapper: React.FC = () => {
  const candidate: Candidate = {
    id: 1,
    name: {
      title: 'Mr',
      first: 'John',
      last: 'Doe',
    },
    skills: ['React', 'TypeScript'],
    username: 'johndoe',
    location: {
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
    email: 'johndoe@example.com',
  };

  const fetchCandidate = () => {
    console.log('Fetching candidates...');
    // Simulate an async call if needed
  };

  return <SavedCandidates candidate={candidate} fetchCandidate={fetchCandidate} />;
};

export default SavedCandidatesWrapper;



