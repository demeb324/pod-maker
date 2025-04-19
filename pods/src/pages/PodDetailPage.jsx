import React from 'react';
import { useParams } from 'react-router-dom';

const PodDetailPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Pod Details: {id}</h1>
      {/* Detailed information about the pod will go here */}
    </div>
  );
};

export default PodDetailPage;