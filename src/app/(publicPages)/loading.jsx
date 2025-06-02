import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen h-screen  w-full flex items-center justify-center">
      <div className="animate-spin  h-24 w-24 " style={{ animationDuration: '24s' }}>
        <Image
          src="/Images/Logo/Uni_Logo_Transparent.png"
          alt="loading"
          className="w-full h-full object-fill"
          width={58}
          height={58}
        />
      </div>
    </div>
  );
}
