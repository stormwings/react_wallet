import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';

import Dropdown from './Dropdown';


const componentProps = {
    className: 'dropdown__account',
    ulClassName: '--rightEdge',
    onClickDropdown: e => e.stopPropagation(),
    id: 'catalog_balance_available_dropdown',
    buttonClass: 'button --primaryGradient',
    buttonContent: 'Button',
    onClickButton: jest.fn(),
    list: [
        { onClick: jest.fn(), content: "Cargar saldo" },
        { onClick: jest.fn(), content: "Cargar criptos", disabled: true }
    ],
    children: <div id="children">Children element</div>,
    disabled: false
};

afterEach(cleanup);
beforeEach(() => {
    componentProps.onClickButton.mockClear();
    componentProps.list[0].onClick.mockClear();
    componentProps.list[1].onClick.mockClear();
});


describe('<Dropdown />', () => {
    test('principal button should render correctly', () => {
        const { container, rerender } = render(<Dropdown {...componentProps} />);
    
        const button = container.querySelector('a');
    
        fireEvent.click(button);
    
        expect(button.className).toContain('button --primaryGradient');
    
        expect(button.textContent).toEqual('Button');
    
        expect(componentProps.onClickButton).toHaveBeenCalled();
    
        rerender(
            <Dropdown
                {...componentProps}
                buttonClass={null}
            />);
    
        expect(button.className).toContain('dropdown__button');
    });
        
    test('children should render correctly', () => {        
        const { container } = render(<Dropdown {...componentProps} />);
    
        const component = container.querySelector('.dropdown > #children');
    
        expect(component.textContent).toEqual('Children element');
    });
    
    test('should render class correctly', () => {
        const { container, rerender } = render(<Dropdown {...componentProps} />);
    
        const dropdown = container.firstChild;
    
        expect(dropdown.className).toContain('dropdown__account');
    
        rerender(
            <Dropdown 
                {...componentProps}
                className={null}
            />
        );
    
        expect(dropdown.className).toEqual('dropdown ');
    });
    
    test('should render item class correctly', () => {
        const { container, rerender } = render(
            <Dropdown 
                {...componentProps} 
            />);
    
        const listContainer = container.querySelector('.dropdown > ul');
    
        expect(listContainer.className).toContain('--rightEdge');
    
        rerender(
            <Dropdown 
                {...componentProps}
                ulClassName={null}
            />
        );
    
        expect(listContainer.className).toEqual('dropdown__list ');
    });
    
    test("should not render list if disabled", () => {
        const { container, rerender } = render(
            <Dropdown
                {...componentProps}
                list={undefined}
            />);
        
        expect(container.querySelectorAll('li')[0]).toBeUndefined();
        
        rerender(
            <Dropdown
                {...componentProps}
                disabled
            />);
    
        expect(container.querySelector('ul')).toBeNull();
    });
    
    test("should render list correctly", () => {
        const { container } = render(<Dropdown {...componentProps} />);
    
        const list = container.querySelectorAll('li');
    
        expect(list).toHaveLength(2);
    
        expect(list[0].textContent).toEqual('Cargar saldo');
    
        expect(list[1].textContent).toEqual('Cargar criptos');
    });
    
    test('should call function on click each item except disabled', () => {
        const { container } = render(<Dropdown {...componentProps} />);
    
        const list = container.querySelectorAll('li');
    
        fireEvent.click(list[0]);
    
        expect(componentProps.list[0].onClick).toHaveBeenCalled();
    
        fireEvent.click(list[1]);
    
        expect(componentProps.list[1].onClick).not.toHaveBeenCalled();
    });
});
