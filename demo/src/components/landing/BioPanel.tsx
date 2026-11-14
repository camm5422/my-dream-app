import Image from "next/image";
import Button from "@/components/ui/Button";
import { bio } from "@/lib/bio";

/** Photo and words about the owner. Fields left empty in content/bio.json are simply left out. */
export default function BioPanel({ variant }: { variant: "teaser" | "full" }) {
  const photo = bio.photo
    ? { src: bio.photo, alt: bio.photoAlt || bio.name || "The engineer behind Littlecore" }
    : { src: "/brand/mascot-cori.svg", alt: "Cori, the Littlecore mascot" };
  const heading = bio.name
    ? `${bio.name}, senior electrical engineer`
    : "Senior electrical engineer";

  return (
    <div className="bio">
      <div className="bio-photo">
        <Image
          src={photo.src}
          alt={photo.alt}
          className={bio.photo ? undefined : "stand-in"}
          width={220}
          height={220}
          unoptimized={photo.src.endsWith(".svg")}
        />
      </div>
      <div className="bio-text">
        {variant === "full" ? (
          <h2>{heading}</h2>
        ) : (
          <h3>{bio.name ? `Hi, I am ${bio.name}` : "Hi, I am your engineer"}</h3>
        )}
        <p>{variant === "full" && bio.bio ? bio.bio : bio.summary}</p>
        {bio.credentials.length > 0 && (
          <>
            {variant === "full" && <h3>Background</h3>}
            <ul className="creds">
              {bio.credentials.map((c) => (
                <li key={c}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m4 12 5 5L20 6" />
                  </svg>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        {variant === "teaser" && (
          <div className="actions">
            <Button href="/about" variant="secondary">
              More about me
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
