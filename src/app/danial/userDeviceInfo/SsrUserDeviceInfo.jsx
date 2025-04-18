// getServerDeviceInfo.js
// import { UAParser } from 'ua-parser-js';
//
// export function getServerDeviceInfo(headers) {
//     const userAgent = headers.get('user-agent') || '';
//     const parser = new UAParser(userAgent);
//     const result = parser.getResult();
//
//     return {
//         ...result,
//         device: result.device || { type: undefined, vendor: undefined, model: undefined }
//     };
// }


// ------------------

// page.js for SSR
// import { headers } from 'next/headers';
// import { getServerDeviceInfo } from './getServerDeviceInfo';
// import DeviceInfoDisplay from './DeviceInfoDisplay';
//
// export default function Page() {
//     const headersList = headers();
//     const serverDeviceInfo = getServerDeviceInfo(headersList);
//
//     return (
//         <div>
//             <DeviceInfoDisplay serverDeviceInfo={serverDeviceInfo} />
//         </div>
//     );
// }