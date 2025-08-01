export interface Leader {
  name: string;
  donations: number;
}

export interface User {
  name: string;
  referralCode: string;
  donations: number;
}

export interface Linkinterface {
  to: string;
  label: string;
}

export interface CardProps {
  title: string;
  value: string | number | string[];
  icon?: React.ReactNode;
  isList?: boolean;
}