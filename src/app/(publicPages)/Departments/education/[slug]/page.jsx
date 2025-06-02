// import { useEffect } from 'react';
import DashboardClientWrapper from '../../../../../components/ComponentGenerator';

import Loading from '../../../loading';

export default async function EducationDynamicPage({ params }) {
  const { slug } = params || {};
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
    handleGetData();
  }, []);

  const handleGetData = async () => {
    setLoading(true);
    const response = await fetcher(`/?name=education@${slug}&size=1`);

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
