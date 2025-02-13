import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import SearchComponent from "@/components/ui/SearchComponent";
import DynamicTable from "@/components/ui/tablewithentries";
import UniversalButton from "@/components/ui/UniversalButton";
import { useNavigate } from "react-router-dom";

function Groups() {
  const [searchValue, setSearchValue] = useState("");

  // Sample data for the table with the new structure
  const entries = [
    {
      label: "Copy",
      icon: <UniversalButton children={"Copy"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "CSV",
      icon: <UniversalButton children={"CSV"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Excel",
      icon: <UniversalButton children={"Excel"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Pdf",
      icon: <UniversalButton children={"Pdf"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
    {
      label: "Print",
      icon: <UniversalButton children={"Print"} />,
      handler: (row) => {
        handleOpenModal(row); // Open the modal instead of alert
      },
    },
  ];
  const navigate = useNavigate();

  const tableData = [
    {
      id: "001",
      name: "Server 1",
      type: "Group A",
    },
    {
      id: "002",
      name: "Server 2",
      type: "Group B",
    },
  ];

  // Table headers (Only 4 columns)
  const headers = ["id", "name", "type"];

  // Table actions
  const actions = [
    {
      label: "Edit",
      icon: <UniversalButton children={"Export"} />,
      handler: (row) => console.log("Edit", row),
    },
    {
      label: "Delete",
      icon: <UniversalButton children={"Export"} />,
      handler: (row) => console.log("Delete", row),
    },
  ];

  // Top action buttons
  return (
    <div className="min-h-screen bg-[#42596b] text-white p-4">
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          width: "98%",
        }}
      >
        <UniversalButton
          onClick={() => navigate("/dashboard/create_group")}
          height={"55px"}
          children="Create Group"
        />
        <SearchComponent
          placeHolder="Search Username"
          setSearchTerm={setSearchValue}
          searchTerm={searchValue}
        />
      </Box>

      {/* Table Component */}
      <Paper sx={{ width: "98%", backgroundColor: "#2f3a4d", mt: 3, p: 2 }}>
        <DynamicTable
          entriesBtn={entries}
          headers={headers}
          data={tableData}
          actions={actions}
        />
      </Paper>
    </div>
  );
}

export default Groups;
