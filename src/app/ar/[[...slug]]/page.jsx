import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getCurrentLocale } from '../../../lib/locale';

export default async function ArabicDynamicPage({ params }) {
  const slug = params?.slug || [];
  const routePath = slug.join('/');

  // Ensure we're using Arabic locale for all API calls
  const locale = getCurrentLocale(); // Should be 'ar' for Arabic routes

  try {
    let PageComponent;

    if (routePath === '') {
      // Root Arabic page /ar
      PageComponent = dynamic(() => import('../../(publicPages)/page'), {
        loading: () => <div>Loading...</div>,
      });
    } else if (routePath === 'contact') {
      PageComponent = dynamic(() => import('../../(publicPages)/contact/page'), {
        loading: () => <div>Loading...</div>,
      });
    } else if (routePath === 'gallery') {
      PageComponent = dynamic(() => import('../../(publicPages)/gallery/page'), {
        loading: () => <div>Loading...</div>,
      });
    } else if (routePath.startsWith('departments/')) {
      // Handle department routes dynamically
      const departmentPath = routePath.replace('departments/', '');
      const parts = departmentPath.split('/');

      if (parts.length === 1) {
        // Main department page like /ar/departments/student
        PageComponent = dynamic(() => import(`../../(publicPages)/departments/${parts[0]}/page`), {
          loading: () => <div>Loading...</div>,
        });
      } else if (parts.length === 2) {
        // Sub department page like /ar/departments/student/welfare
        PageComponent = dynamic(
          () => import(`../../(publicPages)/departments/${parts[0]}/${parts[1]}/page`),
          {
            loading: () => <div>Loading...</div>,
          }
        );
      } else {
        // For deeper nested routes, create a generic handler
        return <DepartmentHandler slug={slug} locale={locale} />;
      }
    } else {
      // Try to dynamically import any other route
      try {
        PageComponent = dynamic(() => import(`../../(publicPages)/${routePath}/page`), {
          loading: () => <div>Loading...</div>,
        });
      } catch (error) {
        return <GenericArabicPage routePath={routePath} />;
      }
    }

    if (PageComponent) {
      return <PageComponent />;
    }
  } catch (error) {
    console.log('Route not found:', routePath);
    return <GenericArabicPage routePath={routePath} />;
  }

  notFound();
}

// Generic Arabic page for routes that don't have a specific component
function GenericArabicPage({ routePath }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">الصفحة العربية</h1>
        <p className="text-gray-600">مسار: /{routePath}</p>
        <p className="text-sm text-gray-500 mt-4">هذه صفحة عربية ديناميكية. المحتوى قيد التطوير.</p>
        <div className="mt-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 underline">
            العودة إلى الصفحة الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

// Helper component for department routes
function DepartmentHandler({ slug, locale }) {
  const departmentPath = slug.slice(1).join('/'); // Remove 'departments' from slug

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">قسم الجامعة</h1>
        <p className="text-gray-600">مسار القسم: {departmentPath}</p>
        <p className="text-sm text-gray-500 mt-2">
          صفحة القسم العربية. يمكنك إضافة المحتوى المناسب هنا.
        </p>
        <p className="text-xs text-gray-400 mt-1">Locale: {locale}</p>
        <div className="mt-6">
          <a href="/ar" className="text-blue-600 hover:text-blue-800 underline">
            العودة إلى الصفحة الرئيسية العربية
          </a>
        </div>
      </div>
    </div>
  );
}

// Generate static params for known routes (optional)
export async function generateStaticParams() {
  return [
    { slug: [] }, // /ar
    { slug: ['contact'] }, // /ar/contact
    { slug: ['news'] }, // /ar/news
    { slug: ['gallery'] }, // /ar/gallery
  ];
}
