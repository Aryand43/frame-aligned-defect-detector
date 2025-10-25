import React, { useState } from 'react';
import UploadForm from './UploadForm';
import OutputDisplay from './OutputDisplay';
import './App.css';

function App() {
  const [outputParams, setOutputParams] = useState({
    t: null,
    x: null,
    y: null,
    z: null,
    a: null,
    c: null,
    meltpoolSize: null,
    meltpoolTemp: null,
    LaserPower: null,
    stirrerValue_1: null,
    revolutionSpeed_1: null,
    powderGasFlow_1: null,
    stirrerValue_2: null,
    revolutionSpeed_2: null,
    powderGasFlow_2: null,
    flowWatch: null,
    meltpoolThreshold: null,
    protectionGlasTemperature: null,
  });

  const handleFileUpload = (file: File) => {
    console.log('File uploaded in App.tsx:', file.name);
    // In a real application, you would send this file to a backend
    // and then update the outputParams state with the response.
    // For now, we'll just simulate an update.
    setOutputParams({
      t: "10",
      x: "20",
      y: "30",
      z: "40",
      a: "50",
      c: "60",
      meltpoolSize: "100",
      meltpoolTemp: "1500",
      LaserPower: "200",
      stirrerValue_1: "1",
      revolutionSpeed_1: "1000",
      powderGasFlow_1: "5",
      stirrerValue_2: "2",
      revolutionSpeed_2: "1200",
      powderGasFlow_2: "6",
      flowWatch: "true",
      meltpoolThreshold: "0.5",
      protectionGlasTemperature: "25",
    });
  };

  return (
    <div className="App">
      <h1>Frame Aligned Defect Detector Interface</h1>
      <UploadForm onFileUpload={handleFileUpload} />
      <OutputDisplay {...outputParams} />
    </div>
  );
}

export default App;
