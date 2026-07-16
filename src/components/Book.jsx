import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Rating from './ui/Rating';
import Price from './ui/Price';

const Book = ({ book }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="book">
      {/* SKELETON mientras carga */}
      {!loaded && !error && (
        <>
          <div className="book__img--skeleton skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}

      {/* CONTENIDO cuando carga */}
      {(loaded && !error) && (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img
                src={book.url}
                alt={book.title}
                className="book__img"
              />
            </figure>
          </Link>

          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>

          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      )}

      {/* FALLBACK si la imagen falla */}
      {error && (
        <>
          <div className="book__img--wrapper">
            <img
              src="/fallback.png"
              alt="Imagen no disponible"
              className="book__img"
            />
          </div>

          <div className="book__title">
            {book.title}
          </div>

          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      )}

      {/* EVENTOS DE CARGA */}
      <img
        src={book.url}
        alt=""
        style={{ display: "none" }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default Book;