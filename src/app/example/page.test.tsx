import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system/test';

import Example from './page';
import { VocabProvider } from '@/lib/vocab';

describe('Example', () => {
  it('renders the page in thai', () => {
    render(
      <VocabProvider language="th">
        <BraidTestProvider>
          <Example />
        </BraidTestProvider>
      </VocabProvider>,
    );
    expect(
      screen.getByText('Translated text: ข้อความที่แปล'),
    ).toBeInTheDocument();
  });
});
