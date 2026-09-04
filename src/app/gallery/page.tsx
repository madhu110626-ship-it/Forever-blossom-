import Image from "next/image";
import { galleryImages, processImages } from "@/data/products";

export const metadata = { title: "Gallery" };

export default function GalleryPage() {
  const all = [...galleryImages, ...processImages];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <h1 className="section-title mb-2">Gallery</h1>
      <p className="mb-8 opacity-70">Real handmade moments from the Forever Bloom studio.</p>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {all.map((g) => (
          <div key={g.src + g.alt} className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl">
            <Image src={g.src} alt={g.alt} width={600} height={750} className="h-auto w-full object-cover transition duration-500 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </div>
  );
}
