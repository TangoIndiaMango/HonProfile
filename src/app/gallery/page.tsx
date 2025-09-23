import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryPhotos } from '@/components/gallery/GalleryPhotos';
import { GalleryVideos } from '@/components/gallery/GalleryVideos';

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <div className="max-w-7xl mx-auto bg-gray-50">
        <GalleryPhotos />
        <GalleryVideos />
      </div>
    </main>
  );
}
