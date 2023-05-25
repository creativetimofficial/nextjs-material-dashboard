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

import Link from "next/link";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";

function CategoriesList({ title, categories }) {
  const renderItems = categories.map(
    ({ color, icon, name, description, route }, key) => (
      <MDBox
        key={name}
        component="li"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="lg"
        py={1}
        pr={2}
        mb={categories.length - 1 === key ? 0 : 1}
      >
        <MDBox display="flex" alignItems="center">
          <MDBox
            display="grid"
            alignItems="center"
            justifyContent="center"
            bgColor={color}
            borderRadius="lg"
            shadow="md"
            color="white"
            width="2rem"
            height="2rem"
            mr={2}
            variant="gradient"
            fontSize="0.875rem"
          >
            <Icon
              sx={{
                display: "grid",
                placeItems: "center",
              }}
            >
              {icon}
            </Icon>
          </MDBox>
          <MDBox display="flex" flexDirection="column">
            <MDTypography
              variant="button"
              color={color}
              fontWeight="medium"
              gutterBottom
            >
              {name}
            </MDTypography>
            <MDTypography variant="caption" color="text">
              {description}
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox display="flex">
          <MDTypography
            component={Link}
            variant="button"
            color={color}
            href={route}
            sx={{
              lineHeight: 0,
              transition: "all 0.2s cubic-bezier(.34,1.61,.7,1.3)",
              p: 0.5,

              "&:hover, &:focus": {
                transform: "translateX(5px)",
              },
            }}
            passHref
          >
            <Icon sx={{ fontWeight: "bold" }}>chevron_right</Icon>
          </MDTypography>
        </MDBox>
      </MDBox>
    )
  );

  return (
    <Card>
      <MDBox pt={2} px={2}>
        <MDTypography
          variant="h6"
          fontWeight="medium"
          textTransform="capitalize"
        >
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderItems}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the CategoriesList
CategoriesList.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
