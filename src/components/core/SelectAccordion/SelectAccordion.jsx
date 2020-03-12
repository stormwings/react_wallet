import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


const AccordionContent = props => {
    const { radio, dropOpen, radioName, onSelect, onClickAccordion, makeRef, selectedGateway, id, withoutInput } = props;

    return (
        <div
            className={`accordion__content${dropOpen ? ' --open' : ''} ${radio.disabled ? '--disabled' : ''}`}
            id={`${id}_${radio.value}`}
            onClick={() => onClickAccordion
                ? onClickAccordion(radioName, radio.value)
                : null
            }
        >
            <div className="accordion__content--visible">
                <div className="accordion--title">
                    { withoutInput
                        ? null
                        : <Fragment>
                            <input
                                defaultChecked={selectedGateway === radio.value ? true : null}
                                disabled={radio.disabled ? true : null}
                                id={`${id}_${radio.value}_radio_button`}
                                name={radioName}
                                onChange={e => radio.disabled ? null : onSelect(e)}
                                ref={input => makeRef(input, radio.value)}
                                type="radio"
                                value={radio.value}
                            />
                            <span />
                        </Fragment>
                    }
                    <Icon name={`icon-${radio.value}`} />
                    <div className="flex flex-column">
                        <label className="inline-block font2">{ radio.leftLabel }</label>
                        <span className="font1">{ radio.description }</span>
                    </div>
                </div>

                <div className="accordion--available">
                    <div className="accordion--amount">
                        <span className="font1 mr2">{ radio.rightLabel }</span>
                    </div>
                    <div className="accordion--amount--icon">
                        <span>
                            <a id={`${id}_${radio.value}_chevron`}>
                                <Icon name={radio.drop ? 'icon-chevron' : null} />
                            </a>
                        </span>
                    </div>
                </div>

            </div>
            { radio.drop && !radio.disabled ? radio.drop : null }
        </div>
    );
};

const Accordion = ({ radioList, radioName, onSelect, selectedGateway, dropsOpen, onClickAccordion, makeRef, id, withoutInput }) => {
    const list = radioList.map(radio =>
        (
            <AccordionContent
                dropOpen={dropsOpen[`drop-${radio.value}`]}
                id={id}
                key={radio.leftLabel}
                makeRef={makeRef}
                onClickAccordion={onClickAccordion}
                onSelect={onSelect}
                radio={radio}
                radioName={radioName}
                selectedGateway={selectedGateway}
                withoutInput={withoutInput}
            />
        )
    );

    return <div className="accordion">{ list }</div>;
};

class SelectAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOnClickAccordion = this.handleOnClickAccordion.bind(this);
        this.makeRef = this.makeRef.bind(this);
    }

    handleOnClickAccordion(name, value) {
        this.setState({ [`drop-${value}`]: !this.state[`drop-${value}`] });
        this.props.radioList.map(radio => value !== radio.value
            ? this.setState({
                [`drop-${radio.value}`]: false
            })
            : null
        );
        if (this[`input-${value}`])
        {this[`input-${value}`].click();}
    }

    makeRef(input, value) {
        this[`input-${value}`] = input;
    }

    render() {
        return (
            <Accordion
                dropsOpen={this.state}
                id={this.props.id}
                makeRef={this.makeRef}
                onClickAccordion={this.handleOnClickAccordion}
                onSelect={this.props.onSelect}
                radioList={this.props.radioList}
                radioName={this.props.radioName}
                selectedGateway={this.props.selectedGateway}
                withoutInput={this.props.withoutInput}
            />
        );
    }
}


AccordionContent.propTypes = {
    /**
     * Accordion class when open.
    */
    dropOpen: PropTypes.bool,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Radio input ref.
    */
    makeRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func, 
        // Or the instance of a DOM native element (see the note about SSR)
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired,
    /**
     * Drop all accordion's items.
    */
    onClickAccordion: PropTypes.func.isRequired,
    /**
     * Function when accordion's item selected.
    */
    onSelect: PropTypes.func.isRequired,
    /**
     * Radio object item.
    */
    radio: PropTypes.object.isRequired,
    /**
     * Accordion title
    */
    radioName: PropTypes.string,
    /**
     * Selected item string
    */
    selectedGateway: PropTypes.string,
    /**
     * Don't use input,
    */
    withoutInput: PropTypes.bool,
};

Accordion.propTypes = {
    /**
     * Parent state to check if open.
    */
    dropsOpen: PropTypes.object.isRequired,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Radio input ref.
    */
    makeRef: PropTypes.oneOfType([
        // Either a function
        PropTypes.func, 
        // Or the instance of a DOM native element (see the note about SSR)
        PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ]).isRequired,
    /**
     * Drop all accordion's items.
    */
    onClickAccordion: PropTypes.func.isRequired,
    /**
     * Function when accordion's item selected.
    */
    onSelect: PropTypes.func.isRequired,
    /**
     * Array's radio button.
    */
    radioList: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Accordion title
    */
    radioName: PropTypes.string,
    /**
     * Selected item string
    */
    selectedGateway: PropTypes.string,
    /**
     * Don't use input,
    */
    withoutInput: PropTypes.bool
};

SelectAccordion.propTypes = {
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Function when accordion's item selected.
    */
    onSelect: PropTypes.func.isRequired,
    /**
     * Array's radio button.
    */
    radioList: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Accordion title
    */
    radioName: PropTypes.string,
    /**
     * Selected item string
    */
    selectedGateway: PropTypes.string,
    /**
     * Don't use input,
    */
    withoutInput: PropTypes.bool,
};


export default SelectAccordion;
