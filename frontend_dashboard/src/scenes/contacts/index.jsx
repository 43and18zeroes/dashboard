import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "zipCode", headerName: "ZipCode", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="CONTACTS" subtitle="List of Contacts for future reference" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderTop: "none !important",
            display: "flex",
            alignItems: "center",
          },
          "& .MuiBox-root p": {
            lineHeight: "1.6",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700] + " !important",
            borderBottom: "none",
          },
          "& .css-1tdeh38": {
            borderTop: "none !important",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-row": {
            transition: "background-color 25ms ease-in-out",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          }
        }}
      >
        <DataGrid components={{ Toolbar: GridToolbar }} rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Contacts;
