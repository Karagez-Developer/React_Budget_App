import React, { useEffect, useState } from 'react'
import './SearchPosts.css'
import src_loup from'./img/search_icon.png';
import { Modal } from './modal/Modal';
import { Load } from './load/Load';
import { Pagination } from './pagination/Pagination';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Searching by post's title

// Add oportunity delete post

// Add oportunity add post to use modal window

// Add oportunity - pagination

// Add oportunity - sort by title or discription

export const SearchPosts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [limit] = useState(10);

    const [selectValue, setSelectValue] = useState('title');

    // API for posts
    useEffect( () => {
        setLoading(true);
        setTimeout( () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            setLoading(false);
        }, 1000 )
    }, [] )

    // Delete posts
    function deletePost(id) {
        setPosts(posts.filter( (post) => post.id !== id ))
    }

    // Add post
    function addPost(e, post) {
        e.preventDefault();
        post.id = Date.now();
        setPosts([...posts, post])
    }

    // Pagination
    // Last index of element
    const lastIndex = currentPage * limit;
    // First index of element
    const firstIndex = lastIndex - limit;
    // which element in page 1-10 or 10-20
    const currentPost = posts.slice(firstIndex, lastIndex) 

    // Paginate function
    const paginate = pageNumber => setCurrentPage(pageNumber); 
    // Paginate by btns
    const nextPage = () => setCurrentPage(prev => prev != 10 ? prev + 1 : prev) 
    const prevPage = () => setCurrentPage(prev => prev != 1 ? prev - 1 : prev) 

    if (loading) {
        return <Load loading={loading}/>
    }

    console.log(selectValue);

    return (
        <div className='wrapper'>
            <div className="search-block">
                <input type="search" className='search-inp' placeholder='Поиск' value={value} onChange={(e) => setValue(e.target.value)} />
                <div className="loupe-wrapper">
                    <img src={src_loup} alt="search" className='loupe' />
                </div>
            </div>
            <button onClick={() => setOpen(true)} className='add-btn'>Добавить пост</button>
            <form className='form-sort'>
                <label className='label-sort'>Сортировка:</label><br/>
                <select className='select-sort' value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                    <option disabled="disabled">Сортировать по:</option>
                    <option value="title">По названию</option>
                    <option value="body">По описанию</option>
                </select>
            </form>
            <Pagination currentPage={currentPage} limit={limit} tottalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
            <Modal callback={addPost} open={open} onClose={() => setOpen(false)}/>
            <ul>
                <TransitionGroup>
                    {currentPost
                        .sort( (postA, postB) => (
                            selectValue == 'title'
                            ?
                            (postA.title > postB.title) ? 1 : -1
                            :
                            (postA.body > postB.body) ? 1 : -1
                        ) )
                        .filter( ({title}) => title.includes(value) )
                        .map( ({id, title, body}) => 

                        <CSSTransition
                            key={id}
                            timeout={1000}
                            classNames='post'
                        >
                            <li key={id} className='post'>
                                <div className="post-content">
                                    <h4>{id}</h4>
                                    <h3>{title}</h3>
                                    <p>{body}</p>
                                </div>
                                <button onClick={() => deletePost(id)} className='delete-btn'>Удалить</button>
                            </li>
                        </CSSTransition>

                    )}
                </TransitionGroup>
            </ul>
            <Pagination currentPage={currentPage} limit={limit} tottalPosts={posts.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
        </div>
    )
}


// Как сделать пагинацию?
// 1. создать 2 state. Для текущей страницы и для limit на одной странице. 










