"use client";

import { crewCols, crewList } from '@/app/lib/placeholder-data';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import clsx from 'clsx';




export default function CrewTable() {
    const columns: GridColDef[] = crewCols;
    const rows = crewList;

    return (
        <div className=' h-96 w-full'>
            <DataGrid
              columns={columns}
              rows={rows}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5,10]}
              getCellClassName={(params: GridCellParams<Number,any,any,any>) => {
                return (
                  clsx(" text-blue-400")
                );
              }}
            />       
        </div>
    );
}