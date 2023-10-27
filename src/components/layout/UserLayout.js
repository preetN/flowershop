import React from "react";
import PublicHeader from "./PublicHeader";
import Footer from "./Footer";
import { Box } from "@mui/material";
function UserLayout({ children }) {
  return (
    <>
      <div style={{ position: "sticky", top: "0", zIndex: 99 }}>
        <PublicHeader />
      </div>

      <Box minHeight="75vh">{children}</Box>

      <Footer />
    </>
  );
}

export default UserLayout;
