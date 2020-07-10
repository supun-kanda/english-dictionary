import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

export default class WordGrid extends Component {
    render() {
        const words = this.props.words || [];
        return (
            <div>
                <GridList cellHeight={180} cols={3} spacing={10}>
                    {words.map((word) => (
                        <GridListTile key={word.id} style={{ textAlign: "center" }} onClick={() => this.props.onWordClick(word.id)}>
                            <h1>{word.name}</h1>
                            <GridListTileBar
                                subtitle={<span>Views: {word.referCount || 0}</span>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div >
        )
    }
}
