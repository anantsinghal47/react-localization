
import { useRef, useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'



function App() {


  const gridRef = useRef(null);


  const [rowData, setRowData] = useState([
    {
      'name': "Anant",
      "place": "Gwalior",
      "blood": "o"
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
      sortable:true,
      filter: 'agTextColumnFilter',
      sort:'asc',
      floatingFilter:true

      // cellStyle: getCellStyle
    },
    {
      field: 'place',
      filter: true,
      editable: true,
      sortable:true,
      floatingFilter:true


      // cellStyle: getCellStyle
    },
    {
      field: 'blood',
      editable: true,
      sortable:true,
      floatingFilter:true


      // cellStyle: getCellStyle
    },
  ])

  const handleFilterChanged = () => {
    const gridApi = gridRef.current.api; // Get the grid API instance
    const filterModel = gridApi.getFilterModel(); // Get the filter model
  
    // Iterate over the filter model to access filter values
    for (const colId in filterModel) {
      const filterValue = filterModel[colId].filter;
      console.log(`Column: ${colId}, Filter Value: ${filterValue}`);
    }
  };
  
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
        floatingFiltersHeight={38}
        onFilterChanged={handleFilterChanged}
        ref={gridRef}




        onCellValueChanged={onCellValueChanged}
      />


    </div>
  );
}

export default App;
