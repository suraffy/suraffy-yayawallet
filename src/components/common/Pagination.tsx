interface Props {
  page: number;
  lastPage: number;
  isFetching: boolean;
  onPageChange: (newPage: number) => void;
}

const Pagination = ({ page, lastPage, isFetching, onPageChange }: Props) => {
  return (
    <div className="my-10 flxe text-center text-lg">
      <button
        disabled={page === 1}
        className="inline-block border border-slate-300 py-1 px-4 hover:bg-blue-50 disabled:opacity-50 rounded-tl rounded-bl"
        onClick={() => onPageChange(page - 1)}
      >
        Prev
      </button>

      <button className="inline-block border-y border-blue-500 py-1 px-6 bg-blue-500 text-white">
        {isFetching ? "..." : page}
      </button>
      <button
        disabled={page >= lastPage}
        className="inline-block border border-slate-300 py-1 px-4 hover:bg-blue-50 disabled:opacity-50 rounded-tr rounded-br"
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
