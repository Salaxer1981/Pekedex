import React from 'react';

const Paginations = ({ num, setPage }) => {
    return (

        <button onClick={() => setPage(num) } >
            {num}
        </button>

    );
};

export default Paginations;