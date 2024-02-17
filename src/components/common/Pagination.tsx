interface Props {
  page: number;
  lastPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ page, lastPage, onPageChange }: Props) => {
  return (
    <div className="my-10 flxe text-center mr-40 text-lg">
      <button
        disabled={page === 1}
        className="border border-slate-300 py-1 px-4 hover:bg-blue-50 disabled:opacity-50 rounded-tl rounded-bl"
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      <button className="border-y border-blue-500 py-1 px-6 bg-blue-500 text-white">
        {page}
      </button>
      <button
        disabled={page >= lastPage}
        className="border border-slate-300 py-1 px-4 hover:bg-blue-50 disabled:opacity-50 rounded-tr rounded-br"
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
