import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Button from './Button';

const componentProps = { 
    onClick: jest.fn(),
    className: 'style_class',
    content: 'Go!'
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClick.mockClear();
});

describe('<Button />', () => {
    test('should render class correctly', () => {
        const { getByRole, rerender } = render(<Button {...componentProps} />);
    
        const button = getByRole('button');
    
        expect(button.className).toContain('style_class');
    
        rerender(
            <Button 
                {...componentProps}
                className={undefined}
            />
        );
    
        expect(button.className).not.toContain('style_class');
    });

    test('should render content correctly', () => {
        const { getByRole } = render(<Button {...componentProps} />);

        const button = getByRole('button');

        expect(button.textContent).toEqual('Go!');
    });
    
    test('should ignore function if disabled', () => {
        const { getByRole, rerender } = render(
            <Button
                {...componentProps}
                disabled
            />);

        const button = getByRole('button');
    
        fireEvent.click(button);
    
        expect(componentProps.onClick).toHaveBeenCalledTimes(0);

        rerender(<Button {...componentProps} />);

        fireEvent.click(button);

        expect(componentProps.onClick).toHaveBeenCalledTimes(1);
    });

    test('should render a button with icon', () => {
        const { getByRole, rerender } = render(
            <Button 
                {...componentProps} 
                icon={'icon-share'} 
            />
        );

        const button = getByRole('button');

        expect(button.className).toContain('--icon');
        expect(button.children).toHaveLength(1);
        
        rerender(<Button {...componentProps} />);

        expect(button.className).not.toContain('--icon');
        expect(button.children).toHaveLength(0);
    });

    test('should call function on click', () => {
        const { getByRole } = render(<Button {...componentProps} />);

        const button = getByRole('button');
    
        fireEvent.click(button);
        fireEvent.click(button);
    
        expect(componentProps.onClick).toHaveBeenCalledTimes(2);
    });

    test('should set button type correctly', () => {
        const { getByRole, rerender } = render(
            <Button 
                {...componentProps}
                type={undefined}
            />);

        const button: any = getByRole('button');

        expect(button.type).toEqual('submit');
            
        rerender(
            <Button 
                {...componentProps}
                type="reset"
            />);
        
        expect(button.type).toEqual('reset');
    });
});
