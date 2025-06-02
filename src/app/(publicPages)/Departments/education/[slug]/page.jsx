'use client';

import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import DashboardClientWrapper from '../../../../../components/ComponentGenerator';

import Loading from '../../../loading';

import { fetcher } from '../../../../../lib/axios/fetcher';

export default function EducationDynamicPage() {
  const params = useParams();
  const slug = params?.slug;
  // const endpoint = `/?name=learning-${slug}&size=1`;

  // try {
  //   const response = await AppFetcher(endpoint, {
  //     next: { revalidate: 3600 },
  //   });

  //   if (!response?.results?.length || !response.results[0].data?.length) {
  //     return <NotFound />;
  //   }

  //   const data = response.results[0].data || [];

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      handleGetData();
    }
  }, [slug]);

  const handleGetData = async () => {
    setLoading(true);
    const response = await fetcher(`/?name=education-${slug}&size=1&locale=fa`);

    console.log('responseresponse', response);

    const data = response.results[0].data || [];

    setLoading(false);
    setData(data);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-full flex flex-col">
      <DashboardClientWrapper
        data={data.map(item => ({
          ...item,
          id: Math.random(),
          params: { slug },
        }))}
      />
    </div>
  );
}
