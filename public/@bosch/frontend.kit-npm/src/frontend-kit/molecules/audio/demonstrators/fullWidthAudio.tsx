import * as React from 'react';
import { Audio, AudioProps } from '../audio';

const FullWidthAudioDemonstrator: React.FunctionComponent<AudioProps> = ({
  src,
  title,
  duration,
  ariaLabel,
  subtitlesSrc,
  isDownloadDisabled,
  isPlaybackRateDisabled,
  timelineId,
  volumeSliderId,
  transcriptionUrl,
}) => (
  <div
    style={{
      marginTop: '22rem',
    }}
  >
    <Audio
      src={src}
      title={title}
      duration={duration}
      ariaLabel={ariaLabel}
      subtitlesSrc={subtitlesSrc}
      isDownloadDisabled={isDownloadDisabled}
      isPlaybackRateDisabled={isPlaybackRateDisabled}
      timelineId={timelineId}
      volumeSliderId={volumeSliderId}
      transcriptionUrl={transcriptionUrl}
    />
  </div>
);

export default FullWidthAudioDemonstrator;
