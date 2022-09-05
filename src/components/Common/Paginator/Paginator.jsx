import { useState } from 'react';

import classes from "./Paginator.module.css";
// import cn from 'classnames'



const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
            <div className={classes.paginator}>
                {portionNumber > 1 &&
                    <button onClick={() => {setPortionNumber(portionNumber - 1)}}>
                        PREV
                    </button>
                }
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <span className={ currentPage === page && classes.selectedPage}
                                    // cn({
                                    //  [classes.selectedPage]: currentPage === page
                                    // }, classes.pageNumber)} 
                                    key={page}
                                    onClick={(e) => {
                                        onPageChanged(page)
                                    }} >
                        {page}
                        </span>
                    })
                }
                {portionCount > portionNumber &&
                    <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>
                }
            </div>
    )
}


export default Paginator;