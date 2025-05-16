
'use client'

import { useEffect , useState } from 'react';
import { fetcher } from '../../lib/swr/fetcher';

export default function Ali() {
  const [data, setData] = useState([]);

  useEffect(() => {
     fetcher('/api/data/')
      .then(res => {
        setData(res.results);

        console.log('res.data', res.results);
        
      })
  }, []);

  return (
    <div className="w-full bg-white h-screen flex justify-center items-center font-bold text-lg text-white">
      <div>
        {data.map((item) => (
          <div key={item.id} className='text-black'>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
