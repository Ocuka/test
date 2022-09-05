import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import MyJSApp from './App';

// test('renders learn react link', () => {
//   render(<MyJSApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test ('render without crashing', () => {
  const div = document.createElement('div')
  render(<MyJSApp />, div)
  unmountComponentAtNode(div)
})