import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, makeStyles } from '@material-ui/core';

export default class SimpleTable extends Component {
    render() {
        const classes = makeStyles({
            table: {
                minWidth: 10000,
            },
        });
        return (
            <TableContainer component={Paper} >
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        {this.props.rows.map((row) => (
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
}