import React from 'react'
import Image from 'next/image'
import { CiClock2 } from "react-icons/ci";
import { IoMdStarOutline } from "react-icons/io";


export const BookCard = () => {
  return (
    <div className="book">
      <figure className="book__image--wrapper">
        <Image className="book__image" src="/path/to/book-image.jpg" alt="Book Cover" />
      </figure>
      <div className="book__title">Cant Hurt Me</div>
      <div className="book__author">David Goggins</div>
      <div className="book__sub-title">Master Your Mind and Defy the Odds</div>
      <div className="book__details--wrapper">
        <div className="book__details">
          <div className="book__details--icon">
            <CiClock2 />
          </div>
          <div className="book__details--text">03:24</div>
        </div>
        <div className="book__details">
          <div className="book__details--icon">
            <IoMdStarOutline />
          </div>
          <div className="book__details--text">4.5</div>
        </div>
      </div>
    </div>
  )
}
