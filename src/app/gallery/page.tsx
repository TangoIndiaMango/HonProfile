import { GalleryHero } from '@/components/gallery/GalleryHero';
import { GalleryPhotos } from '@/components/gallery/GalleryPhotos';
import { GalleryVideos } from '@/components/gallery/GalleryVideos';

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryPhotos />
      <GalleryVideos />
    </main>
  );
}
