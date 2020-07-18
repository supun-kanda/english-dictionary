import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, makeStyles } from '@material-ui/core';

export default function SimpleTable(props) {
    const classes = makeStyles({
        table: {
            minWidth: 10000,
        },
    });
    return (
        <TableContainer component={Paper} >
            <Table className={classes.table} aria-label="simple table">
                <TableBody>
                    {props.rows.map((row) => (
                        <TableRow key={row.key}>
                            <TableCell component="th" scope="row">
                                {row.key}
                            </TableCell>
                            <TableCell align="left">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}