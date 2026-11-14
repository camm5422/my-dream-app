import Image from "next/image";
import Button from "@/components/ui/Button";
import Card, { Pill } from "@/components/ui/Card";
import { zones } from "@/lib/nav";

/** The three zones as cards, each with its picture, age and an Explore button. */
export default function ZoneCards() {
  return (
    <div className="grid three">
      {zones.map((z) => (
        <Card key={z.zone} as="article">
          <Image className="zone-img" src={z.art} alt="" width={72} height={72} unoptimized />
          <Pill>{z.age}</Pill>
          <h3>{z.title}</h3>
          <p>{z.blurb}</p>
          <Button href={z.href} arrow>
            Explore
          </Button>
        </Card>
      ))}
    </div>
  );
}
