export interface QRCodeProps {
    url: string;
    size: number;
    fgColor: string;
    bgColor: string;
    includeMargin: boolean;
    level: 'L' | 'M' | 'Q' | 'H';
  }