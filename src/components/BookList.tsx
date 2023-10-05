import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksData } from '../redux/bookSlice';
import { RootState } from '../store';
import BookCard from './common/BookCard';

const BooksComponent = () => {
  const dispatch = useDispatch();
  const booksData = useSelector((state: RootState) => state.books.data);
  const loading = useSelector((state: RootState) => state.books.loading);
  const error = useSelector((state: RootState) => state.books.error);
  console.log(booksData.data)

  useEffect(() => {
    dispatch(fetchBooksData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='grid grid-cols-3 max-w-6xl gap-8 mx-auto'>
      {booksData?.data?.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksComponent;
 