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
import Image from "next/image";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// NextJS Material Dashboard 2 PRO components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";
import MDAvatar from "/components/MDAvatar";

function DefaultProjectCard({
  image,
  label,
  title,
  description,
  action,
  authors,
}) {
  const renderAuthors = authors.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="bottom">
      <MDAvatar
        src={media.src || media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <MDBox
        position="relative"
        width="100.25%"
        shadow="xl"
        borderRadius="xl"
        overflow="hidden"
      >
        <MDBox maxWidth="100%" shadow="md">
          {image && image.src ? (
            <Image
              src={image}
              alt={title}
              quality={100}
              sizes="100%"
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          ) : (
            image
          )}
        </MDBox>
      </MDBox>
      <MDBox mt={1} mx={0.5}>
        <MDTypography
          variant="button"
          fontWeight="regular"
          color="text"
          textTransform="capitalize"
        >
          {label}
        </MDTypography>
        <MDBox mb={1}>
          {action.type === "internal" ? (
            (<Link href={action.route}>

              <MDTypography variant="h5" textTransform="capitalize">
                {title}
              </MDTypography>

            </Link>)
          ) : (
            <MDTypography
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="h5"
              textTransform="capitalize"
            >
              {title}
            </MDTypography>
          )}
        </MDBox>
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {action.type === "internal" ? (
            (<Link href={action.route}>

              <MDButton variant="outlined" size="small" color={action.color}>
                {action.label}
              </MDButton>

            </Link>)
          ) : (
            <MDButton
              component="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              color={action.color}
            >
              {action.label}
            </MDButton>
          )}
          <MDBox display="flex">{renderAuthors}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultProjectCard
DefaultProjectCard.defaultProps = {
  authors: [],
};

// Typechecking props for the DefaultProjectCard
DefaultProjectCard.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "white",
    ]).isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  authors: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultProjectCard;
