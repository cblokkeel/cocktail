import React from 'react'

const Cocktail = ({ cocktail }) => {
        let ingredientsArray = []

        for (let i = 1; i <= 15; i++) {
            const ingredient = `strIngredient${i}`
            const dose = `strMeasure${i}`
            ingredientsArray.push({
                ingredient: cocktail[ingredient],
                dose: cocktail[dose]
            })
        }

        ingredientsArray = ingredientsArray.filter(({ ingredient }) => ingredient !== null)

    return (
        <section className='flex flex-col items-center justify-center'>
            <img src={cocktail.strDrinkThumb} alt="cocktail" className='w-32 md:w-64 rounded-3xl'/>
            <h1 className='mt-2 text-3xl md:text-5xl border-b border-green-400'>{cocktail.strDrink}</h1>
            <h3 className='mt-8 text-sm md:text-xl italic self-start ml-8 md:ml-12 border-b border-green-400'>Ingredients : </h3>
            <ul className='self-start ml-12 mt-2'>
                {
                    ingredientsArray.map(({ ingredient, dose }) => {
                        return (
                            <h4 className='text-sm md:text-base' key={ingredient}>· {ingredient} - {dose}</h4>
                        )
                    })
                }
            </ul>
            <h3 className='mt-8 text-sm md:text-xl italic self-start ml-8 md:ml-12 border-b border-green-400'>Instructions : </h3>
            <h3 className='mt-2 self-start ml-12 text-sm w-4/5 md:text-base'>{cocktail.strInstructions}</h3>
        </section>
    );
};

export default Cocktail;