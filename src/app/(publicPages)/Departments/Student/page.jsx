import DashboardClientWrapper from '../../../../components/ComponentGenerator';
import { AppFetcher } from '../../../../lib/fetch';

export default async function StudentDepartmentPage() {
  const response = await AppFetcher('/?name=student&size=1', {
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
