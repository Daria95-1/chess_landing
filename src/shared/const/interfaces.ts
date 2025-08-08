export interface EventInfoItem {
  label: string;
  value: string;
}

export interface InfoTableProps {
  data: EventInfoItem[];
}

export interface StepItem {
  number: number;
  value: string;
  type?: 'span2rows' | 'span2cols';
}