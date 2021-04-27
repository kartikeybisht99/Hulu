import Thumbnail from './Thumbail'
function Results({ results }) {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((results) => (
        <Thumbnail key={results.id} result={results} />
      ))}
    </div>
  )
}

export default Results
