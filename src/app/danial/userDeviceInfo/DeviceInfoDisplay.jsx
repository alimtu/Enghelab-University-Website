'use client'; // Mark as Client Component

import useDeviceInfo from '@/app/danial/userDeviceInfo/useDeviceInfo';

export default function DeviceInfoDisplay({ serverDeviceInfo }) {
    // Client-side detection using the hook
    const clientDeviceInfo = useDeviceInfo();

    // Use serverDeviceInfo initially, then switch to clientDeviceInfo after hydration
    const deviceInfo = clientDeviceInfo || serverDeviceInfo;

    if (!deviceInfo) return <div>Loading device info...</div>;

    return (
        <div className="p-5">
            <h1>Device Detection with UAParser.js</h1>
            <p><strong>Device Type:</strong> {deviceInfo.device?.type || 'Desktop'}</p>
            <p><strong>Device Vendor:</strong> {deviceInfo.device?.vendor || 'N/A'}</p>
            <p><strong>Device Model:</strong> {deviceInfo.device?.model || 'N/A'}</p>
            <p><strong>OS:</strong> {deviceInfo.os?.name || 'N/A'} {deviceInfo.os?.version || ''}</p>
            <p><strong>Browser:</strong> {deviceInfo.browser?.name || 'N/A'} {deviceInfo.browser?.version || ''}</p>
            <p><strong>Engine:</strong> {deviceInfo.engine?.name || 'N/A'} {deviceInfo.engine?.version || ''}</p>
            <p><strong>CPU Architecture:</strong> {deviceInfo.cpu?.architecture || 'N/A'}</p>
        </div>
    );
}