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
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import MDBadgeDot from "/components/MDBadgeDot";
import PieChart from "/examples/Charts/PieChart";

// Data
import channelChartData from "/pagesComponents/dashboards/sales/components/ChannelsChart/data";

// NextJS Material Dashboard 2 PRO contexts
import { useMaterialUIController } from "/context";

function ChannelsChart() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <MDTypography variant="h6">Channels</MDTypography>
        <Tooltip title="See traffic channels" placement="bottom" arrow>
          <MDButton
            variant="outlined"
            color="secondary"
            size="small"
            circular
            iconOnly
          >
            <Icon>priority_high</Icon>
          </MDButton>
        </Tooltip>
      </MDBox>
      <MDBox mt={3}>
        <Grid container alignItems="center">
          <Grid item xs={7}>
            <PieChart chart={channelChartData} height="12.5rem" />
          </Grid>
          <Grid item xs={5}>
            <MDBox pr={1}>
              <MDBox mb={1}>
                <MDBadgeDot color="info" size="sm" badgeContent="Facebook" />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot color="primary" size="sm" badgeContent="Direct" />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot color="dark" size="sm" badgeContent="Organic" />
              </MDBox>
              <MDBox mb={1}>
                <MDBadgeDot
                  color="secondary"
                  size="sm"
                  badgeContent="Referral"
                />
              </MDBox>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox
        pt={4}
        pb={2}
        px={2}
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        mt="auto"
      >
        <MDBox width={{ xs: "100%", sm: "60%" }} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            More than <strong>1,200,000</strong> sales are made using referral
            marketing, and <strong>700,000</strong> are from social media.
          </MDTypography>
        </MDBox>
        <MDBox
          width={{ xs: "100%", sm: "40%" }}
          textAlign="right"
          mt={{ xs: 2, sm: "auto" }}
        >
          <MDButton color={darkMode ? "white" : "light"}>read more</MDButton>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default ChannelsChart;
