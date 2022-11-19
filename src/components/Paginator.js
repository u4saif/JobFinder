import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage } from '../feature/jobs/AlljobSlice';

export const Paginator = () => {
    const { numOfPages, page } = useSelector((store) => store.allJob);
    const dispatch = useDispatch();

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
    });
    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            return;
        }
        dispatch(changePage(newPage));
    };
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            return;
        }
        dispatch(changePage(newPage));
    };
    return (
        <Wrapper>
            <button className='prev-btn' onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className='btn-container'>
                {pages.map((pageNumber) => {
                    return (
                        <button
                            type='button'
                            className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
                            key={pageNumber}
                            onClick={() => dispatch(changePage(pageNumber))}
                        >
                            {pageNumber}
                        </button>
                    );
                })}
            </div>
            <button className='next-btn' onClick={nextPage}>
                next
                <HiChevronDoubleRight />
            </button>
        </Wrapper>
    );
};