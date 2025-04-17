'use client'; // Mark as Client Component

import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

export default function useDeviceInfo() {
    const [deviceInfo, setDeviceInfo] = useState(null);

    useEffect(() => {
        // Client-side: Use navigator.userAgent
        const userAgent = navigator.userAgent;
        console.log('Client User-Agent:', userAgent); // Log the User-Agent
        const parser = new UAParser(userAgent);
        const result = parser.getResult();
        // Normalize the device field to always be an object
        const normalizedResult = {
            ...result,
            device: result.device || { type: undefined, vendor: undefined, model: undefined }
        };
        setDeviceInfo(normalizedResult);
    }, []);

    return deviceInfo;
}