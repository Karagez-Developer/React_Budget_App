import React from 'react'
import './Pagination.css'

export const Pagination = ({currentPage, limit, tottalPosts, paginate, nextPage, prevPage}) => {

    const pagNumbers = [];

    for (let i = 1; i <= Math.ceil( tottalPosts / limit ); i++) {
        pagNumbers.push(i);
    }

    function scrolling() {
        window.scrollTo({
            top: 100,
            left: 100,
            behavior: 'smooth'
        })
    }
    

    return (
        <div>
            <ul className="pagination">
                {
                    pagNumbers.map(num => (
                        <li className={num == currentPage ? 'page-item active' : 'page-item'} key={num}>
                            <a href='#' className={num == currentPage ? 'page-link active' : 'page-link'} onClick={(e) => (
                                e.preventDefault(),
                                paginate(num),
                                scrolling()
                            )}>
                                {num}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="wrapper-pag-btn">

                <button disabled={currentPage == 1} className='pag-btn' onClick={() => (
                    prevPage(),
                    scrolling()
                )}>
                    Назад
                </button>

                <button disabled={currentPage == 10} className='pag-btn' onClick={() => (
                    nextPage(),
                    scrolling()
                )}>
                    Далее
                </button>

            </div>

        </div>
    )
}
