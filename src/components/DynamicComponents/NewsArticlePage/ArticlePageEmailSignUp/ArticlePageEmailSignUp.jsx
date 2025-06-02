//TODO needs a submithanlder and handlechange for inputs
export default function ArticlePageEmailSignUp() {
  return (
    <div className="bg-neutral-50 h-fit rounded-lg px-4 py-6 flex flex-col gap-8">
      <div className="flex flex-col gap-4 lg:gap-10">
        <h3 className="font-bold text-2xl lg:text-3xl">از اخبار دانشگاه جا نمون.</h3>
        <p className="text-justify wrap-anywhere leading-7 text-neutral-600 lg:text-base">
          با عضویت در خبرنامه دانشگاه با گزارش‌های آسان اندازه‌گیری کنید چه چیزی مهم است. شما
          می‌توانید داده‌ها را فیلتر کنید، صادر کنید و عمیق‌تر بررسی کنید با چند کلیک.
        </p>
      </div>
      <form className="flex flex-col gap-2 lg:gap-4">
        <label typeof="email" name="email" id="email" className="font-medium lg:text-sm">
          ایمیل
        </label>
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="ایمیل خود را وارد کنید"
          className=" border-1 border-neutral-200 px-4 py-3 rounded-lg placeholder:text-neutral-300"
        />
        <button className="px-4 py-3 w-full text-white font-normal text-sm bg-secondary-550 rounded-lg text-center">
          عضویت
        </button>
      </form>
    </div>
  );
}
