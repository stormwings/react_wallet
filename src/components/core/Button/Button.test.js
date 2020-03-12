import React from 'react';

import { render, fireEvent, cleanup } from '@testing-library/react';

import Button from 'src/core/Button';


const componentProps = { 
    onClick: jest.fn(),
    className: 'style_class',
    id: 'unique_id',
    content: 'Go!',
    type: 'reset'
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClick.mockClear();
});


describe('<Button />', () => {
    test('should render class correctly', () => {
        const { getByRole, rerender } = render(<Button {...componentProps} />);
    
        const button = getByRole('button');
    
        expect(button.className).toContain(componentProps.className);
    
        rerender(
            <Button 
                {...componentProps}
                className={null}
            />
        );
    
        expect(button.className).not.toContain(componentProps.className);
    });

    test('should render content correctly', () => {
        const { getByRole } = render(<Button {...componentProps} />);
    
        const button = getByRole('button');
    
        expect(button.textContent).toEqual('Go!');
    });
    
    test('should ignore function if disabled', () => {
        const { container, rerender } = render(
            <Button
                {...componentProps}
                disabled
            />);
    
        fireEvent.click(container.firstChild);
    
        expect(componentProps.onClick).toHaveBeenCalledTimes(0);

        rerender(<Button {...componentProps} />);

        fireEvent.click(container.firstChild);

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
        const { container } = render(<Button {...componentProps} />);
    
        fireEvent.click(container.firstChild);
        fireEvent.click(container.firstChild);
    
        expect(componentProps.onClick).toHaveBeenCalledTimes(2);
    });

    test('should set button type correctly', () => {
        const { container, rerender } = render(
            <Button 
                {...componentProps}
                type={null}
            />);

        const button = container.firstChild;

        expect(button.type).toEqual('submit');
            
        rerender(
            <Button 
                {...componentProps}
                type={'reset'}
            />);
        
        expect(button.type).toEqual('reset');
    });
});
