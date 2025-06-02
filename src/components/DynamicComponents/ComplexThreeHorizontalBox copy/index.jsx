// components/NewsSection.jsx
import { Calendar } from 'lucide-react';

export default function ComplexThreeHorizontalBoxComponent({ data }) {
  return <div className={`flex flex-col lg:flex-row justify-between gap-10 px-4 lg:px-20 ${data.className}`}></div>;
}
