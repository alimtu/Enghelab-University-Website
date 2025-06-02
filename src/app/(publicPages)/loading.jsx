import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen h-screen  w-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-24 w-24 " style={{ animationDuration: '3s' }}>
        <Image
          src="/Images/Logo/univeristy-logo.png"
          alt="loading"
          className="w-full h-full rounded-md object-cover"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
