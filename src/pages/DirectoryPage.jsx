import React from 'react'

import { useParams } from 'react-router-dom';

import PageHeader from '../components/PageHeader/PageHeader';

import { category as cate } from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid/MovieGrid';

const DirectoryPage = () => {

  const { category } = useParams();

  // console.log(category);

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : null}
        {category === cate.tv ? "TV Series" : null}
        {category === cate.people ? "People" : null}
      </PageHeader>
      <div className="container">
        <div className="section mb-3"> 
        <MovieGrid category={category} />
        </div>

      </div>
    </>
  );
}

export default DirectoryPage;