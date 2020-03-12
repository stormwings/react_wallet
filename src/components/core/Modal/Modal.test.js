import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import Modal from './Modal';


const componentProps = {
    isOpen: true,
    onClose: jest.fn(),
    id: "custom_id"
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClose.mockClear();
});


describe('<Modal />', () => {
    test('onclose button should work', () => {
        const { container } = render(
            <Modal {...componentProps}>
                <div id="Children">Children</div>
            </Modal>);
    
        fireEvent.click(container.querySelector('#custom_id_close_button'));
    
        expect(componentProps.onClose).toHaveBeenCalledTimes(1);
    });
    
    test('modal should be open', () => {
        const { container, rerender } = render(
            <Modal
                {...componentProps}
                isOpen={false}
            >
                <div id="Children">Children</div>
            </Modal>
        );
    
        expect(container.firstChild).toBeNull();
        
        rerender(
            <Modal {...componentProps}>
                <div id="Children">Children</div>
            </Modal>);
        
        expect(container.firstChild).not.toBeNull();
    });
    
    test('should render children correctly', () => {
        const children = <div id="children_component">Custom Children</div>;
    
        const { container } = render(<Modal {...componentProps}>{children}</Modal>);
    
        expect(container.querySelector('#children_component')).toBeTruthy();
        
        expect(container.querySelector('.modal__content').children[1]).toBeTruthy();
    });
});
