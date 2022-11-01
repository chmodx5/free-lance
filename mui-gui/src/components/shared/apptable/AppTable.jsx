import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import TableSortLabel from "@mui/material/TableSortLabel";
import Card from "./../card/Card";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

export default function AppTable({ table_data, table_headers }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };
  return (
    <>
      <Card>
        <>
          <table className={"w-full"}>
            <thead className={"border-b "}>
              <tr>
                {table_headers.map((table_header) => (
                  <th
                    key={table_header.id}
                    className={"text-left px-3 py-2"}
                    sortDirection={orderBy === table_header.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === table_header.id}
                      direction={orderBy === table_header.id ? order : "asc"}
                      onClick={createSortHandler(table_header.id)}
                      classes={{ root: "capitalize" }}
                    >
                      {table_header.label}
                    </TableSortLabel>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-300">
              {stableSort(table_data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <tr
                      tabIndex={-1}
                      className={"hover:bg-white hover:font-semibold"}
                      key={row.id}
                    >
                      {Object.keys(row).map((i) => {
                        if (i == "id" || i == "Id" || i == "ID") {
                          return null;
                        } else {
                          return (
                            <td
                              className={"py-2 capitalize px-3"}
                              key={i}
                              id={i}
                            >
                              {row[i]}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={table_data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </>
  );
}
