export interface Tracks {
  id: number;
  artist: string;
  track: string;
  image: string;
  video?: string;
  streams: {
    monthly: number;
    total: number;
  };
}

export interface TrackProps {
  props: Tracks[];
}
