import { Company } from '../../../shared/lib/dbGenerator/dbGenerator';
import { Column } from '../types/types';

export const columns: Column<Company>[] = [
  { title: 'Название компании', property: 'name', percentWidth: 30 },
  { title: 'Адрес', property: 'adress', percentWidth: 70 }
];
