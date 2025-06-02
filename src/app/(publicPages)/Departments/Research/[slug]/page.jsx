import DashboardClientWrapper from '../../../../../components/ComponentGenerator';
import { AppFetcher } from '../../../../../lib/fetch';
import NotFoundPage from '../../../../not-found';

export default async function ResearchDynamicPage({ params }) {
  const { slug } = params || {};
  const endpoint = `/?name=research-${slug}&size=1`;

  try {
    const response = await AppFetcher(endpoint, {
      next: { revalidate: 3600 },
    });

    if (!response?.results?.length || !response.results[0].data?.length) {
      return <NotFoundPage />;
    }

    const data = response.results[0].data || [];

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
  } catch (error) {
    return <NotFoundPage />;
  }
}
