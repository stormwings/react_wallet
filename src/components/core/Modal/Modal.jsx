import React from 'react';

import PropTypes from 'prop-types';

import { Icon } from 'ripio-icons';


const CloseButton = ({ onClose, id }) => 
    onClose ? 
        <a
            id={`${id}_close_button`}
            onClick={onClose ? onClose : null}
        >
            <Icon name="icon-close" />
        </a>
        : null;

const RPModal = ({ isOpen, children, onClose, id }) =>  {

    return isOpen
        ? (
            <div
                className="modal__overlay"
                id={id || 'modal'}
                onClick={e => e.stopPropagation()}
            >
                <div className="modal__content">
                    <CloseButton
                        id={id || 'modal'}
                        onClose={onClose}
                    />
                    { children }
                </div>
            </div>
        )
        : null;
};


CloseButton.propTypes = {
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,

    /**
     * Callback that checks loading.
     *
     * @param {object} event The event source of the callback.
    */
    onClose: PropTypes.func.isRequired
};

RPModal.propTypes = {
    /**
     * The component that load if not loading.
    */
    children: PropTypes.node.isRequired,
    /**
     * Specifies a Unique id to the button element.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * If `true`, the modal will be open.
    */
    isOpen: PropTypes.bool.isRequired,
    /**
     * Callback that checks loading.
     *
     * @param {object} event The event source of the callback.
    */
    onClose: PropTypes.func.isRequired,
};


export default RPModal;
