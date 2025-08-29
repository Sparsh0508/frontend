import React, { useCallback, useState } from 'react';
import { Button } from "../components/ui/button";
import { Card } from '../components/ui/card';
// import { Camera, Upload, X } from 'lucide-react';
import { Camera, Upload, X } from "lucide-react-native";


interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isLoading?: boolean;
}

 const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, isLoading }) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      onImageSelect(file);
    }
  };

  const clearImage = () => {
    setPreview(null);
  };

  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-card">
      <div className="space-y-4">
        <div className="text-center">
          <Camera className="mx-auto h-12 w-12 text-primary mb-2" />
          <h3 className="text-lg font-semibold mb-1">Upload Crop Image</h3>
          <p className="text-muted-foreground text-sm">
            Take a photo or upload an image of your crop for disease analysis
          </p>
        </div>

        {preview ? (
          <div className="relative">
            <img 
              src={preview} 
              alt="Crop preview" 
              className="w-full h-48 object-cover rounded-lg"
            />
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2"
              onClick={clearImage}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ) : (
          <div
            className={`
              relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
              ${dragActive 
                ? 'border-primary bg-primary/10' 
                : 'border-border hover:border-primary/50'
              }
            `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              disabled={isLoading}
            />
            <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground">
              Drag and drop an image here, or click to select
            </p>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="upload" className="flex-1" disabled={isLoading}>
            <Camera className="h-4 w-4 mr-2" />
            Take Photo
          </Button>
          <Button variant="upload" className="flex-1" disabled={isLoading}>
            <Upload className="h-4 w-4 mr-2" />
            From Gallery
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ImageUpload;