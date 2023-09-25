import React from 'react';

import 'braid-design-system/reset';
import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import seekJobs from 'braid-design-system/themes/seekJobs';
import wireframe from 'braid-design-system/themes/wireframe';

import { VocabProvider } from '@vocab/react';

const themes = {
  apac,
  seekJobs,
  wireframe,
};

export const Provider = ({
  theme,
  children,
}: {
  theme: { name: string };
  children?: React.ReactNode;
}) => {
  return (
    <BraidProvider theme={themes[theme.name]}>
      <VocabProvider language={'en'}>{children}</VocabProvider>
    </BraidProvider>
  );
};
