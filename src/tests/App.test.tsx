/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Main page', () => {
  test('expect to render Store Parts title', () => {
    render(<App />);
    const title = screen.getByText(/Store Parts/i);
    expect(title).toBeInTheDocument();
  });
  it('should render text field', async () => {
    render(<App />);
    const textFieldElement = screen.getByPlaceholderText(/search.../i);
    expect(textFieldElement).toBeInTheDocument();
  });

  it('should render button', async () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Price Order/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('should change icon after button click', async () => {
    render(<App />);
    const { queryByTestId, queryAllByTestId } = render(<App />);
    let iconDown = queryByTestId('arrow-down');
    let iconUp = queryByTestId('arrow-up');
    expect(iconDown).not.toBeTruthy();
    expect(iconUp).not.toBeTruthy();
    const buttonElement = queryAllByTestId('button-reOrder');
    fireEvent.click(buttonElement[1] as HTMLElement);
    iconDown = queryByTestId('arrow-down');
    expect(iconDown).toBeTruthy();
    iconUp = queryByTestId('arrow-up');
    expect(iconUp).not.toBeTruthy();
    fireEvent.click(buttonElement[1] as HTMLElement);
    iconDown = queryByTestId('arrow-down');
    expect(iconDown).not.toBeTruthy();
    iconUp = queryByTestId('arrow-up');
    expect(iconUp).toBeTruthy();
  });

  it('should change search text when typing', async () => {
    render(<App />);
    const textFieldElement: HTMLInputElement = screen.getByPlaceholderText(/search.../i);
    expect(textFieldElement).toBeInTheDocument();
    fireEvent.change(textFieldElement, { target: { value: 'Mo' } });
    expect(textFieldElement.value).toBe('Mo');
  });
});
