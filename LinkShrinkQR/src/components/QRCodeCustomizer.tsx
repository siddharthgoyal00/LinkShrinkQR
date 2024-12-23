import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeCustomizerProps {
  url: string;
  size: number;
  fgColor: string;
  bgColor: string;
  includeMargin: boolean;
  level: "L" | "M" | "Q" | "H";
  onCustomizationChange: (key: string, value: any) => void;
}

export default function QRCodeCustomizer({
  url,
  size,
  fgColor,
  bgColor,
  includeMargin,
  level,
  onCustomizationChange,
}: QRCodeCustomizerProps) {
  const colorPresets = [
    '#000000', '#FF0000', '#00FF00', '#0000FF', 
    '#FF00FF', '#00FFFF', '#FFA500', '#800080'
  ];

  const bgColorPresets = [
    '#FFFFFF', '#F3F4F6', '#FEF3C7', '#ECFDF5',
    '#EFF6FF', '#EEF2FF', '#FDF2F8', '#FCE7F3'
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-center mb-6">
        <QRCodeSVG
          id="qr-code"
          value={url}
          size={size}
          level={level}
          includeMargin={includeMargin}
          fgColor={fgColor}
          bgColor={bgColor}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            QR Code Color
          </label>
          <div className="flex flex-wrap gap-2">
            {colorPresets.map((color) => (
              <button
                key={color}
                onClick={() => onCustomizationChange('fgColor', color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  fgColor === color ? 'border-indigo-500' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Set QR color to ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Background Color
          </label>
          <div className="flex flex-wrap gap-2">
            {bgColorPresets.map((color) => (
              <button
                key={color}
                onClick={() => onCustomizationChange('bgColor', color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  bgColor === color ? 'border-indigo-500' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Set background color to ${color}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Size
          </label>
          <input
            type="range"
            min="128"
            max="512"
            step="32"
            value={size}
            onChange={(e) => onCustomizationChange('size', Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-500 dark:text-gray-400">{size}px</span>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Error Correction Level
          </label>
          <select
            value={level}
            onChange={(e) => onCustomizationChange('level', e.target.value)}
            className="block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="L">Low</option>
            <option value="M">Medium</option>
            <option value="Q">Quartile</option>
            <option value="H">High</option>
          </select>
        </div>
      </div>
    </div>
  );
}