

interface ColorPickerProps {
  label: string;
  selectedColor: string;
  onChange: (color: string) => void;
  colors: string[];
}

export function ColorPicker({ label, selectedColor, onChange, colors }: ColorPickerProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? 'border-indigo-500' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`Set ${label.toLowerCase()} to ${color}`}
          />
        ))}
      </div>
    </div>
  );
}