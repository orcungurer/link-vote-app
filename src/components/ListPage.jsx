import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ListItem from './ListItem';
import Dropdown from 'react-bootstrap/Dropdown';
var _ = require('lodash');

function ListPage(props) {
    console.log("ListPage Props: ", props);
    const {list} = props;

    useEffect(() => {
        
    }, [list]);

    function deleteLink(id) {
        props.setList((prevLinks) => {
          // return the ones below to set them as new links except id.
          return prevLinks.filter((linkItem, index) => {
            return index !== id;
          });
        });
    }

    function sortMostVoted(count, id) {
        const newList = _.orderBy(list, [li => li.name], ['desc']);
        console.log("Most Voted Sort:", newList);
        newList.map((item, index) => {
            if(index === id) {
                item.count = count;
            }
        })
        props.setList(newList);
    }

    function sortLeastVoted(count, id) {
        const newList = _.orderBy(list, [li => li.name], ['asc']);
        console.log("Least Voted Sort:", newList);
        newList.map((item, index) => {
            if(index === id) {
                item.count = count;
            }
        })
        props.setList(newList);
    }

    return (
        <div className='list-page-section'>
            <div className='link-submit'>
                <Button onClick={props.changeComponent} className='link-submit-button' variant="outline-dark">
                    <FontAwesomeIcon className='fa-icons add-icon' icon={faPlus} />
                </Button>
                <h3 className='link-submit-text'>SUBMIT A LINK</h3>
            </div>
            <hr />

            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Order by
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={sortMostVoted}>Most Voted</Dropdown.Item>
                    <Dropdown.Item onClick={sortLeastVoted}>Least Voted</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {props.posts.reverse().map((item, index) => (
                <ListItem 
                    key={index} id={index} onDelete={deleteLink} 
                    onSortMost={sortMostVoted} onSortLeast={sortLeastVoted}
                    name={item.name} url={item.url}
                />
            ))}
        </div>
    );
}

export default ListPage;