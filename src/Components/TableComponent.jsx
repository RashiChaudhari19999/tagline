import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { data } from '../Json/data';
const TableComponent = ({ datas,filters }) => {
  const jsonDta=data.filter((item)=>item.mall)||[]
  useEffect(()=>{
if(data.length === 0){
  
}
  },[filters,data])
  return (
    <>
    {
      datas.length>0  || data.filter(item=>item.mall)?
<TableContainer component={Paper}>
     <Table>
       <TableHead>
         <TableRow>
           <TableCell>ID</TableCell>
           <TableCell>Mall</TableCell>
           <TableCell>Address</TableCell>
           <TableCell>Rating</TableCell>
           <TableCell>Category</TableCell>
         </TableRow>
       </TableHead>
       <TableBody>
         {datas.map((row) => (
           <TableRow key={row.id}>
             <TableCell>{row.id}</TableCell>
             <TableCell>{row.mall}</TableCell>
             <TableCell>{row.address}</TableCell>
             <TableCell>{row.rating}</TableCell>
             <TableCell>{row.category}</TableCell>
           </TableRow>
         ))}
       </TableBody>
     </Table>
   </TableContainer>
    :
    
      data.filter(item=>item.city) &&
    
    (<TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.active}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>)
    }
     
   </>

  );
};

export default TableComponent;
