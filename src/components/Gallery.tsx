/* eslint-disable @next/next/no-img-element */
export function Gallery({
  images,
}: {
  images: { src: string; caption: string }[];
}) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {images.map((img) => (
        <figure
          key={img.src}
          className="group overflow-hidden rounded-2xl bg-white/70 shadow-sm ring-1 ring-plum/10"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={img.src}
              alt={img.caption}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <figcaption className="px-3 py-2 text-center text-xs font-medium text-plum/70">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
