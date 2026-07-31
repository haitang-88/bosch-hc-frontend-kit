import * as React from 'react';
import { Button } from '../../../atoms/button/button';
import { Dialog, DialogProps } from '../dialog';

const ModalDialog: React.FunctionComponent<DialogProps> = ({
  dialogId,
  title,
  headline,
  closeBtn,
  optionalButton,
  dialogBody,
  dialogCode,
  modal,
  variant,
  isNonModal,
}) => (
  <div className="frontend-kit-example_modal-dialog">
    <Button
      label="Open dialog"
      mode="primary"
      action="show"
      additionalClasses={['a-button-dialog']}
    />
    <Dialog
      dialogId={dialogId}
      title={title}
      headline={headline}
      closeBtn={closeBtn}
      optionalButton={optionalButton}
      dialogBody={dialogBody}
      dialogCode={dialogCode}
      modal={modal}
      variant={variant}
      isNonModal={isNonModal}
    />
  </div>
);

export default ModalDialog;
