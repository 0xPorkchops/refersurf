import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/ef8a8d21-2d4e-4090-b149-95f4a650536a-wypifl.jpg",
  "https://utfs.io/f/a3cb0d08-4f7e-4e45-985a-30932318ce23-ofa50y.jpg",
  "https://utfs.io/f/07f9c2e0-e11d-4272-9dda-b1d449e3f4a9-e9pxax.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
