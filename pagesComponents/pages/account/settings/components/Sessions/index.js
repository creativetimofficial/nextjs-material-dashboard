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
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDBadge from "/components/MDBadge";

function Sessions() {
  const actionButtonStyles = {
    "& .material-icons-round": {
      transform: `translateX(0)`,
      transition: "all 200ms cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(4px)`,
    },
  };

  return (
    <Card id="sessions">
      <MDBox p={3} lineHeight={1}>
        <MDBox mb={1}>
          <MDTypography variant="h5">Sessions</MDTypography>
        </MDBox>
        <MDTypography variant="button" color="text" fontWeight="regular">
          This is a list of devices that have logged into your account. Remove
          those that you do not recognize.
        </MDTypography>
      </MDBox>
      <MDBox pb={3} px={3} sx={{ overflow: "auto" }}>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center">
            <MDBox
              textAlign="center"
              color="text"
              px={{ xs: 0, md: 1.5 }}
              opacity={0.6}
            >
              <Icon fontSize="default">desktop_windows</Icon>
            </MDBox>
            <MDBox height="100%" ml={2} lineHeight={1} mr={2}>
              <MDTypography
                display="block"
                variant="button"
                fontWeight="regular"
                color="text"
              >
                Bucharest 68.133.163.201
              </MDTypography>
              <MDTypography variant="caption" color="text">
                Your current session
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBadge
              variant="contained"
              size="xs"
              badgeContent="active"
              color="success"
              container
            />
            <MDBox mx={2} lineHeight={1}>
              <MDTypography
                variant="button"
                color="secondary"
                fontWeight="regular"
              >
                EU
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="dark"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>
                arrow_forward
              </Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center" mr={2}>
            <MDBox
              textAlign="center"
              color="text"
              px={{ xs: 0, md: 1.5 }}
              opacity={0.6}
            >
              <Icon fontSize="default">desktop_windows</Icon>
            </MDBox>
            <MDBox ml={2}>
              <MDTypography
                display="block"
                variant="body2"
                fontWeight="regular"
                color="text"
              >
                Chrome on macOS
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBox mx={2} lineHeight={1}>
              <MDTypography
                variant="button"
                color="secondary"
                fontWeight="regular"
              >
                US
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="dark"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>
                arrow_forward
              </Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
        <Divider />
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={{ xs: "max-content", sm: "100%" }}
        >
          <MDBox display="flex" alignItems="center" mr={2}>
            <MDBox
              textAlign="center"
              color="text"
              px={{ xs: 0, md: 1.5 }}
              opacity={0.6}
            >
              <Icon fontSize="default">phone_iphone</Icon>
            </MDBox>
            <MDBox ml={2}>
              <MDTypography
                display="block"
                variant="body2"
                fontWeight="regular"
                color="text"
              >
                Safari on iPhone
              </MDTypography>
            </MDBox>
          </MDBox>
          <MDBox display="flex" alignItems="center">
            <MDBox mx={2} lineHeight={1}>
              <MDTypography
                variant="button"
                color="secondary"
                fontWeight="regular"
              >
                US
              </MDTypography>
            </MDBox>
            <MDTypography
              component="a"
              href="#"
              variant="button"
              color="dark"
              fontWeight="regular"
              sx={actionButtonStyles}
            >
              See more&nbsp;
              <Icon sx={{ fontWeight: "bold", verticalAlign: "middle" }}>
                arrow_forward
              </Icon>
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Sessions;
