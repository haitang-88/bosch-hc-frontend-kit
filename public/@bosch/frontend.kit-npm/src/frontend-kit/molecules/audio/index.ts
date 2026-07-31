/* eslint-disable no-console */
import BaseComponent from '../../baseComponent';
import Timeline, { TimelineElement } from '../../atoms/timeline';

const AUDIO_ELEMENT_SELECTOR = 'audio';
const AUDIO_SHOW_CLASS = '-show';
const AUDIO_PLAY_BUTTON_SELECTOR = '.m-audio__play-button';
const AUDIO_PAUSE_BUTTON_SELECTOR = '.m-audio__pause-button';
const AUDIO_TIMELINE_SELECTOR = '.a-timeline';
const AUDIO_VOLUME_CONTROLLERS_BUTTON_SELECTOR = '.m-audio__volume-controllers';
const AUDIO_VOLUME_HIGH_BUTTON_SELECTOR = '.m-audio__volume-high-button';
const AUDIO_TRANSCRIPT_BUTTON_SELECTOR = '.m-audio__transcript-button';
const AUDIO_VOLUME_DISABLED_BUTTON_SELECTOR =
  '.m-audio__volume-disabled-button';
const AUDIO_VOLUME_SLIDER_SELECTOR = '.m-audio__volume-slider input';
const AUDIO_DOWNLOAD_LINK_SELECTOR = '.m-audio__download-link';
const AUDIO_SETTINGS_CONTROLLERS_BUTTON_SELECTOR =
  '.m-audio__settings-controllers-button';
const AUDIO_SETTINGS_FLYOUT_SELECTOR = '.m-audio__settings-flyout';
const AUDIO_PLAYBACK_RATE_BUTTON_SELECTOR = '.m-audio__playback-rate-button';
const AUDIO_PLAYBACK_RATE_OPTIONS_CONTAINER_SELECTOR =
  '.m-audio__playback-rate-options';
const AUDIO_PLAYBACK_RATE_GO_BACK_BUTTON =
  '.m-audio__playback-rate-go-back-button';
const AUDIO_PLAYBACK_RATE_OPTION_BUTTONS = '.m-audio__playback-rate-option';

class Audio extends BaseComponent {
  audio: HTMLAudioElement;
  playButton: HTMLButtonElement;
  pauseButton: HTMLButtonElement;
  timeline: Timeline;
  volumeHighButton: HTMLButtonElement;
  volumeDisabledButton: HTMLButtonElement;
  transcriptButton: HTMLLinkElement;
  isAudioPlaying: boolean;
  volumeSlider: HTMLInputElement;
  volumeControllersButton: HTMLElement;
  isVolumeHovering: boolean;
  downloadLink: HTMLAnchorElement;
  activePlaybackRate: number;
  playbackRateButtons: NodeListOf<HTMLButtonElement>;
  settingsControllersButton: HTMLButtonElement;
  settingsFlyout: HTMLElement;
  playbackRateButton: HTMLButtonElement;
  playbackRateOptionsContainer: HTMLOListElement;
  playbackRateGoBackButton: HTMLButtonElement;

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    /**
     * Define DOM Elements and Variables
     */
    this.audio = this.container.querySelector(AUDIO_ELEMENT_SELECTOR);

    this.playButton = this.container.querySelector(AUDIO_PLAY_BUTTON_SELECTOR);
    this.pauseButton = this.container.querySelector(
      AUDIO_PAUSE_BUTTON_SELECTOR,
    );

    const timelineElement: TimelineElement = this.container.querySelector(
      AUDIO_TIMELINE_SELECTOR,
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
      AUDIO_VOLUME_HIGH_BUTTON_SELECTOR,
    );
    this.volumeDisabledButton = this.container.querySelector(
      AUDIO_VOLUME_DISABLED_BUTTON_SELECTOR,
    );
    this.volumeSlider = this.container.querySelector(
      AUDIO_VOLUME_SLIDER_SELECTOR,
    );
    this.transcriptButton = this.container.querySelector(
      AUDIO_TRANSCRIPT_BUTTON_SELECTOR,
    );
    this.volumeControllersButton = this.container.querySelector(
      AUDIO_VOLUME_CONTROLLERS_BUTTON_SELECTOR,
    );
    this.settingsControllersButton = this.container.querySelector(
      AUDIO_SETTINGS_CONTROLLERS_BUTTON_SELECTOR,
    );
    this.settingsFlyout = this.container.querySelector(
      AUDIO_SETTINGS_FLYOUT_SELECTOR,
    );
    this.downloadLink = this.container.querySelector(
      AUDIO_DOWNLOAD_LINK_SELECTOR,
    );
    this.playbackRateButton = this.container.querySelector(
      AUDIO_PLAYBACK_RATE_BUTTON_SELECTOR,
    );
    this.playbackRateOptionsContainer = this.container.querySelector(
      AUDIO_PLAYBACK_RATE_OPTIONS_CONTAINER_SELECTOR,
    );
    this.playbackRateGoBackButton = this.container.querySelector(
      AUDIO_PLAYBACK_RATE_GO_BACK_BUTTON,
    );
    this.playbackRateButtons = this.container.querySelectorAll(
      AUDIO_PLAYBACK_RATE_OPTION_BUTTONS,
    );

    // Event Listeners

    // add EventListener for loadedmetadata before adding source to audio
    // ensures loadedmetadata is triggered consistent
    this.audio.addEventListener(
      'loadedmetadata',
      this.handleAudioMetadata.bind(this),
    );

    // due to inconsistent behaviour of loadedmetadata event, we have to set the src in the constructor
    const audioSrc = this.audio.getAttribute('data-src-url');
    if (typeof audioSrc !== 'undefined') {
      this.audio.src = audioSrc;
    } else {
      throw Error(
        'Audio source not found: The audio source should be provided as a string in the data-src-url attribute of the audio element.',
      );
    }

    this.audio.addEventListener('timeupdate', this.handleTimeUpdate.bind(this));

    this.playButton.addEventListener('click', () =>
      this.toggleAudioPlaybackAndFocus(true),
    );
    this.pauseButton.addEventListener('click', () =>
      this.toggleAudioPlaybackAndFocus(false),
    );
    this.timeline.addEventListener(
      'onRangeChange',
      this.handleTimelineRangeInput.bind(this),
    );
    this.timeline.addEventListener(
      'onMouseup',
      this.handleTimelineRangeMouseUp.bind(this),
    );
    this.timeline.addEventListener('onFocus', this.hideVolumeSlider.bind(this));
    this.timeline.addEventListener(
      'onKeyup',
      this.handleTimelineRangeKeyUp.bind(this),
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
    this.transcriptButton.addEventListener(
      'focus',
      this.hideVolumeSlider.bind(this),
    );
    if (this.settingsControllersButton) {
      this.settingsControllersButton.addEventListener(
        'click',
        this.toggleSettingsFlyout.bind(this),
      );
      this.settingsControllersButton.addEventListener(
        'focus',
        this.hideVolumeSlider.bind(this),
      );
    }
    if (this.playbackRateButton) {
      this.playbackRateButton.addEventListener(
        'click',
        this.handlePlaybackRateButtonClick.bind(this),
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
    if (this.settingsFlyout) {
      this.settingsFlyout.addEventListener('keydown', (event) => {
        this.keepFocusLastElement(event, this.settingsFlyout);
      });
    }
    if (this.playbackRateOptionsContainer) {
      this.playbackRateOptionsContainer.addEventListener('keydown', (event) => {
        this.keepFocusInContainer(event, this.playbackRateOptionsContainer);
      });
    }

    this.container.addEventListener(
      'click',
      this.handleDocumentClick.bind(this),
    );

    // Init
    this.isAudioPlaying = false;
    this.isVolumeHovering = false;
    this.audio.volume = 0.5;
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
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * @name handleTimeUpdate
   * @description
   * Update the time and the progress slider visually.
   */
  private handleTimeUpdate(): void {
    this.timeline.setCurrent(this.audio.currentTime);
  }

  /**
   * @name handleAudioMetadata
   * @description
   * Load the audio specs.
   */
  private handleAudioMetadata(): void {
    this.timeline.setDuration(this.audio.duration);
  }

  /**
   * @name toggleAudioPlaybackAndFocus
   * @description
   * Toggle the audio and give focus to its corresponding button.
   */
  private toggleAudioPlaybackAndFocus(play: boolean): void {
    this.isAudioPlaying = play;
    if (play) {
      this.audio.play();
      this.playButton.classList.remove(AUDIO_SHOW_CLASS);
      this.pauseButton.classList.add(AUDIO_SHOW_CLASS);
      this.pauseButton.focus();
      this.playButton.setAttribute('aria-hidden', 'false');
      this.pauseButton.setAttribute('aria-hidden', 'true');
      this.timeline.setPlayingState(true);
    } else {
      this.audio.pause();
      this.pauseButton.classList.remove(AUDIO_SHOW_CLASS);
      this.playButton.classList.add(AUDIO_SHOW_CLASS);
      this.playButton.focus();
      this.playButton.setAttribute('aria-hidden', 'true');
      this.pauseButton.setAttribute('aria-hidden', 'false');
      this.timeline.setPlayingState(false);
    }
    this.timeline.setCurrent(this.audio.currentTime);
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
    this.audio.pause();
    this.audio.currentTime = currentTime;
  }

  /**
   * @name handleTimelineRangeMouseUp
   * @description
   * Play the audio sample on mouse up.
   */
  private handleTimelineRangeMouseUp(): void {
    if (this.isAudioPlaying) {
      this.audio.play();
    }
  }

  /**
   * @name handleVolumeHigh
   * @description
   * Handle the volume when high volume button was clicked.
   */
  private handleVolumeHigh(): void {
    this.audio.muted = true;
    this.volumeHighButton.classList.remove(AUDIO_SHOW_CLASS);
    this.volumeDisabledButton.classList.add(AUDIO_SHOW_CLASS);
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
    this.audio.muted = false;
    this.volumeDisabledButton.classList.remove(AUDIO_SHOW_CLASS);
    this.volumeHighButton.classList.add(AUDIO_SHOW_CLASS);
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
    this.audio.volume = volumeValue;

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
   * @name handlePlaybackRateButtonClick
   * @description
   * Show the playback rate option when the playback rate button was clicked.
   */
  private handlePlaybackRateButtonClick(event): void {
    event.stopPropagation();

    if (this.playbackRateOptionsContainer)
      this.showPlaybackRateOptionsContainer();
    this.hideSettingsFlyout();
  }

  /**
   * @name handleGoBackButtonClick
   * @description
   * Go back to the previous view when the playback rate go back button was clicked.
   */
  private handleGoBackButtonClick(): void {
    let firstElement;

    if (this.playbackRateOptionsContainer)
      this.hidePlaybackRateOptionsContainer();
    this.showSettingsFlyout();

    if (this.downloadLink) {
      firstElement = this.downloadLink.querySelector('a');
    } else {
      firstElement = this.playbackRateButton;
    }
    firstElement.focus();
  }

  /**
   * @name handlePlaybackRateOptionClick
   * @description
   * Change the audio playback rate when the corresponding button was clicked.
   */
  // eslint-disable-next-line class-methods-use-this
  private handlePlaybackRateOptionClick(button): void {
    button.addEventListener('click', (event) => {
      event.stopPropagation();

      const newRate = parseFloat(button.getAttribute('data-rate'));
      if (newRate !== this.activePlaybackRate) {
        const CHILD_SELECTOR = '.m-audio__playback-rate-checkmark';
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

        this.audio.playbackRate = newRate;
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
    this.volumeSlider.parentElement.classList.add(AUDIO_SHOW_CLASS);
  }

  /**
   * @name hideVolumeSlider
   * @description
   * Hide the volume slider.
   */
  private hideVolumeSlider(): void {
    this.volumeSlider.parentElement.classList.remove(AUDIO_SHOW_CLASS);
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
   * @name showSettingsFlyout
   * @description
   * Toggle the settings flyout on button click.
   */
  private toggleSettingsFlyout(): void {
    if (this.settingsFlyout.classList.contains(AUDIO_SHOW_CLASS)) {
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
    this.settingsFlyout.classList.add(AUDIO_SHOW_CLASS);
    this.hideVolumeSlider();
  }

  /**
   * @name hideSettingsFlyout
   * @description
   * Hide the settings flyout.
   */
  private hideSettingsFlyout(): void {
    this.settingsFlyout.classList.remove(AUDIO_SHOW_CLASS);
  }

  /**
   * @name showPlaybackRateOptionsContainer
   * @description
   * Show the playbackRateOptions container.
   */
  private showPlaybackRateOptionsContainer(): void {
    this.playbackRateOptionsContainer.classList.add(AUDIO_SHOW_CLASS);
    this.playbackRateGoBackButton.focus();
  }

  /**
   * @name hidePlaybackRateOptionsContainer
   * @description
   * Hide the playbackRateOptions container.
   */
  private hidePlaybackRateOptionsContainer(): void {
    this.playbackRateOptionsContainer.classList.remove(AUDIO_SHOW_CLASS);
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
}

export default Audio;
