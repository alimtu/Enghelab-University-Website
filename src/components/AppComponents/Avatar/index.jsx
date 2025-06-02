import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AppAvatarComponent({ data }) {
  return (
    <Avatar className={`${data?.className || 'lg:w-24 lg:h-24 w-16 h-16'}`}>
      <AvatarImage src={data?.pic} alt={data?.name} />
      <AvatarFallback>{data?.name}</AvatarFallback>
    </Avatar>
  );
}
