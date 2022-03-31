import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function ListItem(props) {
    console.log("ListItem Props: ", props);

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
        props.onSortMost(count, props.id);
    }

    function decrease() {
        setCount(count - 1);
        props.onSortLeast(count, props.id);
    }

    function handleDelete() {
        Swal.fire({
            title: 'Do you want to remove?',
            text: `${props.name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Removed.',
                    text: `${props.name}`,
                    icon: 'success',
                    confirmButtonColor: '#3085d6'
                })
                props.onDelete(props.id);
            }
        })
    }

    return (
        <div className='list-item'>
            <span onClick={handleDelete} className='delete-button'><FontAwesomeIcon className='fa-icons delete-icon' icon={faTrash} /></span>
            <div className='list-item-left'>
                <Button className='link-submit-button' variant="outline-dark">
                    <h1>{count}</h1>
                    <h6>POINTS</h6>
                </Button>
            </div>
            <div className='list-item-right'>
                <div className='link-details'>
                    <h5>{props.name}</h5>
                    <p>({props.url})</p>
                </div>
                <div className='vote-buttons'>
                    <span onClick={increase} className='up-vote-button'><FontAwesomeIcon className='fa-icons vote-icon' icon={faArrowUp} />Up Vote</span>
                    <span onClick={decrease} className='down-vote-button'><FontAwesomeIcon className='fa-icons vote-icon' icon={faArrowDown} />Down Vote</span>
                </div>
            </div>
        </div>
    );
}

export default ListItem;