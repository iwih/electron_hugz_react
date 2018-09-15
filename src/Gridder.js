import React from 'react'
import './Gridder.css'

const ReactDataGrid = require('react-data-grid')
const remote = window.require('electron').remote;

class Gridder extends React.Component {

    generateColumns() {
        this._columns = [
            {key: 'id', name: 'ID'},
            {key: 'id1', name: 'ID'},
            {key: 'id2', name: 'ID'},
            {key: 'id3', name: 'ID'},
            {key: 'id4', name: 'ID'},
            {key: 'id5', name: 'ID'},
            {key: 'id6', name: 'ID'},
            {key: 'id7', name: 'ID'},
            {key: 'id8', name: 'ID'},
            {key: 'id9', name: 'ID'},
            {key: 'id10', name: 'ID'},
            {key: 'id11', name: 'ID'},
            {key: 'id12', name: 'ID'},
            {key: 'id13', name: 'ID'},
            {key: 'id14', name: 'ID'}
        ]
    }

    generateRows() {
        let rows = []
        for (let i = 0; i < 1000; i++) {
            rows.push({
                id: 'row is # ' + i,
                id1: 'row is # ' + i,
                id2: 'row is # ' + i,
                id3: 'row is # ' + i,
                id4: 'row is # ' + i,
                id5: 'row is # ' + i,
                id6: 'row is # ' + i,
                id7: 'row is # ' + i,
                id8: 'row is # ' + i,
                id9: 'row is # ' + i,
                id10: 'row is # ' + i,
                id11: 'row is # ' + i,
                id12: 'row is # ' + i,
                id13: 'row is # ' + i,
                id14: 'row is # ' + i
            })
        }

        this._rows = rows;
    }

    rowGetter = (i) => {
        return this._rows[i]
    }

    render() {
        this.generateColumns();

        this.generateRows();

        return (
            <ReactDataGrid
                className={'react-grid'}
                minHeight={remote.getCurrentWindow().getSize()[1]}
                columns={this._columns}
                rowGetter={this.rowGetter}
                rowsCount={this._rows.length}/>
        );
    }
}

export default Gridder