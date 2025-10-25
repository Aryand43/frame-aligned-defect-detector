import React, { useState } from 'react';

interface UploadFormProps {
  onFileUpload: (file: File) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
      console.log('Uploading file:', selectedFile.name);
      // Here you would typically send the file to a backend server.
      // For now, we'll just log the file name.
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <div>
      <h2>Upload Temperature Matrix (.dat)</h2>
      <input type="file" accept=".dat" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default UploadForm;
