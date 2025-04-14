import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtocolPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Automatically redirect to overview page
  useEffect(() => {
    navigate('/docs/protocol/overview', { replace: true });
  }, [navigate]);
  
  // This component won't render as it immediately redirects
  return null;
};

export default ProtocolPage;