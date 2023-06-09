import React, { ReactElement, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props{
  ratings:any,
}

function RatingComponent({ ratings }:Props):ReactElement {
  const [rating, setRating] = useState(0);
  const add_review = (index: number) => {
    setRating(index)
  }

  return (
    <>
      {
        rating ? (
          <div className="star-rating">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (

                <button
                  type="button"
                  title='Rating Star'
                  key={index}
                  className={index <= (rating) ? "on" : "off"}
                  onClick={() => add_review(index)}
                >
                  <span className="star text-yellow-500">
                    <StarIcon height={16} width={16} />
                  </span>
                </button>

              );
            })}
          </div>
        ) : <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                title='Star Icon'
                key={index}
                className={index <= (ratings) ? "on" : "off"}
                onClick={() => add_review(index)}
              >
                <span className="star text-yellow-500">
                  <StarIcon height={16} width={16} />
                </span>
              </button>
            );
          })}

        </div>
      }
    </>
  )
}

export default RatingComponent