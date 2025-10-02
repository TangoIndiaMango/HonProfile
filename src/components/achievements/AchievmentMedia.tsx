'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { VideoModal } from '../VideoModal';
import { useState } from 'react';
import Autoplay from "embla-carousel-autoplay"

interface AchievmentMediaProps {
  mediaItems: any[];
}

export function AchievmentMedia({ mediaItems }: AchievmentMediaProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>(
    undefined
  );
  return (
    <div className="w-full rounded-none">
      <Carousel   plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]} className="w-full rounded-none">
        <CarouselContent>
          {mediaItems?.map((media, index) => (
            <CarouselItem
              key={`media${media.id}-${index}`}
              className="relative h-[500px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={media.url || media.media}
                  alt={media.title || `media${media.id}-${index}`}
                  fill
                  className="object-cover rounded-none"
                />
                {media.type === 'video' && (
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center rounded-lg">
                    <button
                      onClick={() => setSelectedVideo(media.media || media.url)}
                      className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <VideoModal
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
      />
    </div>
  );
}
