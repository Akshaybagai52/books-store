import React from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  imageUrl?: string; // Make imageUrl optional as some books might not have an image
}

interface BookCardProps {
  book: Book;
}

const placeholderImage = 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'; // Placeholder image URL

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { title, author, imageUrl } = book;
  const bookImage = imageUrl || placeholderImage; // Use the provided image URL or placeholder

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
      <img src={bookImage} alt="Book Cover" className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;
