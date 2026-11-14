import raw from "../../content/bio.json";

export type Bio = {
  name: string;
  /** Path under /public, e.g. "/about/me.jpg". Empty = show Cori as a stand-in. */
  photo: string;
  photoAlt: string;
  /** Two or three sentences, shown on Home */
  summary: string;
  /** Why Littlecore exists, shown at the top of About */
  story: string;
  /** Full bio, shown on About */
  bio: string;
  credentials: string[];
  /** Line saying Littlecore is a personal project and speaks for no employer */
  independence: string;
};

export const bio: Bio = raw;
