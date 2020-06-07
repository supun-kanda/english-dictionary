import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

export default class WordView extends Component {
    render() {
        const top100Films = [{ title: 'A' }, { title: 'B' }, { title: 'C' }];
        return (
            <div>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </div>
        )
    }
}
