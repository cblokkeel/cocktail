import React from 'react'

const CocktailList = ({ cocktailList, seeCocktailContent }) => {
    return (
        <section className='grid gap-5 md:grid-cols-2 lg:grid-cols-4 mt-6 md:mt-8 place-items-center'>
            {
                cocktailList ? (
                    cocktailList.map(cocktail => {
                        return (
                            <div onClick={() => seeCocktailContent(cocktail)} className='max-w-sm flex flex-col cursor-pointer hover:shadow-xl ease-out duration-200 transition rounded-md shadow-md overflow-hidden bg-gray-600 relative' key={cocktail.strDrink}>
                                <div className='absolute p-1 text-xs bg-gray-300 text-gray-500 italic rounded-md left-2 top-2 shadow-md'>{cocktail.strAlcoholic === 'Alcoholic' ? 'Avec Alcool' : 'Sans Alcool'}</div>
                                <img className='w-full h-32 object-cover ' src={cocktail.strDrinkThumb} alt=""/>
                                <div className='px-4 my-4'>
                                    <h3 className='text-gray-300'>{cocktail.strDrink}</h3>
                                    <h4 className='text-xs italic text-gray-400'>{cocktail.strGlass}</h4>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <h3 className='text-xl'>No existing cocktail</h3>
                )
                
            }
        </section>
    );
};

export default CocktailList;<h1>sd</h1>