import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('renders the Home page - Test 1', () => {
    render(<Home />);
    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });

  it('renders the Home page - Test 2', () => {
    render(<Home />);
    expect(
      screen.getByText(
        'Find in-depth information about Next.js features and API.',
      ),
    ).toBeInTheDocument();
  });
});
