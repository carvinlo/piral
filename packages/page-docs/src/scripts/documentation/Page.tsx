import * as React from 'react';
import { Menu } from '../components';
import { Content } from './Content';
import { Standard } from '../layout';

export const Page: React.SFC = () => {
  const ref = React.useRef(undefined);

  return (
    <Standard title="Documentation" icon="book">
      <Content ref={ref} />
      <Menu content={ref} />
    </Standard>
  );
};
