import * as React from 'react';
import { Legend, LegendProps } from '../legend';
import { InputText } from '../../inputText/inputText';

const LegendInsideFieldsetDemonstrator: React.FunctionComponent<
  LegendProps
> = ({ label }) => (
  <>
    <style
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{
        __html: `
          .legend-inside-fieldset-example {
            border: 0;
          }
          .legend-inside-fieldset-example .a-text-field {
            margin-bottom: 1rem;
          }
          .legend-inside-fieldset-example .a-text-field:last-child {
            margin-bottom: 0;
          }
        `,
      }}
    />
    <fieldset className="legend-inside-fieldset-example">
      <Legend label={label} />
      <InputText id="first textfield" placeholder="e.g.: hint" label="Label" />
      <InputText id="second textfield" placeholder="e.g.: hint" label="Label" />
      <InputText id="third textfield" placeholder="e.g.: hint" label="Label" />
    </fieldset>
  </>
);

export default LegendInsideFieldsetDemonstrator;
