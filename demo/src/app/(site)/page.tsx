import Button from "@/components/ui/Button";
import Card, { Pill } from "@/components/ui/Card";
import { zones } from "@/lib/nav";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <span className="route">/</span>
        <h1>Big power from a little core.</h1>
        <p>
          Learn how electricity, grids and small modular reactors work, from a senior electrical
          engineer.
        </p>
        <div className="actions">
          <Button href="/book">Book a session</Button>
          <Button href="/learn" variant="secondary">
            Start learning
          </Button>
        </div>
      </div>
      <h2>Pick your zone</h2>
      <div className="grid three">
        {zones.map((z) => (
          <Card key={z.zone}>
            <Pill>{z.age}</Pill>
            <h3>{z.title}</h3>
            <p>{z.blurb}</p>
            <Button href={z.href} arrow>
              Explore
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
