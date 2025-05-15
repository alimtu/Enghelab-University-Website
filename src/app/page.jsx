import MyTable from '../components/myTable';
import './globals.css';



export default function Home() {
  return (
    <div className="w-full min-w-10p bg-black h-screen flex justify-center items-center font-bold text-lg ">
      <div className="border border-white p-8 flex text-white">
        <MyTable />
      </div>
    </div>
  );
}
