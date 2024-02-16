import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Transaction } from "./TransactionType";

interface Props {
  data: Transaction[];
  columns: ColumnDef<Transaction>[];
}

const TanstackTable = ({ data, columns }: Props) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className="table-auto border-collapse w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-blue-50">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border-t border-b border-slate-100 text-left py-2 px-4"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-blue-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border-t border-b border-slate-200 py-2 px-4"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TanstackTable;
