import React, { useEffect, useState } from 'react';
import LinkPage from './LinkPage';
import ListPage from './ListPage';
import Pagination from './Pagination';

function Body() {
    const [isAdd, setAdd] = useState(false);

    function changeComponent() {
        setAdd(!isAdd);
    }
    
    useEffect(() => {
        
    }, []);

    const [list, setList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    };

    // passing function to LinkPage as props
    // setting newItem to list array that came from LinkPage as link
    // then passing list to ListPage as props
    function addListItem(newItem) {
        // console.log(newItem);
        // localStorage.setItem("ListItem", newItem)
        setList((prevItems) => {
            return [
                ...prevItems,
                newItem
            ];
        })
    }
    
    console.log("list", list);

    return (
        <div>
        {
            isAdd ? 
            <LinkPage onAdd={addListItem} changeComponent={changeComponent} /> :
            <div>
                <ListPage list={list} setList={setList} posts={currentPosts} changeComponent={changeComponent} />
                <Pagination paginate={paginate} postsPerPage={postsPerPage} totalPosts={list.length} />
            </div>
        }
        </div>
    );
}

export default Body;