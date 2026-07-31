import * as React from 'react';
import { Button } from '../../../atoms/button/button';
import { Divider } from '../../../atoms/divider/divider';
import { FormField, FormFieldProps } from '../formField';

const NotificationFormFieldDemonstrator: React.FunctionComponent<
  FormFieldProps
> = ({
  fieldType = 'text',
  id,
  label = null,
  placeholder = null,
  size,
  name,
  options,
  rightLabel,
}) => (
  <div className="frontend-kit-example_form-field-notification">
    <Button mode="primary" label="Error" action="error" />
    <Button mode="primary" label="Warning" action="warning" />
    <Button mode="primary" label="Success" action="success" />
    <Button mode="primary" label="Neutral" action="neutral" />
    <Button label="Reset" action="reset" mode="secondary" />
    <Divider />
    <FormField
      id={id}
      fieldType={fieldType}
      label={label}
      placeholder={placeholder}
      size={size}
      name={name}
      options={options}
      rightLabel={rightLabel}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '.frontend-kit-example_form-field-notification > .a-button { margin-right: 0.75rem; display: inline-block; }',
      }}
    />
  </div>
);

export default NotificationFormFieldDemonstrator;
