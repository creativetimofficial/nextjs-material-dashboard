/**
=========================================================
* NextJS Material Dashboard 2 - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-dashboard-pro
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import MDBadge from "/components/MDBadge";

function Authentication() {
  return (
    <Card id="2fa" sx={{ overflow: "visible" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <MDTypography variant="h5">Two-factor authentication</MDTypography>
        <MDBadge
          variant="contained"
          color="success"
          badgeContent="enabled"
          container
        />
      </MDBox>
      <MDBox p={3}>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            Security keys
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                No Security keys
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              add
            </MDButton>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            SMS number
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                +3012374423
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              edit
            </MDButton>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <MDTypography variant="body2" color="text">
            Authenticator app
          </MDTypography>
          <MDBox
            display="flex"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <MDBox mx={{ xs: 0, sm: 2 }} mb={{ xs: 1, sm: 0 }}>
              <MDTypography variant="button" color="text" fontWeight="regular">
                Not Configured
              </MDTypography>
            </MDBox>
            <MDButton variant="outlined" color="dark" size="small">
              set up
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Authentication;
