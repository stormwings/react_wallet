import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
        };

        this.autoPlay = this.autoPlay.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.handleGoToPrevSlide = this.handleGoToPrevSlide.bind(this);
        this.handleGoToNextSlide = this.handleGoToNextSlide.bind(this);
        this.clearAutoPlay = this.clearAutoPlay.bind(this);
        this.resetAutoPlay = this.resetAutoPlay.bind(this);
    }

    componentDidMount () {
        if (this.props.autoPlay) {
            this.autoPlay();
        }
    }

    autoPlay() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.handleGoToNextSlide();
        }, 3000);
    }

    clearAutoPlay() {
        clearTimeout(this.timer);
    }

    resetAutoPlay() {
        this.clearAutoPlay();
        this.autoPlay();
    }

    goToSlide(index) {
        this.setState({ activeIndex: index });
        if (this.props.autoPlay) {
            this.resetAutoPlay();
        }
    }

    handleGoToPrevSlide() {

        let index = this.state.activeIndex;

        let { slides } = this.props;

        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        index -= 1;

        this.setState({
            activeIndex: index
        });
    }

    handleGoToNextSlide() {

        let index = this.state.activeIndex;
        let { slides } = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        index += 1;

        this.setState({
            activeIndex: index
        });

        if (this.props.autoPlay) {
            this.resetAutoPlay();
        }
    }

    render() {
        return (
            <div className="carousel">
                <div className="modal__slide">
                    <a onClick={this.handleGoToPrevSlide}>
                        <Icon name="icon-chevron" />
                    </a>
                    <ul>
                        { this.props.slides.map((slide, index) =>
                            (
                                <li
                                    className={
                                        index === this.state.activeIndex
                                            ? "carousel__slide --active"
                                            : "carousel__slide"
                                    }
                                    key={index}
                                >
                                    <span className="modal__content--title">
                                        { slide.title }
                                    </span>
                                    <div className="my1">
                                        <Icon name={slide.image} />
                                    </div>
                                    <h2>{ slide.content }</h2>
                                    <p>{ slide.subcontent }</p>
                                </li>
                            )
                        )}
                    </ul>
                    <a
                        onClick={this.handleGoToNextSlide}
                    >
                        <Icon name="icon-chevron" />
                    </a>
                </div>

                <div className="steps__dots">
                    { this.props.slides.map((slide, index) =>
                        (
                            <div
                                className={
                                    index === this.state.activeIndex
                                        ? "--dots --active"
                                        : "--dots"
                                }
                                id={`${this.props.id}_go_to_${index}`}
                                key={index}
                                onClick={() => this.goToSlide(index)}
                            />
                        )
                    )}
                </div>
                <a
                    className="button --primaryGradient"
                    id={`${this.props.id}_button`}
                    onClick={this.props.onEnter}
                >
                    { this.props.buttonContent }
                </a>
            </div>
        );
    }
}


Slider.propTypes = {
    /**
     * Set autoplay feature.
    */
    autoPlay: PropTypes.bool,
    /**
     * Button's text content.
    */
    buttonContent: PropTypes.string.isRequired,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Function to execute when modal's button is clicked.
    */
    onEnter: PropTypes.func.isRequired,
    /**
     * Array's element slider.
    */
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Slider;
