import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BraidTestProvider } from 'braid-design-system/test';

import Home from './page';

describe('Home', () => {
  it('renders the Home page - Test 1', () => {
    render(
      <BraidTestProvider>
        <Home />
      </BraidTestProvider>,
    );
    expect(screen.getByText('Product Designer')).toBeInTheDocument();
  });

  it('renders the Home page - Test 2', () => {
    render(
      <BraidTestProvider>
        <Home />
      </BraidTestProvider>,
    );
    expect(screen.getByText('Braid Design Pty Ltd')).toBeInTheDocument();
  });
});
