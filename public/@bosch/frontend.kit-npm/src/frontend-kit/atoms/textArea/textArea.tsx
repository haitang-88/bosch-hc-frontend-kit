import classNames from 'classnames';
import * as React from 'react';

interface TextAreaProps {
  disabled?: boolean;
  id: string;
  placeholder?: string;
  dynamicHeight?: boolean;
  label?: string;
  readOnly?: boolean;
}

/**
 * @name        a-text-area
 * @type        atom
 * @author      Experience One AG
 * @copyright   Robert Bosch GmbH
 *
 * @param       disabled        Wether or not the text area is disabled
 * @param       id              Unique ID for the text area
 * @param       placeholder     Placeholder of text area
 * @param       dynamicHeight   Whether or not the text area has a dynamic height
 * @param       label           Label of text area
 * @param       readOnly        Whether or not the text are is read only
 *
 * @description
 * representation of text area
 */

const TextArea: React.FunctionComponent<TextAreaProps> = ({
  disabled,
  id,
  placeholder,
  dynamicHeight,
  label,
  readOnly,
}: TextAreaProps) => {
  const inputClass = classNames('a-text-area', {
    [`a-text-area--dynamic-height`]: dynamicHeight,
  });

  return (
    <div className={inputClass}>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        disabled={disabled}
        placeholder={placeholder}
        readOnly={readOnly}
      />
      {dynamicHeight && <div className="a-text-area__shadow" />}
    </div>
  );
};

export { TextArea };
export type { TextAreaProps };
