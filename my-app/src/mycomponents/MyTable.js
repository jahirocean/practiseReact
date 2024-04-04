import React, { Component } from 'react';
import ReactTable from 'react-table';

class MyTable extends Component {
    render() {

        const dataTable=[]
        const col=[{Header: "Name", accessor: ""}, {Header: "Age", accessor: ""}]

        return (
            <div>
                <ReactTable
                data={dataTable}
                columns={col}
                defaultPageSize={2}
                pageSizeOptions={[2,4,6,8,10,12]}
                />
                
            </div>
        );
    }
}

export default MyTable;