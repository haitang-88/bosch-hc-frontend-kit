/* eslint-disable jsx-a11y/aria-props */
import * as React from 'react';
import { Button, Link, Timeline, Slider } from '../../components';

interface VideoProps {
  sources: {
    type: 'mp4' | 'webm' | 'ogv';
    src: string;
  }[];
  title: string;
  duration: number;
  ariaLabel: string;
  subtitlesSrc?: string;
  caption?: string;
  isDownloadDisabled?: boolean;
  isPlaybackRateDisabled?: boolean;
  isPictureInPictureDisabled?: boolean;
  timelineId: string;
  volumeSliderId: string;
  transcriptionUrl: string;
}

/**
 * @name      m-video
 * @type      molecule
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param     {array}   sources                         Array of Source-Objects.
 * @param     {string}  title                           The video's title.
 * @param     {number}  duration                        The video's duration.
 * @param     {string}  ariaLabel                       The video's aria label.
 * @param     {string}  subtitlesSrc                    The video's subtitles. Optional.
 * @param     {string}  caption                         The caption of Video. Optional.
 * @param     {boolean} isDownloadDisabled              Wether or not the video is downloadable. Optional.
 * @param     {boolean} isPlaybackRateDisabled          Wether or not the video playback rates are shown. Optional.
 * @param     {boolean} isPictureInPictureDisabled      Wether or not the picture in picture option is available. Optional.
 * @param     {string}  timelineId                      The unique ID of the timeline.
 * @param     {string}  volumeSliderId                  The unique ID of the volume slider.
 * @param     {string}  transcriptionUrl                The video's transcription.
 *
 * @description
 * representation of video elements
 */

const Video: React.FunctionComponent<VideoProps> = ({
  sources,
  title,
  duration,
  ariaLabel,
  subtitlesSrc,
  caption,
  isDownloadDisabled,
  isPlaybackRateDisabled,
  isPictureInPictureDisabled,
  timelineId,
  volumeSliderId,
  transcriptionUrl,
}) => {
  // Video attributes
  const downloadAttribute = !isDownloadDisabled ? '' : 'nodownload';
  const playbackAttribute = !isPlaybackRateDisabled ? '' : ' noplaybackrate';
  const controlsList = downloadAttribute + playbackAttribute;
  const controlsListAttribute =
    controlsList.length === 0 ? null : controlsList.trim();

  // Volume Slider
  const volumeSliderInitialValue = 50;
  const volumeSliderMinValue = 0;
  const volumeSliderMaxValue = 100;

  // Download Link
  const DOWNLOAD_LINK_LABEL = 'Download';
  const DOWNLOAD_GO_BACK_LABEL = 'Go Back';

  // Playback
  const PLAYBACK_BUTTON_LABEL = 'Playback speed';
  const PLAYBACK_RATE_OPTION_GO_BACK_LABEL = 'Options';
  const PLAYBACK_DEFAULT_ACTIVE_RATE = 1;

  // Picture-in-picture
  const PICTURE_IN_PICTURE_BUTTON_LABEL = 'Picture in Picture';

  const playbackRateOptions = [
    { rate: 0.25, label: '0.25' },
    { rate: 0.5, label: '0.5' },
    { rate: 0.75, label: '0.75' },
    { rate: 1, label: 'Normal' },
    { rate: 1.25, label: '1.25' },
    { rate: 1.5, label: '1.5' },
    { rate: 1.75, label: '1.7' },
    { rate: 2, label: '2' },
  ];

  // create Array of video sources to append it to the video element
  // as a string in the attribute data-sources
  const videoSources = [];
  sources.forEach(({ src, type }) => {
    const videoSrc = { src, type };
    videoSources.push(videoSrc);
  });

  return (
    <div className="m-video -primary" aria-label={ariaLabel}>
      <video
        controlsList={controlsListAttribute}
        disablePictureInPicture={isPictureInPictureDisabled}
        data-sources={JSON.stringify(videoSources)}
      >
        <track src={subtitlesSrc} kind="captions" />
      </video>
      <div className="m-video__controls">
        <Button
          icon="play"
          mode="integrated"
          aria-label="play button"
          additionalClasses={['m-video__play-button -show']}
        />
        <Button
          icon="pause"
          mode="integrated"
          aria-label="pause button"
          additionalClasses={['m-video__pause-button']}
        />
        <Timeline
          additionalClassName="m-video__timeline"
          id={timelineId}
          description="video time scrubber"
        />
        <div className="m-video__volume-controllers">
          <Button
            icon="volume-high"
            mode="integrated"
            aria-label="volume high button"
            additionalClasses={['m-video__volume-high-button -show']}
          />
          <Button
            icon="volume-disabled"
            mode="integrated"
            aria-label="volume disabled button"
            additionalClasses={['m-video__volume-disabled-button']}
          />
          <Slider
            additionalClassName="m-video__volume-slider -floating-shadow-s -primary"
            id={volumeSliderId}
            description="volume"
            ariaDescription="vertical volume slider"
            min={volumeSliderMinValue}
            max={volumeSliderMaxValue}
            step="any"
            initialValue={volumeSliderInitialValue}
            isVertical
          />
        </div>
        <Link
          additionalClasses={['m-video__transcript-button']}
          href={transcriptionUrl}
          icon="transscript"
          iconPosition="center"
          ariaLabel="link to transscript of the video file"
          level="button-integrated"
        />
        {!(
          isDownloadDisabled &&
          isPictureInPictureDisabled &&
          isPlaybackRateDisabled
        ) && (
          <>
            <Button
              icon="fullscreen"
              mode="integrated"
              aria-label="fullscreen button"
              additionalClasses={['m-video__fullscreen-button']}
            />
            <Button
              icon="subtitles"
              mode="integrated"
              aria-label="subtitles button"
              additionalClasses={['m-video__subtitles-button']}
            />
            <Button
              icon="subtitles-off-light"
              mode="integrated"
              aria-label="subtitles off button"
              additionalClasses={['m-video__subtitles-off-button -show']}
            />
            <div className="m-video__settings-controllers">
              <Button
                icon="settings"
                mode="integrated"
                aria-label="settings button"
                additionalClasses={['m-video__settings-controllers-button']}
              />
              <div className="m-video__settings-flyout -floating-shadow-s -primary">
                {!isDownloadDisabled && (
                  <Button
                    type="button"
                    label={DOWNLOAD_LINK_LABEL}
                    mode="integrated"
                    isUiIcon
                    icon="right"
                    additionalClasses={['m-video__download-button']}
                  />
                )}
                {!isPlaybackRateDisabled && (
                  <Button
                    type="button"
                    label={PLAYBACK_BUTTON_LABEL}
                    mode="integrated"
                    isUiIcon
                    icon="right"
                    additionalClasses={['m-video__playback-rate-button']}
                  />
                )}
                {!isPictureInPictureDisabled && (
                  <Button
                    type="button"
                    label={PICTURE_IN_PICTURE_BUTTON_LABEL}
                    mode="integrated"
                    isUiIcon
                    icon="right"
                    additionalClasses={['m-video__picture-in-picture-button']}
                  />
                )}
              </div>
              <ol className="m-video__options m-video__download-options -floating-shadow-s -primary">
                <li>
                  <Button
                    isUiIcon
                    icon="left"
                    mode="integrated"
                    additionalClasses={['m-video__download-go-back-button']}
                    label={DOWNLOAD_GO_BACK_LABEL}
                  />
                </li>
                {sources.map(({ src, type }) => (
                  <li key={src}>
                    <div className="a-link a-link--integrated -icon m-audio__setting m-video__download-link">
                      <a
                        data-title={title}
                        aria-label={title}
                        href={src}
                        download
                      >
                        <span>{`${title}.${type}`}</span>
                        <span>
                          <i
                            className="a-icon boschicon-bosch-ic-download"
                            title="download"
                          />
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
              <ol className="m-video__options m-video__playback-rate-options -floating-shadow-s -primary">
                <li>
                  <Button
                    isUiIcon
                    icon="left"
                    mode="integrated"
                    additionalClasses={[
                      'm-video__playback-rate-go-back-button',
                    ]}
                    label={PLAYBACK_RATE_OPTION_GO_BACK_LABEL}
                  />
                </li>
                {playbackRateOptions.map(({ rate, label }) => (
                  <li key={rate}>
                    <button
                      type="button"
                      className="m-video__playback-rate-option a-button a-button--integrated -without-icon"
                      data-rate={rate}
                    >
                      <span
                        className={`m-video__playback-rate-checkmark ${
                          rate === PLAYBACK_DEFAULT_ACTIVE_RATE
                            ? 'active-rate'
                            : ''
                        }`}
                      >
                        <i className="a-icon ui-ic-checkmark" />
                      </span>
                      <span className="a-button__label">{label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}
      </div>
      {caption && <div className="m-video__caption">{caption}</div>}
    </div>
  );
};

export { Video };
export type { VideoProps };
