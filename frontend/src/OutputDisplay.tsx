import React from 'react';

interface OutputDisplayProps {
  t: string | null;
  x: string | null;
  y: string | null;
  z: string | null;
  a: string | null;
  c: string | null;
  meltpoolSize: string | null;
  meltpoolTemp: string | null;
  LaserPower: string | null;
  stirrerValue_1: string | null;
  revolutionSpeed_1: string | null;
  powderGasFlow_1: string | null;
  stirrerValue_2: string | null;
  revolutionSpeed_2: string | null;
  powderGasFlow_2: string | null;
  flowWatch: string | null;
  meltpoolThreshold: string | null;
  protectionGlasTemperature: string | null;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({
  t, x, y, z, a, c, meltpoolSize, meltpoolTemp, LaserPower,
  stirrerValue_1, revolutionSpeed_1, powderGasFlow_1,
  stirrerValue_2, revolutionSpeed_2, powderGasFlow_2,
  flowWatch, meltpoolThreshold, protectionGlasTemperature
}) => {
  return (
    <div>
      <h2>Output Parameters</h2>
      <p><strong>t:</strong> {t === null ? 'N/A' : t}</p>
      <p><strong>x:</strong> {x === null ? 'N/A' : x}</p>
      <p><strong>y:</strong> {y === null ? 'N/A' : y}</p>
      <p><strong>z:</strong> {z === null ? 'N/A' : z}</p>
      <p><strong>a:</strong> {a === null ? 'N/A' : a}</p>
      <p><strong>c:</strong> {c === null ? 'N/A' : c}</p>
      <p><strong>Meltpool Size:</strong> {meltpoolSize === null ? 'N/A' : meltpoolSize}</p>
      <p><strong>Meltpool Temperature:</strong> {meltpoolTemp === null ? 'N/A' : meltpoolTemp}</p>
      <p><strong>Laser Power:</strong> {LaserPower === null ? 'N/A' : LaserPower}</p>
      <p><strong>Stirrer Value 1:</strong> {stirrerValue_1 === null ? 'N/A' : stirrerValue_1}</p>
      <p><strong>Revolution Speed 1:</strong> {revolutionSpeed_1 === null ? 'N/A' : revolutionSpeed_1}</p>
      <p><strong>Powder Gas Flow 1:</strong> {powderGasFlow_1 === null ? 'N/A' : powderGasFlow_1}</p>
      <p><strong>Stirrer Value 2:</strong> {stirrerValue_2 === null ? 'N/A' : stirrerValue_2}</p>
      <p><strong>Revolution Speed 2:</strong> {revolutionSpeed_2 === null ? 'N/A' : revolutionSpeed_2}</p>
      <p><strong>Powder Gas Flow 2:</strong> {powderGasFlow_2 === null ? 'N/A' : powderGasFlow_2}</p>
      <p><strong>Flow Watch:</strong> {flowWatch === null ? 'N/A' : flowWatch}</p>
      <p><strong>Meltpool Threshold:</strong> {meltpoolThreshold === null ? 'N/A' : meltpoolThreshold}</p>
      <p><strong>Protection Glass Temperature:</strong> {protectionGlasTemperature === null ? 'N/A' : protectionGlasTemperature}</p>
    </div>
  );
};

export default OutputDisplay;
