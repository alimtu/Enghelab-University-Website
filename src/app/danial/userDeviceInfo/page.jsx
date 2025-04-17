import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';
import DeviceInfoDisplay from './DeviceInfoDisplay';

export default function Page() {
    // Server-side detection using headers()
    const userAgent = headers().get('user-agent');
    console.log('Server User-Agent:', userAgent); // Log the User-Agent
    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    // Normalize the device field to always be an object
    const serverDeviceInfo = {
        ...result,
        device: result.device || { type: undefined, vendor: undefined, model: undefined }
    };

    return <DeviceInfoDisplay serverDeviceInfo={serverDeviceInfo} />;
}