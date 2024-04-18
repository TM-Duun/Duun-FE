import './PaginationStyles.scss';

interface paginationProps {
    totalPage : number;
    limit : number;
    page : number;
    setPage : React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination:React.FC<paginationProps> = ({ totalPage, limit, page, setPage }) => {
    const pageNum = [];

    for (let i = 1; i <= totalPage; i++) {
        pageNum.push(i);
    }

    const startPage = Math.floor((page - 1) / 5) * 5 + 1;
    const endPage = Math.min(startPage + 4, totalPage);

    const moveToPage = (page: number) => {
        if (page < 1) {
            setPage(1);
        } else if (page > totalPage) {
            setPage(totalPage);
        } else {
            setPage(page);
        }
    };

    return (
        <nav className='pnNav'>
            <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
                <li>
                    <button className='pnBtn' onClick={() => moveToPage(1)} disabled={page === 1}>
                      {'<<'}
                    </button>
                </li>
                <li>
                    <button className='pnBtn' onClick={() => moveToPage(page - 1)} disabled={page === 1}>
                      {'<'}
                    </button>
                </li>
                {Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx).map(number => (
                    <li key={number}>
                      <button className={`pnBtn ${page === number ? 'active' : ''}`} onClick={() => setPage(number)}>
                        {number}
                      </button>
                    </li>
                ))}
                <li>
                    <button className='pnBtn' onClick={() => moveToPage(page + 1)} disabled={page === totalPage}>
                      {'>'}
                    </button>
                </li>
                <li>
                    <button className='pnBtn' onClick={() => moveToPage(totalPage)} disabled={page === totalPage}>
                      {'>>'}
                    </button>
                </li>
            </ul>
        </nav>
    )
}