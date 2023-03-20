import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Components/Header/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header', () => {
    test('should render "Dashboard" text', () => {
        const { getByText } = render(<Header />);
        const dashboardText = getByText(/Dashboard/i);
        expect(dashboardText).toBeInTheDocument();
    });

    test('should render "New basket" button', () => {
        const { getByText } = render(<Header />);
        const newBasketButton = getByText(/New basket/i);
        expect(newBasketButton).toBeInTheDocument();
    });
});






