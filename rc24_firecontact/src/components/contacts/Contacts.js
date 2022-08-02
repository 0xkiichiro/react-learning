import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch, handleDelete } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Contacts = ({ handleEdit }) => {
  const { isLoading, contactList } = useFetch();
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              /* when data is loading => loading screen */
              isLoading ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="left">
                    Loading
                  </TableCell>
                </TableRow>
              ) : /* when there is no data => cannot find data */
              contactList?.length === 0 ? (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell colSpan={5} align="left">
                    No Result Found
                  </TableCell>
                </TableRow>
              ) : (
                /* when data is fetched => display data */
                contactList.map((item, index) => (
                  <TableRow>
                    <TableCell textAlign="left">
                      {item.userName.toUpperCase()}
                    </TableCell>
                    <TableCell textAlign="left">{item.phoneNumber}</TableCell>
                    <TableCell textAlign="left">{item.gender}</TableCell>
                    <TableCell textAlign="left">
                      <DeleteIcon onClick={() => handleDelete(item.id)} />
                    </TableCell>
                    <TableCell textAlign="left">
                      <EditIcon
                        onClick={() =>
                          handleEdit(
                            item.id,
                            item.userName,
                            item.phoneNumber,
                            item.gender
                          )
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))
              )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
