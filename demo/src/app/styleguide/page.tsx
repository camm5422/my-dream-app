import StyleGuide, { type TrackChoice } from "./StyleGuide";
import "./styleguide.css";

const tracks = ["kids", "students", "pros", "all"];

/** Start state can be set from the link, e.g. /styleguide?track=pros&view=projector&taps=1 */
export default async function StyleGuidePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const q = await searchParams;
  const track = (tracks.includes(q.track ?? "") ? q.track : "kids") as TrackChoice;
  return (
    <StyleGuide
      initialTrack={track}
      initialProjector={q.view === "projector"}
      initialTaps={q.taps === "1"}
    />
  );
}
