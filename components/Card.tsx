import React from 'react'
import Image from 'next/image'

interface CardProps {
    img: string;
    alt: string;
    nf: string;
    description: string;
}
const Card: React.FC<CardProps> = ({img,alt,nf,description}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mb-10 hover:shadow-2xl transform hover:scale-105 transition duration-500">
  <figure>
    <Image
      src={img}
      alt={alt}
      width={200}
      height={100}
      className='mt-10'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{nf}!</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
  )
}

export default Card
