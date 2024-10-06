import { v4 as uuid } from 'uuid';
import { ADDRESSES, COMPANIES } from './mocks';

export type Company = {
  id: string;
  name: string;
  adress: string;
};

export const dbGenerator = (count: number): Company[] => {
  const companies = [];
  for (let i = 0; i < count; i++) {
    const n = i % 20000;
    companies.push({ id: uuid(), name: COMPANIES[n], adress: ADDRESSES[n] });
  }

  return companies;
};
