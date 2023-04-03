import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', setStatus('online'));
    window.addEventListener('offline', setStatus('offline'));

    return () => {
      window.removeEventListener('online', setStatus('online'));
      window.removeEventListener('offline', setStatus('offline'));
    };
  }, []);
   if (status === 'offline') {
      return <div className="status status_offline">{status}</div>;
    } else {
      return <div className="status">{status}</div>;
    }
  }
  


export default ConnectionStatus;
