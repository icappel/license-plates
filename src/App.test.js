import { render, screen } from '@testing-library/react';
import App from './App';

test('renders something useful', () => {
  render(<App />);
  const relevantElement = screen.getByText(/Driver/i);
  expect(relevantElement).toBeInTheDocument();
});


// TODO: MAKE SURE TO EXPLORE MOCKING FUNCTIONALITY OF THIS TESTING LIBRARY TO MOCK BACKEND RESPONSES