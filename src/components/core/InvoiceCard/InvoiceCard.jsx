import React from 'react';

import Container from './../Container';

import Card from './../Card';

import PropTypes from 'prop-types';


const InvoiceTitle = ({ title }) => title
    ? <span className="invoice__card--title">{title}</span>
    : null;

const InvoiceCard = props => {
    const { title, children, disclaimers } = props;

    return (
        <Container>
            <Card
                className="invoice__card --start3"
                col={8}
            >
                <InvoiceTitle title={title} />
                {children}
            </Card>
            {disclaimers}
        </Container>
    );
};


InvoiceTitle.propTypes = {
    /**
     * Title text
    */
    title: PropTypes.string
};

InvoiceCard.propTypes = {
    /**
     * The content of the component.
    */
    children: PropTypes.node.isRequired,
    /**
     * The disclaimers of the component.
    */
    disclaimers: PropTypes.node,
    /**
     * Title text
    */
    title: PropTypes.string
};


export default InvoiceCard;
