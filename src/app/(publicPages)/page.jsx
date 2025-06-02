import DashboardClientWrapper from '../../components/ComponentGenerator';
import { AppFetcher } from '../../lib/fetch';
import { getCurrentLocale } from '../../lib/locale';

export default async function DashboardPage() {
  // Get the current locale based on the URL
  const locale = getCurrentLocale();

  const response = await AppFetcher(`/?name=dashboard&size=1&locale=${locale}`, {
    next: { revalidate: 3600 },
  });

  const data = response.results[0].data || [];

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
