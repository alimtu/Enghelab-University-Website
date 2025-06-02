import Marquee from 'react-fast-marquee';

export const data = [
  { text: 'آمار اشتباه هم جلوی استیصال همتی را نگرفت' },
  { text: 'دستانی که دیروز با صلاح می جنگیدندند، امروز هنرمندانه می سازند' },
  { text: 'توهم اقتدار آمریکا: سقوط قدرت نرم و سخت ایالات متحده' },
  { text: 'آمار اشتباه هم جلوی استیصال همتی را نگرفت' },
  { text: 'آمار اشتباه هم جلوی استیصال همتی را نگرفت' },
];

const NewNotice = ({ title }) => (
  <div
    style={{ direction: 'ltr' }}
    className="flex w-full h-[56px] relative rounded-lg p-3 gap-2 mt-5 bg-[#F5F5F5] items-center"
  >
    <div className="overflow-hidden">
      <Marquee pauseOnHover speed={30}>
        <ul className="flex items-start justify-end gap-2 text-sm list-none">
          {data.map((data, index) => (
            <li key={index}>
              {data.text}
              <span className="ml-2 mr-2 inline-block text-[#0CC0BA]">●</span>
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
    <div className="items-center h-full p-1 min-w-[100px] text-white bg-[#006273] rounded text-center">
      <span className="w-fit h-full">{title}</span>
    </div>
  </div>
);

export default NewNotice;
