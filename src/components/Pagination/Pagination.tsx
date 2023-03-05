import ReactPaginate from "react-paginate";

import Icon from "@components/Icon";
import { cls } from "@core/styles/cls";

interface PaginationProps {
  numPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({ numPages, currentPage, onPageChange, className }: PaginationProps) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange(selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      onPageChange={handlePageClick}
      marginPagesDisplayed={1}
      forcePage={currentPage - 1}
      pageCount={numPages}
      nextLabel={<Icon name="arrow-right" />}
      previousLabel={<Icon name="arrow-left" />}
      className={cls(
        "text-lightText text-sm font-bold flex gap-4 items-center bg-white rounded-md p-2 border-gray border",
        className
      )}
      pageClassName="cursor-pointer"
      pageLinkClassName="hover:text-text"
      activeClassName="bg-primary w-[24px] h-[24px] text-text flex justify-center items-center rounded-md"
      activeLinkClassName="hover:text-text"
      previousLinkClassName="text-lightText hover:text-text"
      nextLinkClassName="text-lightText hover:text-text"
      disabledLinkClassName="cursor-default text-lighterText hover:text-lighterText"
    />
  );
};

export default Pagination;
