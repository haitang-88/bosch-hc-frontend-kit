import { AnimationItem, LottiePlayer } from 'lottie-web';
import {
  prefersReducedMotion,
  scriptAdded,
} from '../../helpers/animatedIcons.helper';
import BaseComponent from '../../baseComponent';

const CDN_SRC =
  'https://brandguide-cdn.azureedge.net/animated-icons/0.0.1/bosch-animated-icons-experience';
const SCRIPT_SRC =
  'https://brandguide-cdn.azureedge.net/animated-icons/lottie-web/5.12.2/lottie.min.js';

const CLASS_LOADED = '-loaded';
const ID_SCRIPT = 'lottie-script';
const SELECTOR_SCRIPT = `script[id="${ID_SCRIPT}"]`;

declare global {
  interface Window {
    lottie: LottiePlayer;
  }
}

window.lottie = window.lottie || undefined;

class AnimatedIcon extends BaseComponent {
  private animation: AnimationItem;
  private canvas: HTMLDivElement;
  private initEvent: Event;
  private loop: boolean;
  private autoPlay: boolean;
  private iconName: string;
  private uiIcon: boolean;

  constructor(container: HTMLElement) {
    super(container);

    /**
     * Define DOM Elements and Variables
     */
    this.canvas = this.container.querySelector('.a-animated-icon__container');
    this.initEvent = new Event('lottieInitialized');
    this.loop = this.container.dataset.loop === 'true';
    this.autoPlay = this.container.dataset.autoPlay === 'true';
    this.iconName = this.container.dataset.iconName;
    this.uiIcon = this.container.dataset.uiIcon === 'true';

    window.addEventListener('lottieInitialized', () => {
      this.initAnimation();
    });

    if (scriptAdded(SELECTOR_SCRIPT)) {
      this.initAnimation();
    } else {
      this.loadScript();
    }
  }

  private async loadScript() {
    // If script is already added to <head>, return early to prevent adding multiple times
    if (window.lottie || scriptAdded(SELECTOR_SCRIPT)) {
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = ID_SCRIPT;
    script.src = SCRIPT_SRC;

    script.addEventListener('load', () => {
      window.dispatchEvent(this.initEvent);
    });

    document.head.appendChild(script);
  }

  private createAnimationDataUrl() {
    const animationDataPrefix = this.uiIcon ? 'bosch-ui' : 'bosch-ic';
    const animationDataPath = `${CDN_SRC}/${animationDataPrefix}-${this.iconName}/${animationDataPrefix}-${this.iconName}.json`;

    return animationDataPath;
  }

  private async initAnimation() {
    if (prefersReducedMotion()) {
      return;
    }

    if (!window.lottie) {
      return;
    }

    this.animation = window.lottie.loadAnimation({
      container: this.canvas,
      renderer: 'svg',
      loop: this.loop,
      autoplay: this.autoPlay,
      path: this.createAnimationDataUrl(),
    });

    this.animation.addEventListener('DOMLoaded', () => {
      this.container.classList.add(CLASS_LOADED);
    });
  }

  /**
   * Plays the animation if the user does not prefer reduced motion.
   * @returns void
   */
  public play() {
    if (prefersReducedMotion()) {
      return;
    }

    this.animation.play();
  }

  /**
   * Pauses the animation.
   * @returns void
   */
  public pause() {
    this.animation.pause();
  }
}

export default AnimatedIcon;
