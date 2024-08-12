import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../../components/Header'

describe('@components/Header', () => {
    it('should render the component corretly', () => {
        render(<Header />);
        const logo = screen.getByAltText('SuperFrete');
        expect(logo).toHaveAttribute('src', 'logo.svg');
    });
})