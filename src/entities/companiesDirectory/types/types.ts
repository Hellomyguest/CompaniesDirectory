export type Column<T extends object> = {
  title: string;
  property: Extract<keyof T, string>;
  percentWidth: number;
};
