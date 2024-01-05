import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ handlePageClick, pageCount }) {
  return (
    <div className="flex justify-center p-2">
      <Pagination
        count={pageCount}
        color="primary"
        onChange={handlePageClick}
      />
    </div>
  );
}
