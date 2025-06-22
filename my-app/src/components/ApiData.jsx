import React, { useState, useEffect } from 'react';
import Card from './Card';
import Button from './Button';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPosts(prev => [...prev, ...data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => setPage(prev => prev + 1);

  if (error) return (
    <Card>
      <p className="text-red-500">Error: {error}</p>
      <Button onClick={() => window.location.reload()} variant="primary">
        Retry
      </Button>
    </Card>
  );

  return (
    <div className="space-y-6">
      <Card>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>

        {loading && page === 1 ? (
          <p>Loading initial data...</p>
        ) : (
          <div className="space-y-4">
            {filteredPosts.map(post => (
              <Card key={post.id} className="p-4">
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.body}</p>
              </Card>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && !loading && (
          <p>No matching posts found</p>
        )}

        <div className="mt-4 flex justify-center">
          <Button
            onClick={loadMore}
            disabled={loading}
            variant="secondary"
          >
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ApiData;