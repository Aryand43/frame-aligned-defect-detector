import { render, screen, fireEvent } from '@testing-library/react';
import UploadForm from './UploadForm';

describe('UploadForm', () => {
  const mockOnFileUpload = jest.fn();

  beforeEach(() => {
    mockOnFileUpload.mockClear();
  });

  it('renders the upload form with a file input and upload button', () => {
    render(<UploadForm onFileUpload={mockOnFileUpload} />);

    expect(screen.getByText(/upload temperature matrix \(\.dat\)/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /upload/i })).toBeInTheDocument();
  });

  it('disables the upload button initially', () => {
    render(<UploadForm onFileUpload={mockOnFileUpload} />);
    expect(screen.getByRole('button', { name: /upload/i })).toBeDisabled();
  });

  it('enables the upload button when a file is selected', () => {
    render(<UploadForm onFileUpload={mockOnFileUpload} />);
    const fileInput = screen.getByLabelText(/upload/i);
    const file = new File(['dummy content'], 'test.dat', { type: 'application/octet-stream' });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(screen.getByText(/selected file: test.dat/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /upload/i })).toBeEnabled();
  });

  it('calls onFileUpload with the selected file when the upload button is clicked', () => {
    render(<UploadForm onFileUpload={mockOnFileUpload} />);
    const fileInput = screen.getByLabelText(/upload/i);
    const file = new File(['dummy content'], 'test.dat', { type: 'application/octet-stream' });

    fireEvent.change(fileInput, { target: { files: [file] } });
    fireEvent.click(screen.getByRole('button', { name: /upload/i }));

    expect(mockOnFileUpload).toHaveBeenCalledTimes(1);
    expect(mockOnFileUpload).toHaveBeenCalledWith(file);
  });

  it('does not call onFileUpload if no file is selected and upload button is clicked', () => {
    render(<UploadForm onFileUpload={mockOnFileUpload} />);
    const uploadButton = screen.getByRole('button', { name: /upload/i });
    
    // Button should be disabled, but let's try clicking it anyway for robustness
    fireEvent.click(uploadButton);

    expect(mockOnFileUpload).not.toHaveBeenCalled();
  });
});

