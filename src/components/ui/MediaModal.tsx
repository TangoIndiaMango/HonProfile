'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export type MediaItem = {
  id?: number;
  type: 'image' | 'video';
  url: string;
  title?: string;
};

export function MediaModal({
  open,
  media,
  onClose,
}: {
  open: boolean;
  media: MediaItem | null;
  onClose: () => void;
}) {
  if (!open || !media) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        <div className="bg-white rounded-lg overflow-hidden">
          {media.type === 'video' ? (
            <video src={media.url} controls autoPlay className="w-full h-auto max-h-[80vh]">
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={media.url}
              alt={media.title || 'media'}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          )}

          {(media.title ?? '').length > 0 && (
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{media.title}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}


