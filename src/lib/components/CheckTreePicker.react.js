import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CheckTreePicker as RsuiteCheckTreePicker} from 'rsuite';

import {CustomProvider} from 'rsuite';
import nl_NL from 'rsuite/locales/nl_NL';

const CheckTreePicker = (props) => {
    const {
        id,
        appearance,
        block,
        cascade,
        cleanable,
        countable,
        defaultExpandAll,
        custom_locale,
        data,
        placement,
        selected,
        style,
        setProps,
    } = this.props;

    return (
        <CustomProvider locale={custom_locale}>
            <RsuiteCheckTreePicker
                id={id}
                appearance={appearance}
                cascade={cascade}
                cleanable={cleanable}
                countable={countable}
                block={block}
                defaultExpandAll={defaultExpandAll}
                data={data}
                defaultValue={selected}
                placement={placement}
                onChange={(value) => setProps({selected: value})}
                virtualized={true}
                style={style}
            />
        </CustomProvider>
    );
};

CheckTreePicker.defaultProps = {
    appearance: 'default',
    block: false,
    cascade: true,
    cleanable: true,
    countable: false,
    defaultExpandAll: false,
    custom_locale: nl_NL,
    placement: 'bottomStart',
    data: [
        {
            label: 'A',
            value: 'a',
            children: [
                {label: 'A1', value: 'a1'},
                {label: 'A2', value: 'a2'},
            ],
        },
        {
            label: 'B',
            value: 'b',
            children: [
                {
                    label: 'B1',
                    value: 'b1',
                    children: [
                        {label: 'B11', value: 'b11'},
                        {label: 'B12', value: 'b12'},
                    ],
                },
                {label: 'B2', value: 'b2'},
            ],
        },
    ],
    selected: [],
};

CheckTreePicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * The appearance of the component. Can be `default` or `subtle`.
     */
    appearance: PropTypes.string,

    /**
     * Whether to take up the full width of the parent container.
     */
    block: PropTypes.bool,

    /**
     * Whether to enable cascade selection.
     */
    cascade: PropTypes.bool,

    /**
     * Whether to display the clear button
     */
    cleanable: PropTypes.bool,

    /**
     * Whether to display the count of selected items
     */
    countable: PropTypes.bool,

    /**
     * The Tree Data
     */
    data: PropTypes.array,

    /**
     * Custom locale for component
     */
    custom_locale: PropTypes.object,

    /**
     * Whether to expand all nodes by default
     */
    defaultExpandAll: PropTypes.bool,

    /**
     * The placement of the popup. Can be 'bottomStart', 'bottomEnd', 'topStart', 'topEnd'.
     */
    placement: PropTypes.string,

    /**
     * Selected value(s)
     */
    selected: PropTypes.arrayOf(PropTypes.string),

    /**
     * Custom styling of the component.
     */
    style: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default CheckTreePicker;
