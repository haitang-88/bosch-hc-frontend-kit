/* eslint-disable no-console */
import BaseComponent from '../../baseComponent';
import Timeline, { TimelineElement } from '../../atoms/timeline';

const VIDEO_ELEMENT_SELECTOR = 'video';
const VIDEO_SHOW_CLASS = '-show';
const VIDEO_PLAY_BUTTON_SELECTOR = '.m-video__play-button';
const VIDEO_PAUSE_BUTTON_SELECTOR = '.m-video__pause-button';
const VIDEO_TIMELINE_SELECTOR = '.a-timeline';
const VIDEO_VOLUME_CONTROLLERS_BUTTON_SELECTOR = '.m-video__volume-controllers';
const VIDEO_VOLUME_HIGH_BUTTON_SELECTOR = '.m-video__volume-high-button';
const VIDEO_TRANSCRIPT_BUTTON_SELECTOR = '.m-video__transcript-button';
const VIDEO_VOLUME_DISABLED_BUTTON_SELECTOR =
  '.m-video__volume-disabled-button';
const VIDEO_VOLUME_SLIDER_SELECTOR = '.m-video__volume-slider input';
const VIDEO_FULL_SCREEN_BUTTON_SELECTOR = '.m-video__fullscreen-button';
const VIDEO_SUBTITLES_ON_BUTTON = '.m-video__subtitles-button';
const VIDEO_SUBTITLES_OFF_BUTTON = '.m-video__subtitles-off-button';
const VIDEO_SETTINGS_CONTROLLERS_BUTTON_SELECTOR =
  '.m-video__settings-controllers-button';
const VIDEO_SETTINGS_FLYOUT_SELECTOR = '.m-video__settings-flyout';
const VIDEO_DOWNLOAD_BUTTON_SELECTOR = '.m-video__download-button';
const VIDEO_DOWNLOAD_OPTIONS_CONTAINER_SELECTOR = '.m-video__download-options';
const VIDEO_DOWNLOAD_GO_BACK_BUTTON = '.m-video__download-go-back-button';
const VIDEO_DOWNLOAD_LINK_SELECTOR = '.m-video__download-link';
const VIDEO_PLAYBACK_RATE_BUTTON_SELECTOR = '.m-video__playback-rate-button';
const VIDEO_PLAYBACK_RATE_OPTIONS_CONTAINER_SELECTOR =
  '.m-video__playback-rate-options';
const VIDEO_PLAYBACK_RATE_GO_BACK_BUTTON =
  '.m-video__playback-rate-go-back-button';
const VIDEO_PLAYBACK_RATE_OPTION_BUTTONS = '.m-video__playback-rate-option';
const VIDEO_PICTURE_IN_PICTURE_BUTTON_SELECTOR =
  '.m-video__picture-in-picture-button';

class Video extends BaseComponent {
  video: HTMLVideoElement;
  playButton: HTMLButtonElement;
  pauseButton: HTMLButtonElement;
  timeline: Timeline;
  volumeHighButton: HTMLButtonElement;
  volumeDisabledButton: HTMLButtonElement;
  transcriptButton: HTMLLinkElement;
  isVideoPlaying: boolean;
  volumeSlider: HTMLInputElement;
  volumeControllersButton: HTMLElement;
  fullScreenButton: HTMLButtonElement;
  isVolumeHovering: boolean;
  settingsControllersButton: HTMLButtonElement;
  settingsFlyout: HTMLElement;
  downloadLinks: NodeListOf<HTMLAnchorElement>;
  downloadButton: HTMLElement;
  downloadOptionsContainer: HTMLLIElement;
  downloadGoBackButton: HTMLButtonElement;
  activePlaybackRate: number;
  playbackRateButtons: NodeListOf<HTMLButtonElement>;
  playbackRateButton: HTMLButtonElement;
  playbackRateOptionsContainer: HTMLOListElement;
  playbackRateGoBackButton: HTMLButtonElement;
  showSubtitlesButton: HTMLButtonElement;
  hideSubtitlesButton: HTMLButtonElement;
  pictureInPictureButton: HTMLButtonElement;

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    /**
     * Define DOM Elements and Variables
     */
    this.video = this.container.querySelector(VIDEO_ELEMENT_SELECTOR);

    this.playButton = this.container.querySelector(VIDEO_PLAY_BUTTON_SELECTOR);
    this.pauseButton = this.container.querySelector(
      VIDEO_PAUSE_BUTTON_SELECTOR,
    );

    const timelineElement: TimelineElement = this.container.querySelector(
      VIDEO_TIMELINE_SELECTOR,
    );

    // define Timeline: check if timeline is already initialized
    // yes -> use existing
    // no -> create new Timeline instance
    if (timelineElement) {
      if (timelineElement.component) {
        this.timeline = timelineElement.component;
      } else {
        this.timeline = new Timeline(timelineElement);
      }
    }

    this.volumeHighButton = this.container.querySelector(
      VIDEO_VOLUME_HIGH_BUTTON_SELECTOR,
    );
    this.volumeDisabledButton = this.container.querySelector(
      VIDEO_VOLUME_DISABLED_BUTTON_SELECTOR,
    );
    this.volumeSlider = this.container.querySelector(
      VIDEO_VOLUME_SLIDER_SELECTOR,
    );
    this.transcriptButton = this.container.querySelector(
      VIDEO_TRANSCRIPT_BUTTON_SELECTOR,
    );
    this.volumeControllersButton = this.container.querySelector(
      VIDEO_VOLUME_CONTROLLERS_BUTTON_SELECTOR,
    );
    this.fullScreenButton = this.container.querySelector(
      VIDEO_FULL_SCREEN_BUTTON_SELECTOR,
    );
    this.showSubtitlesButton = this.container.querySelector(
      VIDEO_SUBTITLES_ON_BUTTON,
    );
    this.hideSubtitlesButton = this.container.querySelector(
      VIDEO_SUBTITLES_OFF_BUTTON,
    );
    this.settingsControllersButton = this.container.querySelector(
      VIDEO_SETTINGS_CONTROLLERS_BUTTON_SELECTOR,
    );
    this.settingsFlyout = this.container.querySelector(
      VIDEO_SETTINGS_FLYOUT_SELECTOR,
    );
    this.downloadLinks = this.container.querySelectorAll(
      VIDEO_DOWNLOAD_LINK_SELECTOR,
    );
    this.downloadOptionsContainer = this.container.querySelector(
      VIDEO_DOWNLOAD_OPTIONS_CONTAINER_SELECTOR,
    );
    this.downloadGoBackButton = this.container.querySelector(
      VIDEO_DOWNLOAD_GO_BACK_BUTTON,
    );
    this.downloadButton = this.container.querySelector(
      VIDEO_DOWNLOAD_BUTTON_SELECTOR,
    );
    this.playbackRateButton = this.container.querySelector(
      VIDEO_PLAYBACK_RATE_BUTTON_SELECTOR,
    );
    this.playbackRateOptionsContainer = this.container.querySelector(
      VIDEO_PLAYBACK_RATE_OPTIONS_CONTAINER_SELECTOR,
    );
    this.playbackRateGoBackButton = this.container.querySelector(
      VIDEO_PLAYBACK_RATE_GO_BACK_BUTTON,
    );
    this.playbackRateButtons = this.container.querySelectorAll(
      VIDEO_PLAYBACK_RATE_OPTION_BUTTONS,
    );
    this.pictureInPictureButton = this.container.querySelector(
      VIDEO_PICTURE_IN_PICTURE_BUTTON_SELECTOR,
    );

    // Event Listeners

    // add EventListener for loadedmetadata before adding sources to video
    // ensures loadedmetadata is triggered consistent
    this.video.addEventListener(
      'loadedmetadata',
      this.handleVideoMetadata.bind(this),
    );

    // due to inconsistent behaviour of loadedmetadata event, we have to set the <sources> in the constructor
    const videoSourcesString = this.video.getAttribute('data-sources');
    if (videoSourcesString !== '') {
      const videoSources = JSON.parse(videoSourcesString);

      if (videoSources instanceof Array) {
        videoSources.forEach(({ src, type }) => {
          if (typeof src !== 'undefined' && typeof type !== 'undefined') {
            const source = document.createElement('source');
            source.setAttribute('key', src);
            source.setAttribute('src', src);
            source.setAttribute('type', `video/${type}`);
            this.video.appendChild(source);
          } else {
            throw Error(
              'Wrong format of video source: The video source should be provided as an Object with type and src, e.g. {"src":"[url].mp4","type":"mp4"}.',
            );
          }
        });
      } else {
        throw Error(
          'No Array of video sources: The video sources should be provided as an Array of sources with type in the data-sources attribute of the video element, e.g. [{"src":"[url].mp4","type":"mp4"}].',
        );
      }
    }

    this.video.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));

    this.playButton.addEventListener('click', () =>
      this.toggleVideoPlaybackAndFocus(true),
    );
    this.pauseButton.addEventListener('click', () =>
      this.toggleVideoPlaybackAndFocus(false),
    );
    this.timeline.addEventListener(
      'onRangeChange',
      this.handleTimelineRangeInput.bind(this),
    );
    this.timeline.addEventListener(
      'onMouseup',
      this.handleTimelineRangeMouseUp.bind(this),
    );
    this.timeline.addEventListener(
      'onFocus',
      this.hideVolumeSlider.bind(this),
    );
    this.timeline.addEventListener(
      'onKeyup',
      this.handleTimelineRangeKeyUp.bind(this),
    );
    this.transcriptButton.addEventListener(
      'focus',
      this.hideVolumeSlider.bind(this),
    );
    this.volumeHighButton.addEventListener(
      'click',
      this.handleVolumeHigh.bind(this),
    );
    this.volumeHighButton.addEventListener(
      'focus',
      this.showVolumeSlider.bind(this),
    );
    this.volumeDisabledButton.addEventListener(
      'focus',
      this.showVolumeSlider.bind(this),
    );
    this.volumeDisabledButton.addEventListener(
      'click',
      this.handleVolumeDisabled.bind(this),
    );
    this.volumeControllersButton.addEventListener(
      'mouseover',
      this.handleVolumeOver.bind(this),
    );
    this.volumeControllersButton.addEventListener(
      'mouseout',
      this.handleVolumeOut.bind(this),
    );
    this.volumeSlider.addEventListener(
      'input',
      this.handleVolumeSlider.bind(this),
    );
    this.volumeSlider.addEventListener(
      'keydown',
      this.handleVolumeSliderKeyDown.bind(this),
    );
    if (this.fullScreenButton) {
      this.fullScreenButton.addEventListener(
        'click',
        this.handleFullScreenButtonClick.bind(this),
      );
      this.fullScreenButton.addEventListener(
        'focus',
        this.handleFullScreenButtonFocus.bind(this),
      );
    }
    if (this.showSubtitlesButton) {
      this.showSubtitlesButton.addEventListener('click', () =>
        this.toggleSubtitles(true),
      );
      this.showSubtitlesButton.addEventListener(
        'focus',
        this.handleSubtitlesFocus.bind(this),
      );
    }
    if (this.hideSubtitlesButton) {
      this.hideSubtitlesButton.addEventListener('click', () =>
        this.toggleSubtitles(false),
      );
      this.hideSubtitlesButton.addEventListener(
        'focus',
        this.handleSubtitlesFocus.bind(this),
      );
    }
    if (this.settingsFlyout) {
      this.settingsFlyout.addEventListener('keydown', (event) => {
        this.keepFocusLastElement(event, this.settingsFlyout);
      });
    }
    if (this.settingsControllersButton) {
      if (this.downloadButton) {
        this.downloadButton.addEventListener('click', (event) =>
          this.handleButtonClick(event, this.showDownloadOptionsContainer()),
        );
      }
      this.settingsControllersButton.addEventListener(
        'click',
        this.toggleSettingsFlyout.bind(this),
      );
      this.settingsControllersButton.addEventListener(
        'focus',
        this.hideVolumeSlider.bind(this),
      );
    }
    if (this.downloadOptionsContainer) {
      this.downloadOptionsContainer.addEventListener('keydown', (event) => {
        this.keepFocusInContainer(event, this.downloadOptionsContainer);
      });
    }
    if (this.downloadGoBackButton) {
      this.downloadGoBackButton.addEventListener(
        'click',
        this.handleGoBackButtonClick.bind(this),
      );
    }
    if (this.playbackRateButton) {
      this.playbackRateButton.addEventListener('click', (event) =>
        this.handleButtonClick(
          event,
          this.showPlaybackRateOptionsContainer.bind(this),
        ),
      );
    }
    if (this.playbackRateGoBackButton) {
      this.playbackRateGoBackButton.addEventListener(
        'click',
        this.handleGoBackButtonClick.bind(this),
      );
    }
    this.playbackRateButtons.forEach((button) => {
      this.handlePlaybackRateOptionClick(button);
    });
    if (this.playbackRateOptionsContainer) {
      this.playbackRateOptionsContainer.addEventListener('keydown', (event) => {
        this.keepFocusInContainer(event, this.playbackRateOptionsContainer);
      });
    }
    if (this.pictureInPictureButton) {
      this.pictureInPictureButton.addEventListener(
        'click',
        this.handlePictureInPictureButtonClick.bind(this),
      );
    }
    this.container.addEventListener(
      'click',
      this.handleDocumentClick.bind(this),
    );
    this.container.addEventListener(
      'fullscreenchange',
      this.handleDocumentFullScreenChange.bind(this),
    );

    // Init
    this.isVideoPlaying = false;
    this.isVolumeHovering = false;
    this.video.volume = 0.5;
    this.volumeSlider.valueAsNumber = 50;
    this.activePlaybackRate = 1;
  }

  /**
   * @name formatTime
   * @description
   * Format time as MM:SS
   */
  // eslint-disable-next-line class-methods-use-this
  private formatTime(timeInSeconds): string {
    const ONE_MINUTE_IN_SECONDS = 60;
    const minutes = Math.floor(timeInSeconds / ONE_MINUTE_IN_SECONDS);
    const seconds = Math.floor(timeInSeconds % ONE_MINUTE_IN_SECONDS);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }

  /**
   * @name handleTimeUpdate
   * @description
   * Update the time and the progress slider visually.
   */
  private handleTimeUpdate(): void {
    this.timeline.setCurrent(this.video.currentTime);
  }

  /**
   * @name handleVideoMetadata
   * @description
   * Load the video specs.
   */
  private handleVideoMetadata(): void {
    this.timeline.setDuration(this.video.duration);
  }

  /**
   * @name toggleVideoPlaybackAndFocus
   * @description
   * Toggle the video and give focus to its corresponding button.
   */
  private toggleVideoPlaybackAndFocus(play: boolean): void {
    this.isVideoPlaying = play;
    if (play) {
      this.video.play();
      this.playButton.classList.remove(VIDEO_SHOW_CLASS);
      this.pauseButton.classList.add(VIDEO_SHOW_CLASS);
      this.pauseButton.focus();
      this.playButton.setAttribute('aria-hidden', 'false');
      this.pauseButton.setAttribute('aria-hidden', 'true');
      this.timeline.setPlayingState(true);
    } else {
      this.video.pause();
      this.pauseButton.classList.remove(VIDEO_SHOW_CLASS);
      this.playButton.classList.add(VIDEO_SHOW_CLASS);
      this.playButton.focus();
      this.playButton.setAttribute('aria-hidden', 'true');
      this.pauseButton.setAttribute('aria-hidden', 'false');
      this.timeline.setPlayingState(false);
    }
    this.timeline.setCurrent(this.video.currentTime);
  }

  /**
   * @name updateVolumeSlider
   * @description
   * Update a volume slider.
   */
  // eslint-disable-next-line class-methods-use-this
  private updateVolumeSlider(slider: HTMLInputElement, value: number): void {
    const currentSlider = slider;
    currentSlider.value = value.toString();
    currentSlider.setAttribute('value', currentSlider.value);
    currentSlider.setAttribute('aria-valuenow', currentSlider.value);
    currentSlider.style.setProperty('--slider-percentage', `${value}`);
  }

  /**
   * @name handleTimelineRangeInput
   * @description
   * Update the timeline range upon interaction.
   */
  private handleTimelineRangeInput(currentTime: number): void {
    this.video.pause();
    this.video.currentTime = currentTime;
  }

  /**
   * @name handleTimelineRangeMouseUp
   * @description
   * Play the video sample on mouse up.
   */
  private handleTimelineRangeMouseUp(): void {
    if (this.isVideoPlaying) {
      this.video.play();
    }
  }

  /**
   * @name handleVolumeHigh
   * @description
   * Handle the volume when high volume button was clicked.
   */
  private handleVolumeHigh(): void {
    this.video.muted = true;
    this.volumeHighButton.classList.remove(VIDEO_SHOW_CLASS);
    this.volumeDisabledButton.classList.add(VIDEO_SHOW_CLASS);
    this.volumeDisabledButton.focus();
    this.volumeHighButton.setAttribute('aria-hidden', 'false');
    this.volumeDisabledButton.setAttribute('aria-hidden', 'true');
  }

  /**
   * @name handleVolumeDisabled
   * @description
   * Handle the volume when volume disabled button was clicked.
   */
  private handleVolumeDisabled(): void {
    this.video.muted = false;
    this.volumeDisabledButton.classList.remove(VIDEO_SHOW_CLASS);
    this.volumeHighButton.classList.add(VIDEO_SHOW_CLASS);
    this.volumeHighButton.focus();
    this.volumeDisabledButton.setAttribute('aria-hidden', 'false');
    this.volumeHighButton.setAttribute('aria-hidden', 'true');
  }

  /**
   * @name handleVolumeOver
   * @description
   * Handle the volume when mouse goes over.
   */
  private handleVolumeOver(): void {
    this.isVolumeHovering = true;
    if (this.settingsFlyout) this.hideSettingsFlyout();
    if (this.playbackRateOptionsContainer)
      this.hidePlaybackRateOptionsContainer();
    this.showVolumeSlider();
  }

  /**
   * @name handleVolumeOut
   * @description
   * Handle the volume when the mouse goes out.
   */
  private handleVolumeOut(): void {
    this.isVolumeHovering = false;
    setTimeout(() => {
      if (!this.isVolumeHovering) this.hideVolumeSlider();
    }, 100);
  }

  /**
   * @name handleVolumeSlider
   * @description
   * Handle the volume slider.
   */
  private handleVolumeSlider(): void {
    const volumeValue = this.volumeSlider.valueAsNumber / 100;
    this.video.volume = volumeValue;

    if (volumeValue === 0) {
      this.handleVolumeHigh();
    } else {
      this.handleVolumeDisabled();
    }

    const integerValue = Math.floor(parseFloat(this.volumeSlider.value));
    this.updateVolumeSlider(this.volumeSlider, integerValue);
  }

  /**
   * @name handleVolumeSliderKeyDown
   * @description
   * Keep the focus on the volume slider while moving it left and right.
   */
  private handleVolumeSliderKeyDown(event): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      const currentValue = parseFloat(this.volumeSlider.value);
      const newValue = Math.max(
        currentValue - 1,
        parseFloat(this.volumeSlider.min),
      );
      this.volumeSlider.valueAsNumber = newValue;

      this.handleVolumeSlider();
      this.volumeSlider.focus();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      const currentValue = parseFloat(this.volumeSlider.value);
      const newValue = Math.min(
        currentValue + 1,
        parseFloat(this.volumeSlider.max),
      );
      this.volumeSlider.value = newValue.toString();

      this.handleVolumeSlider();
      this.volumeSlider.focus();
    }
  }

  /**
   * @name handleFullScreenButtonClick
   * @description
   * Make the video full screen on button click.
   */
  private handleFullScreenButtonClick(): void {
    this.video.requestFullscreen();
  }

  /**
   * @name handleFullScreenFocus
   * @description
   * Handle the full screen button on focus and hide everything else.
   */
  private handleFullScreenButtonFocus(): void {
    this.hideVolumeSlider();
    this.hideSettingsFlyout();
  }

  /**
   * @name handleDocumentFullScreenChange
   * @description
   * Focus the full screen button when leaving full screen mode.
   */
  private handleDocumentFullScreenChange(): void {
    if (!document.fullscreenElement && this.fullScreenButton) {
      this.fullScreenButton.focus();
    }
  }

  /**
   * @name handleButtonClick
   * @description
   * Show the corresponding option when its option button was clicked.
   */
  private handleButtonClick(event, optionsContainerFunction): void {
    event.stopPropagation();
    if (optionsContainerFunction) optionsContainerFunction();
    this.hideSettingsFlyout();
  }

  /**
   * @name handlePlaybackRateOptionClick
   * @description
   * Change the video playback rate when the corresponding button was clicked.
   */
  private handlePlaybackRateOptionClick(button): void {
    button.addEventListener('click', (event) => {
      event.stopPropagation();

      const newRate = parseFloat(button.getAttribute('data-rate'));
      if (newRate !== this.activePlaybackRate) {
        const CHILD_SELECTOR = '.m-video__playback-rate-checkmark';
        const ACTIVE_CLASS = 'active-rate';
        const activeButton = document.querySelector(
          `[data-rate="${this.activePlaybackRate}"]`,
        );

        if (activeButton) {
          const activeChildEl = activeButton.querySelector(CHILD_SELECTOR);
          if (activeChildEl) activeChildEl.classList.remove(ACTIVE_CLASS);
        }

        this.activePlaybackRate = newRate;

        const childEl = button.querySelector(CHILD_SELECTOR);
        if (childEl) childEl.classList.add(ACTIVE_CLASS);

        this.video.playbackRate = newRate;
        this.hideSettingsFlyout();
        this.hidePlaybackRateOptionsContainer();
        this.settingsControllersButton.focus();
      }
    });
  }

  /**
   * @name handleDocumentClick
   * @description
   * Close all the settings menu if a click happens outside of them.
   */
  private handleDocumentClick(event): void {
    const targetNode = event.target as Node;

    if (
      (!this.settingsControllersButton ||
        !this.settingsControllersButton.contains(targetNode)) &&
      (!this.settingsFlyout || !this.settingsFlyout.contains(targetNode)) &&
      (!this.playbackRateOptionsContainer ||
        !this.playbackRateOptionsContainer.contains(targetNode))
    ) {
      if (this.settingsFlyout) this.hideSettingsFlyout();
      if (this.playbackRateOptionsContainer)
        this.hidePlaybackRateOptionsContainer();
    }
  }

  /**
   * @name showVolumeSlider
   * @description
   * Show the volume slider.
   */
  private showVolumeSlider(): void {
    if (this.settingsFlyout) this.hideSettingsFlyout();
    this.volumeSlider.parentElement.classList.add(VIDEO_SHOW_CLASS);
  }

  /**
   * @name hideVolumeSlider
   * @description
   * Hide the volume slider.
   */
  private hideVolumeSlider(): void {
    this.volumeSlider.parentElement.classList.remove(VIDEO_SHOW_CLASS);
  }

  /**
   * @name handleTimelineRangeKeyUp
   * @description
   * Handle key up event when using Tab.
   */
  private handleTimelineRangeKeyUp(event): void {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      this.handleTimelineRangeMouseUp();
    }
  }

  /**
   * @name handleSubtitlesFocus
   * @description
   * Handle focus on Subtitles' focus.
   */
  private handleSubtitlesFocus(): void {
    this.hideSettingsFlyout();
  }

  /**
   * @name toggleSubtitles
   * @description
   * Toggle subtitles on button click.
   */
  private toggleSubtitles(show: boolean): void {
    const shouldShow = !show;
    this.showSubtitlesButton.classList.toggle(VIDEO_SHOW_CLASS, shouldShow);
    this.hideSubtitlesButton.classList.toggle(VIDEO_SHOW_CLASS, show);

    this.showSubtitlesButton.setAttribute('aria-hidden', show.toString());
    this.hideSubtitlesButton.setAttribute('aria-hidden', shouldShow.toString());

    if (show) {
      this.hideSubtitlesButton.focus();
    } else {
      this.showSubtitlesButton.focus();
    }

    const tracks = this.video.textTracks;
    if (tracks && tracks.length > 0) {
      tracks[0].mode = show ? 'showing' : 'hidden';
    }
  }

  /**
   * @name showSettingsFlyout
   * @description
   * Toggle the settings flyout on button click.
   */
  private toggleSettingsFlyout(): void {
    if (this.settingsFlyout.classList.contains(VIDEO_SHOW_CLASS)) {
      this.hideSettingsFlyout();
    } else {
      this.showSettingsFlyout();
    }
  }

  /**
   * @name showSettingsFlyout
   * @description
   * Show the settings flyout.
   */
  private showSettingsFlyout(): void {
    this.settingsFlyout.classList.add(VIDEO_SHOW_CLASS);
    this.hideVolumeSlider();
  }

  /**
   * @name hideSettingsFlyout
   * @description
   * Hide the settings flyout.
   */
  private hideSettingsFlyout(): void {
    this.settingsFlyout.classList.remove(VIDEO_SHOW_CLASS);
  }

  /**
   * @name showPlaybackRateOptionsContainer
   * @description
   * Show the playbackRateOptions container.
   */
  private showPlaybackRateOptionsContainer(): void {
    this.playbackRateOptionsContainer.classList.add(VIDEO_SHOW_CLASS);
    this.playbackRateGoBackButton.focus();
  }

  /**
   * @name hidePlaybackRateOptionsContainer
   * @description
   * Hide the playbackRateOptions container.
   */
  private hidePlaybackRateOptionsContainer(): void {
    this.playbackRateOptionsContainer.classList.remove(VIDEO_SHOW_CLASS);
  }

  /**
   * @name showDownloadOptionsContainer
   * @description
   * Show the downloadOptions container.
   */
  private showDownloadOptionsContainer(): void {
    this.downloadOptionsContainer.classList.add(VIDEO_SHOW_CLASS);
    this.downloadGoBackButton.focus();
  }

  /**
   * @name hideDownloadOptionsContainer
   * @description
   * Hide the downloadOptions container.
   */
  private hideDownloadOptionsContainer(): void {
    this.downloadOptionsContainer.classList.remove(VIDEO_SHOW_CLASS);
    this.showSettingsFlyout();
  }

  /**
   * @name keepFocusLastElement
   * @description
   * Keep focus in the container's last element if tabbing outside its limits.
   */
  // eslint-disable-next-line class-methods-use-this
  private keepFocusLastElement(
    event: KeyboardEvent,
    container: HTMLElement,
  ): void {
    const focusableElements = Array.from(
      container.querySelectorAll('button, a'),
    ) as HTMLElement[];

    if (event.key === 'Tab') {
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        container.focus();
      }
    }
  }

  /**
   * @name keepFocusInContainer
   * @description
   * Keep focus in the container if tabbing outside its limits.
   */
  // eslint-disable-next-line class-methods-use-this
  private keepFocusInContainer(
    event: KeyboardEvent,
    container: HTMLElement,
  ): void {
    const focusableElements = Array.from(
      container.querySelectorAll('button, a'),
    ) as HTMLElement[];

    if (event.key === 'Tab') {
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          firstElement.focus();
        }
      } else if (document.activeElement === lastElement) {
        event.preventDefault();
        lastElement.focus();
      }
    }
  }

  /**
   * @name handleGoBackButtonClick
   * @description
   * Go back to the previous view when the go back button was clicked.
   */
  private handleGoBackButtonClick(event): void {
    event.stopPropagation();

    if (this.playbackRateOptionsContainer)
      this.hidePlaybackRateOptionsContainer();
    if (this.downloadOptionsContainer) this.hideDownloadOptionsContainer();

    this.showSettingsFlyout();
    const firstSettingElement = this.settingsFlyout.querySelector('button');
    firstSettingElement.focus();
  }

  /**
   * @name handlePictureInPictureButtonClick
   * @description
   * Toggle the picture-in-picture mode on button click.
   */
  private async handlePictureInPictureButtonClick(): Promise<void> {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      this.video.requestPictureInPicture();
    }
    this.hideSettingsFlyout();
    this.settingsControllersButton.focus();
  }
}

export default Video;
