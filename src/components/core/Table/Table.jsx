import React from 'react';

import PropTypes from 'prop-types';

import StylesConstants from '../../utils/stylesConstants';


const RPTHead = ({ headers, withoutHeaders, headClasses }) => {
    if (withoutHeaders || headers.length === 0) {return <thead />;}

    const head = headers.map((header) => <th key={header.accessor}>{ header.name }</th>);

    return (
        <thead>
            <tr className={headClasses || ''}>{ head }</tr>
        </thead>
    );
};

const RPTd = ({ header, data }) => {
    return header.envelop 
        ? <td className={header.className}>
            <header.envelop
                accessor={header.accessor}
                data={data}
            />
        </td>
        : <td className={header.className}>{ data[header.accessor] }</td>;
};

const RPTr = ({ headers, obj, onClickRow, rowClasses, id }) => {
    const cells = headers.map((header) => (
        <RPTd
            data={obj}
            header={header}
            key={header.accessor}
        />
    ));

    return (
        <tr
            className={rowClasses}
            id={`${id}_row_${obj.id}`}
            onClick={() => onClickRow ? onClickRow(obj) : null}
        >
            { cells }
        </tr>
    );
};

const RPTBody = ({ headers, data, onClickRow, rowClasses, noData, id }) => {
    if (data.length > 0) {
        const rows = data.map((obj) => (
            <RPTr
                headers={headers}
                id={id}
                key={obj.id}
                obj={obj}
                onClickRow={onClickRow}
                rowClasses={rowClasses}
            />
        ));

        return <tbody>{ rows }</tbody>;
    } else {
        return (
            <tbody>
                <tr className="table__empty">
                    <td colSpan="6">
                        <div className="--empty">{ noData }</div>
                    </td>
                </tr>
            </tbody>
        );
    }
};

const Table = props => {
    const { 
        data,
        className,
        col,
        headClasses,
        headers,
        withoutHeaders,
        id,
        noData,
        onClickRow,
        rowClasses } = props;

    if (!data) {return null;}

    return (
        <table className={`${className || ''} ${col ? StylesConstants.cols[col] : ''}`}>
            <RPTHead
                headClasses={headClasses}
                headers={headers}
                withoutHeaders={withoutHeaders}
            />
            <RPTBody
                data={data}
                headers={headers}
                id={id}
                noData={noData}
                onClickRow={onClickRow}
                rowClasses={rowClasses}
            />
        </table>
    );
};


RPTHead.propTypes = {
    /**
     * Override or extend the header styles.
     */
    headClasses: PropTypes.string,
    /**
     * The data of the header.
     */
    headers: PropTypes.arrayOf(PropTypes.object),
    /**
     * Show or hide header.
     */
    withoutHeaders: PropTypes.bool,
};

RPTd.propTypes = {
    /**
     * The content of the row.
     */
    data: PropTypes.object,
    /**
     * The header's utils to format the data.
     */
    header: PropTypes.object
};

RPTr.propTypes = {
    /**
     * the content of the table's header to format obj data.
     */
    headers: PropTypes.arrayOf(PropTypes.object),
    /**
     * Specifies a Unique id to the table.
     * Can be used by CSS and Integration Tests to perform certain tasks
     */
    id: PropTypes.string,
    /**
     * The content of the table.
     */
    obj: PropTypes.object,
    /**
     * Callback fired when the table's row clicked.
     *
     * @param {object} event The event source of the callback.
     */
    onClickRow: PropTypes.func,
    /**
     * Override or extend the row style.
     */
    rowClasses: PropTypes.string
};

Table.propTypes = {
    /**
     * Override or extend the styles applied to the component.
     * See [Lilith CSS API](#css) below for more details.
    */
    className: PropTypes.string,
    /**
     * The number of columns.
    */
    col: PropTypes.number,
    /**
     * The content of the table.
    */
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Override or extend the header table styles.
    */
    headClasses: PropTypes.string,
    /**
     * the content of the table's header.
    */
    headers: PropTypes.arrayOf(PropTypes.object).isRequired,
    /**
     * Specifies a Unique id to the table.
     * Can be used by CSS and Integration Tests to perform certain tasks
    */
    id: PropTypes.string,
    /**
     * Message when table dont have data to show.
    */
    noData: PropTypes.string.isRequired,
    /**
     * Callback fired when the table's row clicked.
     *
     * @param {object} event The event source of the callback.
    */
    onClickRow: PropTypes.func,
    /**
     * Override or extend the table's row style.
    */
    rowClasses: PropTypes.string,
    /**
     * Show or hide table's header.
    */
    withoutHeaders: PropTypes.bool
};


export default Table;
