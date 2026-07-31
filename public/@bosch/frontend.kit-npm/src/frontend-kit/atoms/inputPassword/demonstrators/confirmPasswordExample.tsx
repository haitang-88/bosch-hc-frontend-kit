import * as React from 'react';
import { InputPassword } from '../inputPassword';
import { Button } from '../../button/button';

const ConfirmPasswordExampleDemonstrator: React.FunctionComponent = () => (
  <>
    <style
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{
        __html: `
            .frontend-kit-example_password {
                display: flex;
                flex-direction: column;
                min-width: 18rem;
            }
            .frontend-kit-example_password > * {
                margin-bottom: 1rem;
            }
            .frontend-kit-example_password h5 {
                margin-top: 0;
            }
            .frontend-kit-example_password button {
                align-self: end;
                margin-bottom: 0;
                width: fit-content;
            }
          `,
      }}
    />

    <div className="frontend-kit-example_password">
      <div className="-size-l-bold">Set a new Password</div>
      <InputPassword id="160" name="add-password" label="Password" />
      <InputPassword
        id="170"
        name="confirm-password"
        label="Confirm Password"
      />
      <Button mode="primary" label="Update Password" />
    </div>
  </>
);

export default ConfirmPasswordExampleDemonstrator;
