import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooksData } from '../redux/bookSlice'
import { RootState } from '../store'
const placeholderImage = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'; // Placeholder image URL


const BooksComponent = () => {
  const [searchResult, setSearchResult] = useState('')

  const dispatch = useDispatch()
  const booksData = useSelector((state: RootState) => state?.books?.data)
  const loading = useSelector((state: RootState) => state.books.loading)
  const error = useSelector((state: RootState) => state.books.error)
  console.log(booksData?.data)

  const handleChange = (e: any) => {
    setSearchResult(e.target.value)
    console.log(searchResult)
  }

  useEffect(() => {
    dispatch(fetchBooksData())
  }, [dispatch])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  const filterData = booksData?.data?.filter((data:any) => {
    return data.author.toLowerCase().includes(searchResult.toLowerCase())
  })
  console.log(filterData)

  return (
    <div>
      <input
        type='text'
        name='search'
        value={searchResult}
        onChange={e => handleChange(e)}
      />

      <div className='grid grid-cols-3 max-w-6xl gap-8 mx-auto'>
        {filterData?.map(book => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
          <img src={placeholderImage} alt="Book Cover" className="w-full h-64 object-cover" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base">{book.author}</p>
          </div>
        </div>
        ))}
      </div>  
    </div>
  )
}

export default BooksComponent
        