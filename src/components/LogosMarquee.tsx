import Image from "next/image";

type Logo = { slug: string; name: string };

export default function LogosMarquee({ logos }: { logos: Logo[] }) {
  // Duplicate the list so the track can loop seamlessly at -50%.
  const track = [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="marquee-track flex w-max items-center gap-16 sm:gap-20">
        {track.map((logo, i) => (
          <div
            key={`${logo.slug}-${i}`}
            className="flex h-14 shrink-0 items-center sm:h-20"
          >
            <Image
              src={`/images/logos/${logo.slug}.webp`}
              alt={logo.name}
              width={160}
              height={80}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
