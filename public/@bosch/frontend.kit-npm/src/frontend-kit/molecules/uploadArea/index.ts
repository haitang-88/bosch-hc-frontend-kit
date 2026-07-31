import BaseComponent from '../../baseComponent';

const UPLOAD_FIELD_CLASS = '.m-upload-area__field';
const UPLOAD_INPUT_CLASS = '.m-upload-area__input';

export default class UploadArea extends BaseComponent {
  private uploadField: HTMLElement;
  private uploadInput: HTMLInputElement;

  constructor(container: HTMLElement) {
    super(container);

    this.uploadField = container.querySelector(UPLOAD_FIELD_CLASS);
    this.uploadInput = container.querySelector(UPLOAD_INPUT_CLASS);

    this.uploadField.addEventListener(
      'dragenter',
      (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      false,
    );

    this.uploadField.addEventListener(
      'dragover',
      (e) => {
        e.stopPropagation();
        e.preventDefault();
      },
      false,
    );

    this.uploadField.addEventListener(
      'drop',
      (e) => {
        e.stopPropagation();
        e.preventDefault();

        const dt = e.dataTransfer;
        const files = Array.from(dt.files);

        const filesAdded = new CustomEvent('filesAdded', {
          detail: {
            files,
          },
        });

        this.uploadInput.dispatchEvent(filesAdded);
      },
      false,
    );

    this.uploadInput.addEventListener('change', () => {
      const files = Array.from(this.uploadInput.files);
      const filesAdded = new CustomEvent('filesAdded', {
        detail: {
          files,
        },
      });

      this.uploadInput.dispatchEvent(filesAdded);
    });
  }
}
