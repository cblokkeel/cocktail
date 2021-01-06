import React from 'react'

const SearchBox = ({ searchForCocktail, cocktailInput }) => {
    return (
        <section>
            <form className='flex justify-center items-center' onSubmit={e => e.preventDefault()}>
                <input type="text" onChange={searchForCocktail} value={cocktailInput} placeholder='Search for cocktails' className='bg-gray-600 rounded-md py-1 px-3 md:py-2 md:px-4 outline-none shadow-md md:w-96' required/>
                <button type='submit' className='ml-2 bg-gray-600 p-2 rounded-md shadow-md outline-none'>
                    <svg className='w-4 outline-none' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>
        </section>
    );
};

export default SearchBox;