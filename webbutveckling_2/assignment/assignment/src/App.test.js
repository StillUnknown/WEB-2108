import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if something is true', () => {
  const something = true
  expect(something).toBe(true)
})

test('Check if something is false', () => {
  const something = false
  expect(something).toBe(false)
})
