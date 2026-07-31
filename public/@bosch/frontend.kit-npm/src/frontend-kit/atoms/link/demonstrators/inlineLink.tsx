import * as React from 'react';
import { Link } from '../link';

const InlineLinkDemonstrator: React.FunctionComponent = () => (
  <p>
    Paragraph Text View standard
    <br />
    sit amet, consetetur <Link
      level="inline"
      label="Link label"
      href="/#"
    />{' '}
    elitr,
    <br />
    sed diam nonumy eirmod
  </p>
);

export default InlineLinkDemonstrator;
