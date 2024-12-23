import React, { useState } from 'react';
import { QRForm } from '../components/QR/QRForm';
import { QRCustomizer } from '../components/QR/QRCustomizer';
import { QRDownloadButton } from '../components/QR/QRDownloadButton';
import { QRCodeProps } from '../types/qr';

export function QRGenerator() {
  const [url, setUrl] = useState('');
  const [qrGenerated, setQrGenerated] = useState(false);
  const [customization, setCustomization] = useState<QRCodeProps>({
    url: '',
    size: 256,
    fgColor: '#000000',
    bgColor: '#FFFFFF',
    includeMargin: true,
    level: 'H',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQrGenerated(true);
  };

  const handleCustomizationChange = (key: string, value: any) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Generate QR Code
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Create and customize QR codes for your links instantly
        </p>
      </div>

      <QRForm 
        url={url} 
        onUrlChange={setUrl} 
        onSubmit={handleSubmit} 
      />

      {qrGenerated && url && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <QRCustomizer
            
            {...customization}
            onCustomizationChange={handleCustomizationChange}
          />
          <div className="mt-6 flex justify-center">
            <QRDownloadButton />
          </div>
        </div>
      )}
    </div>
  );
}