import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Article = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true before making the API request

    axios.get(import.meta.env.VITE_API_URL + '/allpost')
      .then((response) => {
        setArticles(response.data.data);
        setIsLoading(false); // Set loading state to false after receiving the response
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false); // Set loading state to false if there is an error
      });
  }, []);

  return (
    <div>
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">#JogjaUpdate</h2>
            <p className="font-serif text-sm dark:text-gray-400">ikuti perkembangan berita seputar jogja</p>
          </div>
          {isLoading ? (
            <div>Loading article...</div>
          ) : articles.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {articles.slice(0, 4).map((article) => (
                <article className="flex flex-col dark:bg-gray-900 rounded-xl" key={article.id}>
                  <a rel="noopener noreferrer" href="#" aria-label={article.title}>
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={article.image} />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label={article.title}>
                      <h3 className="flex-1 py-2 text-lg font-semibold">{article.title}</h3>
                    </a>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                      <span>{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div>No articles available.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Article;
