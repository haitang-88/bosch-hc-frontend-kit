import * as React from 'react';

import { Button } from '../../atoms/button/button';
import { Divider } from '../../atoms/divider/divider';
import { Icon } from '../../atoms/icon/icon';

class DialogProps {
  // title of the dialog window
  title?: string;
  // variant identifier,
  variant?: 'info' | 'success' | 'warning' | 'error';
  // a page-unique identifier
  dialogId: string;
  // if true, show as modal
  modal?: boolean;
  // if true, show a close button,
  closeBtn?: boolean;
  // The headline of the dialog box content
  headline?: string;
  // The content of the dialog box
  dialogBody?: string;
  // The error code of the dialog box
  dialogCode?: string;
  // If set to true a third optional button will be displayed
  optionalButton?: boolean;
  // If set to true the modal will be "Modal-less"
  isModalLess?: boolean;
  // If set to true the modal will be "Non-Modal"
  isNonModal?: boolean;
}

const Dialog: React.FunctionComponent<DialogProps> = ({
  title,
  variant,
  closeBtn,
  headline,
  dialogId,
  dialogBody = 'Paragraph text with style text M. Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus to duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  dialogCode,
  optionalButton,
  isModalLess,
  isNonModal,
}) => {
  const dialogTitleId = `dialog-${dialogId}-title`;
  const dialogDescriptionId = `dialog-${dialogId}-description`;

  const nonModalClass = '-non-modal';

  return (
    <dialog
      className={`m-dialog -floating-shadow-s -primary ${
        isNonModal ? nonModalClass : ''
      }`}
      id={dialogId}
      aria-labelledby={dialogTitleId}
      open={isModalLess}
    >
      {title && (
        <>
          {variant && <div className={`m-dialog__remark --${variant}`} />}
          <div className="m-dialog__header">
            {variant && <Icon iconName={`alert-${variant}`} isUiIcon />}
            <div className="m-dialog__title">{title}</div>
            {closeBtn && (
              <Button
                action="close"
                mode="integrated"
                icon="close"
                isUiIcon
                aria-label="close dialog"
              />
            )}
          </div>
          <Divider />
        </>
      )}
      <div className="m-dialog__content">
        {headline && (
          <div className="m-dialog__headline" id={dialogTitleId}>
            {headline}
          </div>
        )}
        <div className="m-dialog__body" id={dialogDescriptionId}>
          {dialogBody}
        </div>
        {dialogCode && <div className="m-dialog__code">{dialogCode}</div>}
        <div className="m-dialog__actions">
          {optionalButton && (
            <Button
              label="Optional button"
              mode="secondary"
              action="optional"
            />
          )}
          <Button label="Confirm" mode="primary" action="confirm" />
          <Button label="Cancel" mode="secondary" action="cancel" />
        </div>
      </div>
    </dialog>
  );
};

export { Dialog };
export type { DialogProps };
