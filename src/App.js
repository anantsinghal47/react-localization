
import { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'





function App() {




  const [rowData, setRowData] = useState([
    {
      'name': "Anant",
      "place": "Gwalior",
      "blood": "o"
    },
    {
      'name': "Sajal ",
      "place": "Gwalior",
      "blood": "B"
    },
    {
      'name': "Divyanshu",
      "place": "Gwalior",
      "blood": "B"
    },
  ]);


  const [colDefs, setColDefs] = useState([
    {
      field: 'name',
      editable: true,

      // cellStyle: getCellStyle
    },
    {
      field: 'place',
      editable: true,
      // cellStyle: getCellStyle
    },
    {
      field: 'blood',
      editable: true,
      // cellStyle: getCellStyle
    },
  ])


  function onCellValueChanged(params) {
    if (params.oldValue !== params.newValue) {
      params.colDef.cellStyle = (p) =>
        p.rowIndex.toString() === params.node.id ?

          {
            'backgroundColor': 'orange',
            "outline": "0.5px dotted grey",
            "outlineOffset": "-5px",
            "border": "none ",
            "boxShadow": "inset 0 0 0 5px white"
          }
          : {};

      params.api.refreshCells({
        force: true,
        columns: [params.column.getId()],
        rowNodes: [params.node]
      });
    }
  }


  return (
    <div className='ag-theme-alpine' style={{
      height: "200px",

    }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        singleClickEdit={true}
        onCellValueChanged={onCellValueChanged}
      />


    </div>
  );
}

export default App;
