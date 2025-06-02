import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NewsPagination() {
  const currentPage = 1;
  const totalPages = 8;

  return (
    <div className="flex items-center justify-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8" disabled={currentPage === 1}>
        <ChevronRight className="h-4 w-4" />
      </Button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Button
          key={page}
          variant={'default'}
          size="sm"
          className="h-8 w-8 p-0 bg-white text-black border rounded-md hover:bg-primary-500 hover:text-white"
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8"
        disabled={currentPage === totalPages}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
  );
}
