import React, { ChangeEvent, useRef } from 'react';

interface IImageInputProps {
  onChange: (image: string) => void;
}

const ImageInput: React.FC<IImageInputProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string); // Pass the base64 data URL to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{ display: "none" }} />
      <button onClick={() => fileInputRef.current?.click()}>Select Image</button>
    </div>
  );
};

export default ImageInput;
