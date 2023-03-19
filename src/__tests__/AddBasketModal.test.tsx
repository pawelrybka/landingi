import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCartModal from '../Components/AddBasketModal/AddBasketModal';

it('shows "Invalid ID" error message when user enters a value outside of range 1-20', () => {
    const { getByLabelText, getByText, queryByText } = render(<AddCartModal addBasketModalVisible={true} setAddBasketModalVisible={jest.fn()} />);
    const input = getByLabelText(/Enter basket ID \(1-20\):/i);
    const button = getByText('Add new basket');
  
    fireEvent.change(input, { target: { value: 21 }});
    fireEvent.click(button);
  
    expect(queryByText('Invalid ID')).toBeInTheDocument();
});






