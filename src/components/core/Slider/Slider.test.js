import React from 'react';

import { cleanup, render, fireEvent } from '@testing-library/react';

import Slider from './Slider';


afterEach(cleanup);

const componentProps = {
    slides: [
        {
            title: "welcome",
            content: "now you are part of the digital economy",
            subcontent: "start your path through our platform"
        },
        {
            title: "digital account",
            content: "we are your gateway to the crypto world",
            subcontent: "load balance to buy and sell in the simplest way"
        }
    ],
    id: "home_initial_modal_slider",
    autoPlay: true,
    onEnter: jest.fn(),
    buttonContent: "Aceptar"
};


describe('<Slider />', () => {
    test('sliders should render correctly', () => {
        const { container } = render(<Slider {...componentProps} />);
    
        const slides = container.querySelectorAll('.carousel__slide');
    
        expect(slides).toHaveLength(2);
    
        expect(slides[0].getElementsByTagName('span')[0].textContent).toEqual("welcome");
        expect(slides[0].getElementsByTagName('h2')[0].textContent).toEqual("now you are part of the digital economy");
        expect(slides[0].getElementsByTagName('p')[0].textContent).toEqual("start your path through our platform");
    
        expect(slides[1].getElementsByTagName('span')[0].textContent).toEqual("digital account");
        expect(slides[1].getElementsByTagName('h2')[0].textContent).toEqual("we are your gateway to the crypto world");
        expect(slides[1].getElementsByTagName('p')[0].textContent).toEqual("load balance to buy and sell in the simplest way");
    });
    
    test('dot buttons works', () => {
        let { container } = render(<Slider {...componentProps} />);
    
        const dots = container.querySelectorAll('.--dots');
        
        expect(dots).toHaveLength(2);
    
        expect(dots[0].id).toEqual(`${componentProps.id}_go_to_0`);
        expect(dots[1].id).toEqual(`${componentProps.id}_go_to_1`);
    
        fireEvent.click(container.querySelector('#home_initial_modal_slider_go_to_1'));
    
        expect(container.querySelectorAll('.--dots')[0].className).toEqual('--dots');
        expect(container.querySelectorAll('.--dots')[1].className).toEqual('--dots --active');
    
        fireEvent.click(container.querySelector('#home_initial_modal_slider_go_to_0'));
    
        expect(container.querySelectorAll('.--dots')[0].className).toEqual('--dots --active');
        expect(container.querySelectorAll('.--dots')[1].className).toEqual('--dots');
    });
});
