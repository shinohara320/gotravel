import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Details() {
  const params = useParams();
  const { id } = params;
  const [article, setArticle] = useState({});
  const [user, setUser] = useState({});

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/allpost/${id}`;

    axios.get(apiUrl)
      .then((response) => {
        setArticle(response.data.data);
        setUser(response.data.data.user);
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  return (
    <div className='m-0 p-0 dark:bg-gray-800 dark:text-white'>
<div className="max-w-screen-lg mx-auto h-full">
    <main className="mt-0">

      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-white leading-tight">
            {article.title}
          </h2>
          <a href="#" className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
            News
          </a>
        </div>
        <div className='flex justify-center'>
        <img src={article.image} className="w-max h-96 object-cover lg:rounded"/>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">

        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4 dark:text-white">
          <p className="pb-6">{article.desc}</p>
        </div>
        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img src="https://randomuser.me/api/portraits/men/97.jpg"
                className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-700 text-sm"> {user.uname} </p>
                <p className="font-semibold text-gray-600 text-xs"> Mahasiswa </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
              you can contact {user.uname} at {user.email}
            </p>
            <a href={`https://wa.me/${user.phone}`} className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              Contact WA 
            </a>
          </div>
          </div>
        
      </div>
    </main>
  </div>
    </div>
  );
}

export default Details;
