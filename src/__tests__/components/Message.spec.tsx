
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../../components/Message';
describe('@components/Message', () => {
    it('renders the message text correctly', () => {
        const testMessage = 'This is a test message';
        const testDate = '2024-08-10';
    
        render(<Message message={testMessage} date={testDate} />);
    
        // Assert that the message text is rendered correctly
        const messageElement = screen.getByText(testMessage);
        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent(testMessage);
    });
    
    it('renders the date text correctly', () => {
        const testMessage = 'This is a test message';
        const testDate = '2024-08-10';
    
        render(<Message message={testMessage} date={testDate} />);
    
        // Assert that the date text is rendered correctly
        const dateElement = screen.getByText(testDate);
        expect(dateElement).toBeInTheDocument();
        expect(dateElement).toHaveTextContent(testDate);
    });
})