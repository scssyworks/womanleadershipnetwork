import React, { Component } from 'react';
import Error from '../../atoms/Error';
import LinkItem from '../LinkItem';
import ListItem from '../../atoms/ListItem';

class List extends Component {
    renderLinks = (list) => {
        return list.map(({ title, link }, index) => (
            <LinkItem href={link} liClassName="wwn-list-li" className="www-list-li-link" key={index}>
                {title}
            </LinkItem>
        ));
    };
    renderList = (list) => {
        return list.map(({ title }, index) => (
            <ListItem className="www-list-li" key={index}>
                {title}
            </ListItem>
        ));
    };
    render() {
        const { list, type } = this.props;
        if (Array.isArray(list)) {
            if (type === 'links') {
                return (
                    <ul className='wwn-list'>
                        {this.renderLinks(list)}
                    </ul>
                );
            }
            return (
                <ul className='wwn-list'>
                    {this.renderList(list)}
                </ul>
            );
        }
        return <Error message="List is empty" />;
    }
}

export default List;