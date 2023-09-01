import React from 'react'
import MovieCard from './MovieCard'

export default function AllMovies() {
  return (
    <div>
      <MovieCard
            imageUrl="https://m.media-amazon.com/images/M/MV5BMWE4OTM1ZjItYzc5Ni00MDFhLWFiZWEtOWM1ODlkZjQyNzM0XkEyXkFqcGdeQWthc2hpa2F4._V1_QL75_UY281_CR0,0,500,281_.jpg"
            title="Oppenheimer"
            description="A dramatization of the life story of J. Robert Oppenheimer, 
          the physicist who had a large hand in the development of the atomic bomb, 
          thus helping end World War 2. We see his life from university days all the way to post-WW2, 
          where his fame saw him embroiled in political machinations.—grantss."
          />
    </div>
  )
}
