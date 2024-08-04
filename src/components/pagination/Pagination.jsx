export default function Pagination({
  params,
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function getPageNumbers() {
    const pages = [];
    const maxPagesToShow = 5;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - halfMaxPagesToShow, 1);
      let endPage = Math.min(currentPage + halfMaxPagesToShow, totalPages);

      if (startPage === 1) {
        endPage = maxPagesToShow;
      } else if (endPage === totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (startPage > 1) {
        if (startPage - 1 >= 2) {
          pages.unshift("...");
        }
        pages.unshift(1);
      }
      if (endPage < totalPages) {
        if (totalPages - endPage !== 1) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  }

  return (
    <div className="flex justify-center items-center gap-4">
      <button
        className="w-10 h-10 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() => onPageChange({ ...params, page: currentPage - 1 })}
        disabled={currentPage === 1}
      >
        <img src="/right-black.svg" className="w-5" alt="" />
      </button>
      <div className="flex items-center gap-4 shadow-lg min-w-64 justify-center py-2 rounded-xl px-6">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => onPageChange({ ...params, page: page })}
            className={`w-7 h-7 rounded-full ${
              currentPage === page && page !== "..."
                ? "bg-black text-white"
                : ""
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="w-10 h-10 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() => onPageChange({ ...params, page: currentPage + 1 })}
        disabled={currentPage === totalPages}
      >
        <img src="/left-black.svg" className="w-5" alt="" />
      </button>
    </div>
  );
}
