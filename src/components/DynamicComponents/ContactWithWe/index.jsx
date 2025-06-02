'use client';

import ContactWithUni from './ContactWithUni/ContactWithUni';

export default function ContactWith({ data }) {
  return (
    <div className={`${data.className}`}>
      <ContactWithUni data={data} />
    </div>
  );
}
