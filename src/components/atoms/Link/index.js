import React from 'react';
import './Link.scss';

const Link = ({ href, className, children, role = 'button' }) => {
    if (href) {
        return (
            <a href={href} className={className}>
                {children}
            </a>
        );
    }
    return (
        <a role={role} tabIndex="0" className={className}>
            {children}
        </a>
    );
};

export default Link;