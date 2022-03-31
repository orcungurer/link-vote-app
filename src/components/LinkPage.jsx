import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

function LinkPage(props) {

    const [link, setLink] = useState({
        name: "",
        url: "",
        count: 0
    });
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
    
    useEffect(() => {
        //Runs only on the first render
        // const storedLink = JSON.parse(localStorage.getItem("storedLink"));
        // if(storedLink) {
        // }
    }, []);

    function handleChange(event) {
        const {name, value} = event.target;
        setLink((prevValue) => {
            console.log(prevValue);
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitLink() {
        // localStorage.setItem("storedLink", JSON.stringify(link));
        props.onAdd(link);
        
        Toast.fire({
            icon: 'success',
            title: `<b>${link.name}</b> added.`
        })
    }

    return ( 
        <div className='add-new-link-section'>
            <div className='go-back-div' onClick={props.changeComponent}>
                <h6>
                    <FontAwesomeIcon className='fa-icons arrow-left-icon' icon={faArrowLeft} />
                    Return to List
                </h6>
            </div>
            <div>
                <h4>Add New Link</h4>
                <form>
                    <div className='input-group'>
                        <label>Link Name:</label>
                        <input
                            onChange={handleChange}
                            name="name"
                            type="text" 
                            placeholder="e.g. Alphabet"
                        />
                    </div>
                    <div className='input-group'>
                        <label>Link URL:</label>
                        <input
                            onChange={handleChange}
                            name="url"
                            type="text" 
                            placeholder="e.g. http://abc.xyz"
                        />
                    </div>
                    <Button onClick={submitLink} className='add-link-button' variant="dark">ADD</Button>
                </form>
            </div>
        </div>
    );
}

export default LinkPage;