/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../icon/icon';

interface InputFileUploadProps {
  label: string;
  id: string;
  name: string;
  isDisabled?: boolean;
}

/**
 * @name      a-file-upload-input
 * @type      atom
 * @author    Experience One AG
 * @copyright Robert Bosch GmbH
 *
 * @param   {string} label             Label to Display
 * @param   {string} id                Unique ID for each file upload input
 * @param   {string} name              Unique name attribute for each file upload input
 * @param   {boolean} isDisabled       Wether or not the file upload input is disabled
 *
 * @description
 * representation of file upload input
 */

const InputFileUpload: React.FunctionComponent<InputFileUploadProps> = ({
  label,
  id,
  name,
  isDisabled,
}) => {
  const idInputFileUpload = `file-upload-input-${id}`;

  const InputFileUploadClass = classNames('a-file-upload-input', {
    'a-file-upload-input--disabled': isDisabled,
  });

  return (
    <div className={InputFileUploadClass}>
      <label htmlFor={idInputFileUpload}>
        <Icon iconName="upload" />
        {label}
      </label>
      <input
        id={idInputFileUpload}
        name={name}
        type="file"
        disabled={isDisabled}
      />
      <div className="a-file-upload-input__preview">
        <p>No file chosen</p>
      </div>
    </div>
  );
};

export { InputFileUpload };
export type { InputFileUploadProps };
