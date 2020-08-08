import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders left navigation', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/dashboard/i);

  expect(linkElement).toBeInTheDocument();
});
