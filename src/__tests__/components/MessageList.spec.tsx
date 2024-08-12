import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { onSnapshot } from 'firebase/firestore';
import { MessageType } from '../../components/MessageList';
import MessageList from '../../components/MessageList';

// Mock the Firebase Firestore methods
jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  onSnapshot: jest.fn(),
}));

jest.mock('../../config/firebaseConfig', () => ({
    db: jest.fn(),
}));

describe('MessageList Component', () => {
  const mockMessages: MessageType[] = [
    {
      content: 'Test message 1',
      date: { seconds: 1629813600, nanoseconds: 0 }, // 24 Aug 2021, 08:00:00 UTC
    },
    {
      content: 'Test message 2',
      date: { seconds: 1629900000, nanoseconds: 0 }, // 25 Aug 2021, 08:00:00 UTC
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('displays a loading spinner initially', () => {
    (onSnapshot as jest.Mock).mockImplementation(() => jest.fn()); // Mock the onSnapshot method to do nothing
    render(<MessageList />);

    // Check if the spinner is in the document
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
  });

  it('renders messages after data is loaded', async () => {
    const mockSnapshot = {
      docs: mockMessages.map((msg) => ({
        id: `${msg.date.seconds}`,
        data: () => msg,
      })),
    };

    // Mock the onSnapshot method to immediately call its callback with mock data
    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      callback(mockSnapshot);
      return jest.fn(); // Unsubscribe function
    });

    render(<MessageList />);

    // Wait for the messages to be rendered
    await waitFor(() => {
      const message1 = screen.getByText('Test message 1');
      const message2 = screen.getByText('Test message 2');
      expect(message1).toBeInTheDocument();
      expect(message2).toBeInTheDocument();
    });
  });

  it('displays messages in descending order of date', async () => {
    const mockSnapshot = {
      docs: mockMessages.map((msg) => ({
        id: `${msg.date.seconds}`,
        data: () => msg,
      })),
    };

    // Mock the onSnapshot method
    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      callback(mockSnapshot);
      return jest.fn(); // Unsubscribe function
    });

    render(<MessageList />);

    // Wait for the messages to be rendered
    await waitFor(() => {
      const messages = screen.getAllByText(/Test message/);
      expect(messages[0]).toHaveTextContent('Test message 2'); // Most recent
      expect(messages[1]).toHaveTextContent('Test message 1'); // Older
    });
  });
});
