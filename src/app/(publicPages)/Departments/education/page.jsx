// 'use client';

// import { useEffect, useState } from 'react';
import DashboardClientWrapper from '../../../../components/ComponentGenerator';
import { AppFetcher } from '../../../../lib/fetch';

// import { fetcher } from '../../../../lib/axios/fetcher';
// import Loading from '../../loading';

export default async function EducationDepartmentPage() {
  const response = await AppFetcher('/?name=education&size=1', {
    next: { revalidate: 3600 },
  });
  const data = response.results[0].data || [];

  // const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   handleGetData();
  // }, []);

  // const handleGetData = async () => {
  //   setLoading(true);
  //   const response = await fetcher(`/?name=education`);

  //   const data = response.results[0].data || [];
  //   console.log('DATAAA- ---->>', data);

  //   setLoading(false);
  //   setData(data);
  // };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div className="h-full flex flex-col">
      <DashboardClientWrapper
        data={data.map(item => {
          return {
            ...item,
            id: Math.random(),
          };
        })}
      />
    </div>
  );
}
