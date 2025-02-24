/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useState } from "react";
import addImage from "../../assets/add-image.svg";
import toast from "react-hot-toast";

interface PhotoUploadProps {
  image: string;
  setImage: (image: string) => void;
}
const PhotoUpload: React.FC<PhotoUploadProps> = ({ image, setImage }) => {
  const [isDragging, setIsDragging] = useState(false);

  const uploadPreset = "naeemmiah";
  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    try {
      const response = await fetch(
        // `https://api.cloudinary.com/v1_1/dzpo3buxe/image/upload`
        `https://api.cloudinary.com/v1_1/db9egbkam/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setImage(data.secure_url);
      console.log("Image URL:", data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      await handleFileUpload(file);
    } else {
      toast.error(
        "Maximum file size 1MB. Allowed formats: JPG, JPEG, PNG, WEBP."
      );
    }
  };

  const handleRemoveImage = () => {
    setImage("");
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      console.log({ file });
      await handleFileUpload(file);
    } else {
      toast.error("File size must be less than 5MB");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex items-center space-x-6">
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`w-72 h-20 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center p-4 transition-all duration-200 ${
          isDragging
            ? "bg-gray-200 border-blue-400 text-blue-600"
            : "bg-white border-blue-300"
        }`}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="profile-photo-upload"
        />
        <label htmlFor="profile-photo-upload" className="cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={addImage}
              alt="Profile Preview"
              className="w-5 h-5 object-cover"
            />
            <div className="space-y-1">
              {isDragging ? (
                <p className="text-sm font-poppins font-medium">
                  Drop image here
                </p>
              ) : (
                <>
                  <p className="text-xs text-gray-600 font-poppins font-medium text-start">
                    Drop your file here, or{" "}
                    <span className="text-blue-500 underline">Browse</span>
                  </p>
                  <p className="text-xs text-gray-400 text-start">
                    Maximum file size 1MB. Allowed formats: JPG, JPEG, PNG,
                    WEBP.
                  </p>
                </>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Image Preview */}
      {image && (
        <div className="relative w-20 h-20">
          <img
            src={image}
            alt="Profile Preview"
            className="w-full h-full rounded-circle object-cover"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute -top-2 -right-2 bg-white border border-gray-300 rounded-circle w-5 h-5 flex items-center justify-center text-gray-500 hover:bg-gray-100"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
