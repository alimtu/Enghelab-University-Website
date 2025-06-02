import DashboardClientWrapper from '../../../../../components/ComponentGenerator';
import { AppFetcher } from '../../../../../lib/fetch';
import { getCurrentLocale } from '../../../../../lib/locale';
import NotFoundPage from '../../../../not-found';

export default async function StudentDynamicPage({ params }) {
  const { slug } = params || {};
  const locale = getCurrentLocale();
  const endpoint = `/?name=student-${slug}&size=1&locale=${locale}`;

  try {
    const response = await AppFetcher(endpoint, {
      next: { revalidate: 3600 },
    });

    if (!response?.results?.length || !response.results[0].data?.length) {
      return <NotFoundPage />;
    }

    const data = response.results[0].data || [];

    console.log('Server Data ---->>>', data);

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
