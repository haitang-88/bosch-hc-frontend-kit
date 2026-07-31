import * as React from 'react';
import { Dialog } from '../dialog';

type DialogVariant = 'error' | 'info' | 'success' | 'warning';

const dialogs = [
  {
    id: 'demo-default',
    title: 'Default example',
    headline: 'Default example',
    closeBtn: true,
    label: 'Default',
  },
  {
    id: 'demo-default-dialog-without-close-button',
    title: 'Default without close button example',
    headline: 'Default without close button example',
    label: 'Default without close button',
  },
  {
    id: 'demo-default-dialog-with-long-title',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem accusamus modi possimus!',
    headline: 'Default dialog with long title',
    closeBtn: true,
    label: 'Default dialog with long title',
  },
  {
    id: 'demo-default-dialog-with-long-title-without-close-button',
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolorem accusamus modi possimus!',
    headline: 'Default dialog with long title without close button',
    label: 'Default dialog with long title without close button',
  },
  {
    id: 'demo-default-dialog-without-header',
    headline: 'Default dialog without header',
    label: 'Default dialog without header',
  },
  {
    id: 'demo-alert-dialog-info',
    title: 'Info Title Text M Bold',
    variant: 'info' as DialogVariant,
    headline: 'Info Headline Text XL Bold',
    closeBtn: true,
    label: 'Info',
  },
  {
    id: 'demo-alert-dialog-success',
    title: 'Success Title Text M Bold',
    variant: 'success' as DialogVariant,
    headline: 'Success Headline Text XL Bold',
    closeBtn: true,
    label: 'Success',
  },
  {
    id: 'demo-alert-dialog-warning',
    title: 'Warning Title Text M Bold',
    variant: 'warning' as DialogVariant,
    headline: 'Warning Headline Text XL Bold',
    closeBtn: true,
    label: 'Warning',
  },
  {
    id: 'demo-alert-dialog-error',
    title: 'Error Title Text M Bold',
    variant: 'error' as DialogVariant,
    headline: 'Error Headline Text XL Bold',
    closeBtn: true,
    label: 'Error',
  },
  {
    id: 'demo-alert-dialog-info-without-close-button',
    title: 'Info Title Text M Bold',
    variant: 'info' as DialogVariant,
    headline: 'Info Headline Text XL Bold',
    closeBtn: false,
    label: 'Info without close button',
  },
  {
    id: 'demo-alert-dialog-success-without-close-button',
    title: 'Success Title Text M Bold',
    variant: 'success' as DialogVariant,
    headline: 'Success Headline Text XL Bold',
    closeBtn: false,
    label: 'Success without close button',
  },
  {
    id: 'demo-alert-dialog-warning-without-close-button',
    title: 'Warning Title Text M Bold',
    variant: 'warning' as DialogVariant,
    headline: 'Warning Headline Text XL Bold',
    closeBtn: false,
    label: 'Warning without close button',
  },
  {
    id: 'demo-non-modal',
    title: 'Non-Modal',
    headline: 'Non-Modal',
    closeBtn: false,
    label: 'Non-Modal',
  },
];

const allDialogDemonstrator: React.FunctionComponent = () => (
  <div
    className="frontend-kit-example_modal-dialog"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1.5rem',
    }}
  >
    {dialogs.map(({ id, variant, title, headline, closeBtn, label }) => (
      <>
        <button
          type="button"
          className="a-button-dialog a-button a-button--primary -without-icon"
        >
          <span className="a-button__label">{label}</span>
        </button>
        <Dialog
          key={id}
          dialogId={id}
          title={title}
          closeBtn={closeBtn}
          variant={variant}
          headline={headline}
        />
      </>
    ))}
  </div>
);

export default allDialogDemonstrator;
