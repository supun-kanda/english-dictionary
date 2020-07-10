import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { Link } from "react-router-dom";

export default class WordGrid extends Component {
    componentDidMount() {
        this.props.fetchWordGridBatch(null);
    }

    render() {
        const words = this.props.wordGrid || [];
        return (
            <div>
                <GridList cellHeight={180} cols={3} spacing={10}>
                    {words.map((word) => (
                        <div key={word.id}>
                            <Link to={`/word/${word.id}/view`}>
                                <GridListTile key={word.id} style={{ textAlign: "center" }}>
                                    <h1>{word.name}</h1>
                                    <br /><br /><br /><br />
                                    <GridListTileBar
                                        subtitle={<span>Views: {word.referCount || 0}</span>}
                                    />
                                </GridListTile>
                            </Link>
                        </div>
                    ))}
                </GridList>
            </div>
        )
    }
}
