export interface Songs {
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