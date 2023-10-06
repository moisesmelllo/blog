import React from 'react'

const Main = () => {
  return (
    <div>
      <img 
        className='w-8/12 sm:max-w-[53.375rem] mx-auto mt-16'
        src="https://s3-alpha-sig.figma.com/img/cd03/6c26/e7e1275cacd73edc67b4afe128d222d5?Expires=1697414400&Signature=DYJ7FWyJmml7hIOtoEZlILROXsXG6p~TYrPb41JI~-frIUUbMGSz5OTec1LewI8lT0anQgBGuvrXxnv1JTNCsrDk1hbqhTiaQlLhmvurh8zq8q6B9oDfO9eGJ6TGSVr~qUDJlNkNv02IgI8MDwJyOt7RVGlHwZft5h1VZ2fr02yDuuEWnJDmeDbDRpIMi~prG8IQ3wj~BLWLkMo0yAMQD124QrhLek8Y5SArkzO7vsrrdLXzXWGdi0EhrEfQACBxUzxbrU6toiqfEJnVaFuu6wuXj0ynQ55~oOvIgRyfzwvXglUAUwz6lKK0R~C1YaXArbWfmWKuVuyKLi1S~K8-mQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" 
        alt="image 1" />
      <h2 className='px-8 text-2xl sm:text-3xl md:text-4xl w-[30rem] md:w-[40rem] lg:w-[56rem] m-auto mt-6 sm:mt-10 sm:mb-6 font-bold text-center'>A few words about this blog platform, Ghost, and how this site was made</h2>
      <p className=' text-xs sm:text-sm max-w-sm sm:max-w-4xl text-center m-auto mt-3 sm:mb-16'>Why Ghost (& Figma) instead of Medium, WordPress or other options?</p>
    </div>
  )
}

export default Main