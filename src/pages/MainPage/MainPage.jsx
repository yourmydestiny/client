import React from 'react';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate(`/selectpage`);
        }}
      >
        next
      </button>
    </div>
  );
};

export default MainPage;
