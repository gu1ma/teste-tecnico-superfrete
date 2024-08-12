import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputMessage from '../../components/InputMessage';
import { addDoc } from 'firebase/firestore';
import { db } from '../../config/firebaseConfig';

jest.mock('firebase/firestore', () => ({
    addDoc: jest.fn(),
    collection: jest.fn(),
}));

jest.mock('../../config/firebaseConfig', () => ({
    db: jest.fn(),
}));

describe('components/InputMessage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render the component correcly', () => {
        render(<InputMessage />);
        const inputElement = screen.getByPlaceholderText('Insira sua mensagem*');
        expect(inputElement).toBeInTheDocument();
    });

    it('should update the input value when the user types', () => {
        render(<InputMessage />);
        const inputElement = screen.getByPlaceholderText('Insira sua mensagem*');
        fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });
        expect(inputElement).toHaveValue('Hello, world!');
    });

    it('should call the send function when the button is clicked', () => {
        (addDoc as jest.Mock).mockResolvedValue({ id: '12345' });
        render(<InputMessage />);
        const inputElement = screen.getByPlaceholderText('Insira sua mensagem*');
        const buttonElement = screen.getByText('Enviar');
        fireEvent.change(inputElement, { target: { value: 'Hello, world!' } });
        fireEvent.click(buttonElement);

        expect(addDoc).toHaveBeenCalledTimes(1);
    });
});