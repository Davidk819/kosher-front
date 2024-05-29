import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { v4 as uuidv4 } from 'uuid';
import { Login } from '@mui/icons-material';


function createData(
  id: string,
  number: number,
  stage: number,
  status: string,
  Entry_date: Date,
) {
  return { id, number, stage, status, Entry_date };
}
const a: string = uuidv4();
console.log(a);

const rows = [
  createData(uuidv4(),1,1,"t",new Date()),
  createData(uuidv4(),2,1,"k",new Date()),
  createData(uuidv4(),3,1,"t",new Date()),
  createData(uuidv4(),4,1,"k",new Date()),
];

export default function DataTabble() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">number</TableCell>
            <TableCell align="right">stage</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Entry_date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.stage}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.Entry_date.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
