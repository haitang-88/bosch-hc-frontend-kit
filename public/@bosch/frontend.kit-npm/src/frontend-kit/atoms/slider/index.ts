import BaseComponent from '../../baseComponent';

export default class TextField extends BaseComponent {
  protected static events = ['onClick'];

  private readonly slider: HTMLInputElement;
  private readonly tooltip: HTMLElement;
  private label: HTMLLabelElement;
  private sliderVertical: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.slider = container.querySelector('.a-slider input[type=range]');
    this.sliderVertical = container.querySelector(
      '.a-slider--vertical input[type=range]',
    );

    this.tooltip = container.querySelector('.a-tooltip');
    this.label = container.querySelector('label');

    if (this.slider instanceof HTMLElement) {
      this.slider.addEventListener('input', () => {
        this.setTooltip();
        this.setValue();
        this.setAriaValueNow();
        this.setFillColorActiveRail();
      });
      this.slider.addEventListener('mouseenter', () => {
        this.toggleTooltipVisibility(false);
      });
      this.slider.addEventListener('mouseleave', () => {
        this.toggleTooltipVisibility(true);
      });
    }

    if (this.sliderVertical) {
      const sliderWidth = this.slider.offsetWidth;
      const HALF_REM = 8;

      if (this.label) this.label.style.left = `${sliderWidth + HALF_REM}px`;
    }
  }

  private setValue(): void {
    this.slider.setAttribute('value', this.slider.valueAsNumber.toString());
  }

  private setAriaValueNow(): void {
    this.slider.setAttribute(
      'aria-valuenow',
      this.slider.valueAsNumber.toString(),
    );
  }

  private setTooltip(): void {
    if (!this.tooltip) {
      return;
    }

    const { percentage } = this.calculateValues();

    // fill tooltip with data
    if (this.tooltip.getAttribute('tooltip-type') === 'relative') {
      this.tooltip.innerHTML = `${percentage} %`;
    } else if (this.tooltip.getAttribute('tooltip-unit')) {
      this.tooltip.innerHTML = `${this.slider.value}${this.tooltip.getAttribute(
        'tooltip-unit',
      )}`;
    } else {
      this.tooltip.innerHTML = this.slider.value;
    }

    this.calculateAndSetTooltipPosition(percentage);
  }

  /**
   * The tooltip needs to be placed directly over the center of the thumb element.
   * To calculate where the tooltip is placed, we use the percentage of the slider as a base.
   * Then half the tooltip width is subtracted.
   * When the thumb element is placed at the ends of the spectrum, its center is not placed directly over the percentage value.
   * The offset caused by the thumb position follows a linear function based on the percentage.
   * The position of the tooltip needs to be corrected for that.
   *
   * @param percentage  The percentage value of the slider
   */
  private calculateAndSetTooltipPosition(percentage: number): void {
    const tooltipOffsetRem = this.tooltip.offsetWidth / 2 / 16;
    const thumbOffsetFactor = percentage / 100 - 0.5;

    // thumb has 1.5rem
    const offsetRem = tooltipOffsetRem + thumbOffsetFactor * 1.5;

    this.tooltip.style.left = `calc(${percentage}% - (${offsetRem}rem))`;

    if (this.sliderVertical) {
      const numberString = this.slider.valueAsNumber.toString();
      let bottomRem: number;

      if (this.tooltip.getAttribute('tooltip-type') === 'relative') {
        bottomRem = -3.5;
        if (numberString.length === 2) {
          bottomRem = -3.8;
        } else if (numberString.length > 2) {
          bottomRem = -4.2;
        }
      } else if (this.label) {
        bottomRem = -3.25;
        if (numberString.length === 2) {
          bottomRem = -3.5;
        } else if (numberString.length > 2) {
          bottomRem = -3.75;
        }
      } else {
        bottomRem = -2.9;
        if (numberString.length === 2) {
          bottomRem = -3.25;
        } else if (numberString.length === 3) {
          bottomRem = -3.5;
        } else if (numberString.length > 3) {
          bottomRem = -3.8;
        }
      }

      this.tooltip.style.bottom = `${bottomRem}rem`;
    }
  }

  private toggleTooltipVisibility(isHidden: boolean): void {
    if (!this.tooltip) {
      return;
    }
    this.tooltip.style.visibility = isHidden ? 'hidden' : 'visible';
  }

  private calculateValues(): { percentage: number } {
    const min: number = this.slider.min ? Number(this.slider.min) : 0;
    const max: number = this.slider.max ? Number(this.slider.max) : 100;
    const percentage = Number(
      ((this.slider.valueAsNumber - min) * 100) / (max - min),
    );

    return { percentage };
  }

  private setFillColorActiveRail(): void {
    const { percentage } = this.calculateValues();

    this.slider.style.setProperty('--slider-percentage', `${percentage}`);
  }
}
