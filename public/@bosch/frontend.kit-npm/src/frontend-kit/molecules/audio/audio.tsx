/* eslint-disable jsx-a11y/aria-props */
/* eslint-disable import/prefer-default-export */
/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import { Button, Link, Timeline, Slider } from '../../components';

interface AudioProps {
  src: string;
  title: string;
  duration: number;
  ariaLabel: string;
  subtitlesSrc?: string;
  isDownloadDisabled?: boolean;
  isPlaybackRateDisabled?: boolean;
  timelineId: string;
  volumeSliderId: string;
  transcriptionUrl: string;
}

/**
 * @name      m-audio
 * @type      molecule
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string}  src                         The audio sample's location.
 * @param   {string}  title                       The audio sample's title.
 * @param   {number}  duration                    The audio sample's duration.
 * @param   {string}  ariaLabel                   The audio sample's aria label.
 * @param   {string}  subtitlesSrc                The audio's subtitle. Optional.
 * @param   {boolean} isDownloadDisabled          Wether or not the audio sample is downloadable. Optional.
 * @param   {boolean} isPlaybackRateDisabledid    Wether or not the audio sample different playback rates. Optional.
 * @param   {string}  timelineId                  The unique ID of the timeline.
 * @param   {string}  volumeSliderId              The unique ID of the volume slider.
 * @param   {string}  transcriptionUrl            The audio's transcription.
 *
 * @description
 * representation of audio elements
 */

const Audio: React.FunctionComponent<AudioProps> = ({
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
}) => {
  // Audio attributes
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

  // Playback
  const PLAYBACK_BUTTON_LABEL = 'Playback speed';
  const PLAYBACK_RATE_OPTION_GO_BACK_LABEL = 'Options';
  const PLAYBACK_DEFAULT_ACTIVE_RATE = 1;

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

  return (
    <div className="m-audio -primary">
      <audio
        aria-label={ariaLabel}
        controls
        controlsList={controlsListAttribute}
        data-src-url={src}
      >
        {subtitlesSrc && <track src={subtitlesSrc} kind="captions" />}
      </audio>
      <Button
        icon="play"
        mode="integrated"
        aria-label="play button"
        additionalClasses={['m-audio__play-button -show']}
      />
      <Button
        icon="pause"
        mode="integrated"
        aria-label="pause button"
        additionalClasses={['m-audio__pause-button']}
      />
      <Timeline
        additionalClassName="m-audio__timeline"
        id={timelineId}
        description="audio time scrubber"
      />
      <div className="m-audio__volume-controllers">
        <Button
          icon="volume-high"
          mode="integrated"
          aria-label="volume high button"
          additionalClasses={['m-audio__volume-high-button -show']}
        />
        <Button
          icon="volume-disabled"
          mode="integrated"
          aria-label="volume disabled button"
          additionalClasses={['m-audio__volume-disabled-button']}
        />
        <Slider
          additionalClassName="m-audio__volume-slider -floating-shadow-s -primary"
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
        additionalClasses={['m-audio__transcript-button']}
        href={transcriptionUrl}
        icon="transscript"
        iconPosition="center"
        ariaLabel="link to transscript of the audio file"
        level="button-integrated"
      />
      {!(isPlaybackRateDisabled && isDownloadDisabled) && (
        <div className="m-audio__settings-controllers">
          <Button
            icon="settings"
            mode="integrated"
            aria-label="settings button"
            additionalClasses={['m-audio__settings-controllers-button']}
          />
          <div className="m-audio__settings-flyout -floating-shadow-s -primary">
            {!isDownloadDisabled && (
              <div className="a-link a-link--integrated -icon m-audio__setting m-audio__download-link">
                <a
                  data-title={title}
                  aria-label={title}
                  href={src}
                  target="_self"
                  download
                >
                  <span>{DOWNLOAD_LINK_LABEL}</span>
                  <span>
                    <i className="a-icon boschicon-bosch-ic-download" />
                  </span>
                </a>
              </div>
            )}
            {!isPlaybackRateDisabled && (
              <Button
                type="button"
                label={PLAYBACK_BUTTON_LABEL}
                mode="integrated"
                isUiIcon
                icon="right"
                additionalClasses={['m-audio__playback-rate-button']}
              />
            )}
          </div>
          {!isPlaybackRateDisabled && (
            <ol className="m-audio__playback-rate-options -floating-shadow-s -primary">
              <li>
                <Button
                  isUiIcon
                  icon="left"
                  mode="integrated"
                  additionalClasses={['m-audio__playback-rate-go-back-button']}
                  label={PLAYBACK_RATE_OPTION_GO_BACK_LABEL}
                />
              </li>
              {playbackRateOptions.map(({ rate, label }) => (
                <li key={rate}>
                  <button
                    type="button"
                    className="m-audio__playback-rate-option a-button a-button--integrated"
                    data-rate={rate}
                  >
                    <span
                      className={`m-audio__playback-rate-checkmark ${
                        rate === PLAYBACK_DEFAULT_ACTIVE_RATE
                          ? 'active-rate'
                          : ''
                      }`}
                    >
                      <i className="a-icon ui-ic-checkmark" title="checkmark" />
                    </span>
                    <span className="a-button__label">{label}</span>
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </div>
  );
};

export { Audio };
export type { AudioProps };
