import { render } from '@testing-library/react'; 
import React from 'react';
import App from './App';

describe('test', () => {
   it('test - ', () => {
      render(<App />);
      expect(1).toBe(1);
   });
});