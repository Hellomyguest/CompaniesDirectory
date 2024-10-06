import { useRef } from 'react';
import { Table } from '../../../../shared/ui/table/Table';
import { CompaniesDirectoryBody } from './CompaniesDirectoryBody';
import { CompaniesDirectoryHeader } from './CompaniesDirectoryHeader';
import { TableRef } from '../../../../shared/ui/table/TableBody/TableBody';

export const CompaniesDirectory = () => {
  const tableRef = useRef<TableRef>(null);
  return (
    <Table>
      <CompaniesDirectoryHeader tableRef={tableRef} />
      <CompaniesDirectoryBody tableRef={tableRef} />
    </Table>
  );
};
