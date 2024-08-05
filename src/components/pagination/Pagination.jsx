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
    <div className="flex justify-center items-center gap-2">
      <button
        className="desktop:w-10 desktop:h-10 tablet:w-9 tablet:h-9 w-6 h-6 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() => onPageChange({ ...params, page: currentPage - 1 })}
        disabled={currentPage === 1}
      >
        <img
          src="/right-black.svg"
          className="desktop:w-5 tablet:w-5 w-4"
          alt=""
        />
      </button>
      <div className="flex items-center desktop:gap-4 tablet:gap-4 gap-2 shadow-lg desktop:min-w-64 tablet:min-w-64 min-w-40 justify-center py-2 rounded-xl desktop:px-6 tablet:px-6s px-2">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            disabled={page === "..."}
            onClick={() => onPageChange({ ...params, page: page })}
            className={`desktop:w-7 desktop:h-7 tablet:w-6 tablet:h-6 w-5 h-5 rounded-full text-center flex justify-center items-center ${
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
        className="desktop:w-10 desktop:h-10 tablet:w-10 tablet:h-10 w-6 h-6 transition hover:bg-slate-200 flex items-center justify-center rounded-full"
        onClick={() => onPageChange({ ...params, page: currentPage + 1 })}
        disabled={currentPage === totalPages}
      >
        <img
          src="/left-black.svg"
          className="desktop:w-5 tablet:w-5 w-4"
          alt=""
        />
      </button>
    </div>
  );
}
