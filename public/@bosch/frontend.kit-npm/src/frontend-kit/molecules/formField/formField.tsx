import * as React from 'react';
import { Checkbox } from '../../atoms/checkbox/checkbox';
import { Dropdown, OptionProps } from '../../atoms/dropdown/dropdown';
import { Notification } from '../../atoms/notification/notification';
import { RadioButton } from '../../atoms/radioButton/radioButton';
import { TextArea } from '../../atoms/textArea/textArea';
import { InputText } from '../../atoms/inputText/inputText';
import { Toggle } from '../../atoms/toggle/toggle';
import { InputValueModificator } from '../../atoms/inputValueModificator/inputValueModificator';
import { InputPassword } from '../../atoms/inputPassword/inputPassword';
import { InputEmail } from '../../atoms/inputEmail/inputEmail';
import { InputTelephone } from '../../atoms/inputTelephone/inputTelephone';
import { InputDate } from '../../atoms/inputDate/inputDate';

interface FormFieldProps {
  fieldType:
    | 'text'
    | 'password'
    | 'email'
    | 'telephone'
    | 'date'
    | 'textarea'
    | 'radio'
    | 'checkbox'
    | 'dropdown'
    | 'toggle'
    | 'value';
  label?: string;
  placeholder?: string;
  id: string;
  size?: 'quarter' | 'half';
  notification?: string;
  state?: 'success' | 'warning' | 'error';
  name?: string;
  options?: OptionProps[];
  rightLabel?: string;
}

const FormField: React.FunctionComponent<FormFieldProps> = ({
  fieldType = 'text',
  label = null,
  placeholder = null,
  id,
  size,
  notification,
  state,
  name,
  options,
  rightLabel,
}) => {
  const fieldClasses = ['m-form-field'];

  if (fieldType === 'radio') {
    fieldClasses.push('m-form-field--radio');
  }

  if (fieldType === 'checkbox') {
    fieldClasses.push('m-form-field--checkbox');
  }

  if (fieldType === 'dropdown') {
    fieldClasses.push('m-form-field--dropdown');
  }

  if (fieldType === 'toggle') {
    fieldClasses.push('m-form-field--toggle');
  }

  if (fieldType === 'value') {
    fieldClasses.push('m-form-field--value');
  }

  if (size) {
    fieldClasses.push(`-${size}`);
  }

  const fieldClass = fieldClasses.join(' ');

  return (
    <div className={fieldClass}>
      {fieldType === 'text' && (
        <InputText label={label} placeholder={placeholder} id={id} />
      )}
      {fieldType === 'password' && (
        <InputPassword
          label={label}
          placeholder={placeholder}
          name={id}
          id={id}
        />
      )}
      {fieldType === 'email' && (
        <InputEmail label={label} placeholder={placeholder} name={id} id={id} />
      )}
      {fieldType === 'telephone' && (
        <InputTelephone
          label={label}
          placeholder={placeholder}
          name={id}
          id={id}
        />
      )}
      {fieldType === 'date' && <InputDate label={label} name={name} id={id} />}
      {fieldType === 'textarea' && (
        <TextArea label={label} placeholder={placeholder} id={id} />
      )}
      {fieldType === 'radio' && (
        <RadioButton label={label} id={id} name={name} />
      )}
      {fieldType === 'checkbox' && <Checkbox labelCheckbox={label} id={id} />}
      {fieldType === 'dropdown' && <Dropdown id={id} options={options} />}
      {fieldType === 'toggle' && <Toggle id={id} rightLabel={rightLabel} />}
      {fieldType === 'value' && <InputValueModificator id={id} />}
      {notification && (
        <Notification
          notificationId={id}
          variant="text"
          type={state || 'neutral'}
        >
          {notification}
        </Notification>
      )}
    </div>
  );
};

export { FormField };
export type { FormFieldProps };
