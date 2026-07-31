import BaseComponent from '../../baseComponent';

const TIMELINE_PLAYING_CLASS = '-playing';
const TIMELINE_DURATION_SELECTOR = '.a-timeline__duration';
const TIMELINE_CURRENT_SELECTOR = '.a-timeline__current';
const TIMELINE_RANGE_SELECTOR = '.a-timeline__range input[type=range]';

export type TimelineElement = { component: Timeline } & HTMLElement;

export default class Timeline extends BaseComponent {
  protected static events = [
    'onRangeChange',
    'onMouseup',
    'onFocus',
    'onKeyup',
  ];

  private timelineDuration: HTMLElement;
  private timelineCurrent: HTMLElement;
  private timelineDurationValue: number;
  private timelineCurrentValue: number;
  private readonly timelineRange: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    // do not set up event handlers twice, as they will not work
    if (this.alreadyInitialized === true) {
      return;
    }

    this.timelineDurationValue = 0;
    this.timelineCurrentValue = 0;

    /**
     * Define DOM Elements and Variables
     */
    this.timelineDuration = container.querySelector(TIMELINE_DURATION_SELECTOR);
    this.timelineCurrent = container.querySelector(TIMELINE_CURRENT_SELECTOR);
    this.timelineRange = container.querySelector(TIMELINE_RANGE_SELECTOR);

    if (this.timelineRange instanceof HTMLElement) {
      this.timelineDurationValue = parseInt(this.timelineRange.max, 10);
      this.timelineCurrentValue = parseInt(this.timelineRange.value, 10);

      this.setDurationMarkup();
      this.setCurrentMarkup();
      this.setCurrentFillColorActiveRail();

      this.timelineRange.addEventListener('input', () => {
        this.setCurrent(parseInt(this.timelineRange.value, 10));
        this.triggerEvent('onRangeChange', this.timelineCurrentValue);
      });

      this.timelineRange.addEventListener('mouseup', (e) => {
        this.triggerEvent('onMouseup', e);
      });

      this.timelineRange.addEventListener('focus', (e) => {
        this.triggerEvent('onFocus', e);
      });

      this.timelineRange.addEventListener('keyup', (e) => {
        this.triggerEvent('onKeyup', e);
      });
    }
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
   * @name setCurrent
   * @description
   * public function to set the current time in seconds of the media file
   */
  public setCurrent(time: number): void {
    if (time > this.timelineDurationValue) {
      this.timelineCurrentValue = this.timelineDurationValue;
    } else if (time < 0) {
      this.timelineCurrentValue = 0;
    } else {
      this.timelineCurrentValue = Math.floor(time);
    }

    this.setCurrentMarkup();
    this.setCurrentFillColorActiveRail();
  }

  /**
   * @name setDuration
   * @description
   * public function to set the duration time in seconds of the media file
   */
  public setDuration(time: number): void {
    if (time < 0) {
      this.timelineDurationValue = 0;
    } else {
      this.timelineDurationValue = Math.floor(time);
    }

    this.timelineRange.max = this.timelineDurationValue.toString();
    this.setDurationMarkup();
  }

  /**
   * @name setPlayingState
   * @description
   * public function to set the playing class to the timeline component
   */
  public setPlayingState(playing: boolean) {
    if (playing) {
      this.container.classList.add(TIMELINE_PLAYING_CLASS);
    } else {
      this.container.classList.remove(TIMELINE_PLAYING_CLASS);
    }
  }

  /**
   * @name setCurrentMarkup
   * @description
   * set the current time in the value, label and aria attributes
   */
  private setCurrentMarkup() {
    // update markup
    this.timelineRange.value = this.timelineCurrentValue.toString();
    this.timelineRange.setAttribute(
      'value',
      this.timelineCurrentValue.toString(),
    );
    this.timelineCurrent.textContent = this.formatTime(
      this.timelineCurrentValue,
    );
    this.setCurrentAriaValues();
  }

  /**
   * @name setDurationMarkup
   * @description
   * set the duration time in label and aria attributes
   */
  private setDurationMarkup() {
    // update markup
    this.timelineDuration.textContent = this.formatTime(
      this.timelineDurationValue,
    );
    this.setDurationAriaValues();
  }

  /**
   * @name setCurrentAriaValues
   * @description
   * set the current time in the aria-valuenow and aria-valuetext
   */
  private setCurrentAriaValues(): void {
    this.timelineRange.setAttribute(
      'aria-valuenow',
      this.timelineCurrentValue.toString(),
    );

    this.timelineRange.setAttribute(
      'aria-valuetext',
      `elapsed time: ${this.formatTime(this.timelineCurrentValue)}`,
    );
  }

  /**
   * @name setDurationAriaValues
   * @description
   * set the duration time in the aria-valuemax and aria-description
   */
  private setDurationAriaValues(): void {
    this.timelineRange.setAttribute(
      'aria-valuemax',
      this.timelineDurationValue.toString(),
    );

    this.timelineRange.setAttribute(
      'aria-description',
      `total time: ${this.formatTime(this.timelineDurationValue)}`,
    );
  }

  /**
   * @name calculateValues
   * @description
   * returns the current percentage of the timeline range
   */
  private calculateValues(): { percentage: number } {
    let percentage = 0;
    if (this.timelineDurationValue !== 0) {
      percentage = Number(
        (
          (this.timelineCurrentValue * 100) /
          this.timelineDurationValue
        ).toFixed(2),
      );
    }

    return { percentage };
  }

  /**
   * @name setCurrentFillColorActiveRail
   * @description
   * set the current percentage of the timeline range as a CSS custom property
   */
  private setCurrentFillColorActiveRail(): void {
    const { percentage } = this.calculateValues();
    this.timelineRange.style.setProperty(
      '--timeline-range-percentage',
      `${percentage}`,
    );
  }
}
