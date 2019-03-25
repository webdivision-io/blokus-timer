import React from 'react';
import cln from 'classnames';
import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ children, disabled, className, variant, ...rest }) {
    const classes = cln(css.button, className, {
        [css[`button--${variant}`]]: variant,
        [css.disabled]: disabled,
    });

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
};

export default Button;
