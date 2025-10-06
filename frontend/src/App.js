import React, { useEffect, useState } from 'react';

function App() {
  const [service1Message, setService1Message] = useState('');
  const [service2Message, setService2Message] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(setService1Message)
      .catch(() => setService1Message("Service1 unreachable"));

    fetch("http://localhost:5001/")
      .then(res => res.text())
      .then(setService2Message)
      .catch(() => setService2Message("Service2 unreachable"));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>AWS Minimum Project 🌐</h1>
      <h3>Backend service 1: {service1Message}</h3>
      <h3>Backend service 2: {service2Message}</h3>
    </div>
  );
}

export default App;

