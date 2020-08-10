import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { getBooksService } from "../utils/api";

const Wrapper = styled.div`
  margin: 50px 50px;
`;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Books = () => {
  const classes = useStyles();

  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setStatus("fetching");
      const response = await getBooksService();
      setData(response.docs);
      setStatus("fetched");
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Author</TableCell>
              <TableCell align="right">ISBN</TableCell>
              <TableCell align="right">Catergory</TableCell>
              <TableCell align="right">In Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.ISBN}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

export default Books;
