import { X } from 'lucide-react';
import React from 'react';
interface VideoModalProps {
  selectedVideo: string | undefined;
  setSelectedVideo: (video: string | undefined) => void;
}
export const VideoModal = ({
  selectedVideo,
  setSelectedVideo,
}: VideoModalProps) => {
  // Don't render if no video is selected
  if (!selectedVideo) return null;

  const handleClose = () => {
    setSelectedVideo(undefined);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // Convert Google Drive link to embeddable format
  const getEmbeddableUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      // Extract file ID from Google Drive URL
      const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch) {
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
    }
    return url;
  };

  const embeddableUrl = getEmbeddableUrl(selectedVideo);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl mx-4">
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close video"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <iframe
            src={embeddableUrl}
            title="Latest media video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
