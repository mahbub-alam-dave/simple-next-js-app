import Loader from '@/app/generalComponents/Loader';
import React from 'react';

const loading = () => {
    return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader size={60} color="text-red-600" />
    </div>
    );
};

export default loading;