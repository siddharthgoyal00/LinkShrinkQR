
import { QRCodeSVG } from 'qrcode.react';
import { ColorPicker } from './ColorPicker';
import { QRCodeProps } from '../../types/qr';

interface QRCustomizerProps extends QRCodeProps {
  onCustomizationChange: (key: string, value: any) => void;
}

export function QRCustomizer({
  url,
  size,
  fgColor,
  bgColor,
  includeMargin,
  level,
  onCustomizationChange,
}: QRCustomizerProps) {
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
        <ColorPicker
          label="QR Code Color"
          selectedColor={fgColor}
          onChange={(color) => onCustomizationChange('fgColor', color)}
          colors={[
            '#000000', '#FF0000', '#00FF00', '#0000FF', 
            '#FF00FF', '#00FFFF', '#FFA500', '#800080'
          ]}
        />

        <ColorPicker
          label="Background Color"
          selectedColor={bgColor}
          onChange={(color) => onCustomizationChange('bgColor', color)}
          colors={[
            '#FFFFFF', '#F3F4F6', '#FEF3C7', '#ECFDF5',
            '#EFF6FF', '#EEF2FF', '#FDF2F8', '#FCE7F3'
          ]}
        />

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