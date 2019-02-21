import React from 'react';
import './LinkItem.scss';
import Link from '../../atoms/Link';
import ListItem from '../../atoms/ListItem';

const LinkItem = ({ href, liClassName, className, children }) => (
    <ListItem className={liClassName}>
        <Link href={href} className={className}>
            {children}
        </Link>
    </ListItem>
);

export default LinkItem;