import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {CheckTreePicker as RsuiteCheckTreePicker} from 'rsuite';

import {CustomProvider} from 'rsuite';
import nl_NL from 'rsuite/locales/nl_NL';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
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

CheckTreePicker.defaultProps = {};

CheckTreePicker.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,
};

export default CheckTreePicker;
