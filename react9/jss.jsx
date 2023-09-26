import React, { useState } from 'react';
import './App.css';

// Sample book data (replace with actual data source)
const booksData = [
  { id: 1, title: 'Book 1', author: 'Author 1', description: 'Description 1' },
  { id: 2, title: 'Book 2', author: 'Author 2', description: 'Description 2' },
  // Add more book entries here
];

function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedBook(null);
  };

  const handleReviewSubmit = (reviewData) => {
    // Handle review submission (send to backend, update state, etc.)
    console.log('Review Submitted:', reviewData);
  };

  return (
    <div className="App">
      <h1>Online Bookstore</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => handleSearch(searchQuery)}>Search</button>
      </div>
      <div className="book-container">
        <div className="book-list">
          <h2>Book List</h2>
          <ul>
            {booksData.map((book) => (
              <li key={book.id} onClick={() => setSelectedBook(book)}>
                {book.title}
              </li>
            ))}
          </ul>
        </div>
        {selectedBook && (
          <div className="book-detail">
            <h2>{selectedBook.title}</h2>
            <p>Author: {selectedBook.author}</p>
            <p>Description: {selectedBook.description}</p>
            <div className="review-form">
              <h3>Submit a Review</h3>
              <input type="text" placeholder="Title" />
              <input type="number" placeholder="Rating (1-5)" />
              <textarea placeholder="Write your review here..."></textarea>
              <button onClick={() => handleReviewSubmit({})}>Submit Review</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
