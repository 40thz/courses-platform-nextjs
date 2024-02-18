import { youtubeGetVideoID } from '@utils/youtubeGetVideoID';
import React from 'react';

export const YoutubeEmbed = ({ embedId }: { embedId: string }) => {
  const videoId = youtubeGetVideoID(embedId);
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
};
