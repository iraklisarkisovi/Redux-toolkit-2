import React, { useState } from 'react';
import { useGetPostsQuery } from './Images';

const ImagesPage: React.FC = () => {
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(1);

  const { data, isLoading, isError } = useGetPostsQuery({ page, per_page });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error loading data</h1>;

  return (
    <div>
      <h1>Images</h1>
      <div>
        {data?.data?.map((image: any) => (
          <div key={image.id}>
            <h1>{image.first_name}</h1>
            <h2>{image.last_name}</h2>
          </div>
        ))}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        <button onClick={() => setPage(Math.floor(Math.random() * 11) + 1)}>Random</button>
        <label>
          Items per page:
          <input
            type="number"
            value={per_page}
            onChange={(e) => setPerPage(Number(e.target.value))}
            min={1}
          />
        </label>
      </div>
    </div>
  );
};

export default ImagesPage;
