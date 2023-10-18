/* eslint-disable no-param-reassign */
/**
=========================================================
* NextJS Material Dashboard 2 PRO TS - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect, Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

import Link from "next/link";

// @mui material components
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";

// NextJS Material Dashboard 2 PRO TS components
import MDBox from "/components/MDBox";
import MDTypography from "/components/MDTypography";
import MDButton from "/components/MDButton";

// NextJS Material Dashboard 2 PRO TS examples components
import DefaultNavbarDropdown from "/examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "/examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// NextJS Material Dashboard 2 PRO TS Base Styles
import breakpoints from "/assets/theme/base/breakpoints";

// NextJS Material Dashboard 2 PRO context
import { useMaterialUIController } from "/context";

function DefaultNavbar({ routes, brand, transparent, light, action }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(
    ({ name, icon, href, route, collapse }) => {
      return (
        <DefaultNavbarDropdown
          key={name}
          name={name}
          icon={icon}
          href={href}
          route={route}
          collapse={Boolean(collapse)}
          onMouseEnter={({ currentTarget }) => {
            if (collapse) {
              setDropdown(currentTarget);
              setDropdownEl(currentTarget);
              setDropdownName(name);
            }
          }}
          onMouseLeave={() => collapse && setDropdown(null)}
          light={light}
        />
      );
    }
  );

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(
    ({ name, collapse, columns, rowsPerColumn }) => {
      let template;

      // Render the dropdown menu that should be display as columns
      if (collapse && columns && name === dropdownName) {
        const calculateColumns = collapse.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / rowsPerColumn);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);

        template = (
          <Grid key={name} container spacing={3} py={1} px={1.5}>
            {calculateColumns.map((cols, key) => {
              const gridKey = `grid-${key}`;
              const dividerKey = `divider-${key}`;

              return (
                <Grid
                  key={gridKey}
                  item
                  xs={12 / columns}
                  sx={{ position: "relative" }}
                >
                  {cols.map((col, index) => (
                    <Fragment key={col.name}>
                      <MDBox
                        key={col.name}
                        width="100%"
                        display="flex"
                        alignItems="center"
                        py={1}
                        mt={index !== 0 ? 2 : 0}
                      >
                        <MDBox
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width="1.5rem"
                          height="1.5rem"
                          borderRadius="md"
                          color="text"
                          mr={1}
                          fontSize="1rem"
                          lineHeight={1}
                        >
                          {col.icon}
                        </MDBox>
                        <MDTypography
                          display="block"
                          variant="button"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {col.name}
                        </MDTypography>
                      </MDBox>
                      {col.collapse.map((item) =>
                        item.route ? (
                          <Link key={item.name} href={item.route}>
                            <MDTypography
                              minWidth="11.25rem"
                              display="block"
                              variant="button"
                              color="text"
                              textTransform="capitalize"
                              fontWeight="regular"
                              py={0.625}
                              px={2}
                              sx={({
                                palette: { grey, dark },
                                borders: { borderRadius },
                              }) => ({
                                borderRadius: borderRadius.md,
                                cursor: "pointer",
                                transition: "all 300ms linear",

                                "&:hover": {
                                  backgroundColor: grey[200],
                                  color: dark.main,
                                },
                              })}
                            >
                              {item.name}
                            </MDTypography>
                          </Link>
                        ) : (
                          <MDTypography
                            key={item.name}
                            component={MuiLink}
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            minWidth="11.25rem"
                            display="block"
                            variant="button"
                            color="text"
                            textTransform="capitalize"
                            fontWeight="regular"
                            py={0.625}
                            px={2}
                            sx={({
                              palette: { grey, dark },
                              borders: { borderRadius },
                            }) => ({
                              borderRadius: borderRadius.md,
                              cursor: "pointer",
                              transition: "all 300ms linear",

                              "&:hover": {
                                backgroundColor: grey[200],
                                color: dark.main,
                              },
                            })}
                          >
                            {item.name}
                          </MDTypography>
                        )
                      )}
                    </Fragment>
                  ))}
                  {key !== 0 && (
                    <Divider
                      key={dividerKey}
                      orientation="vertical"
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "-4px",
                        transform: "translateY(-45%)",
                        height: "90%",
                      }}
                    />
                  )}
                </Grid>
              );
            })}
          </Grid>
        );

        // Render the dropdown menu that should be display as list items
      } else if (collapse && name === dropdownName) {
        template = collapse.map((item) => {
          const itemTemplate = (
            <MDTypography
              key={item.name}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              variant="button"
              textTransform="capitalize"
              minWidth={item.description ? "14rem" : "12rem"}
              color={item.description ? "dark" : "text"}
              fontWeight={item.description ? "bold" : "regular"}
              py={item.description ? 1 : 0.625}
              px={2}
              sx={({ palette: { grey, dark }, borders: { borderRadius } }) => ({
                borderRadius: borderRadius.md,
                cursor: "pointer",
                transition: "all 300ms linear",

                "&:hover": {
                  backgroundColor: grey[200],
                  color: dark.main,

                  "& *": {
                    color: dark.main,
                  },
                },
              })}
              onMouseEnter={({ currentTarget }) => {
                if (item.dropdown) {
                  setNestedDropdown(currentTarget);
                  setNestedDropdownEl(currentTarget);
                  setNestedDropdownName(item.name);
                }
              }}
              onMouseLeave={() => {
                if (item.dropdown) {
                  setNestedDropdown(null);
                }
              }}
            >
              {item.description ? (
                <MDBox display="flex" py={0.25} fontSize="1rem" color="text">
                  {typeof item.icon === "string" ? (
                    <Icon color="inherit">{item.icon}</Icon>
                  ) : (
                    <MDBox color="inherit">{item.icon}</MDBox>
                  )}
                  <MDBox pl={1} lineHeight={0}>
                    <MDTypography
                      variant="button"
                      display="block"
                      fontWeight="bold"
                      textTransform="capitalize"
                    >
                      {item.name}
                    </MDTypography>
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                    >
                      {item.description}
                    </MDTypography>
                  </MDBox>
                </MDBox>
              ) : (
                <MDBox display="flex" alignItems="center" color="text">
                  <Icon sx={{ mr: 1 }}>{item.icon}</Icon>
                  {item.name}
                </MDBox>
              )}
              {item.collapse && (
                <Icon
                  sx={{
                    fontWeight: "normal",
                    verticalAlign: "middle",
                    mr: -0.5,
                  }}
                >
                  keyboard_arrow_right
                </Icon>
              )}
            </MDTypography>
          );

          return item.route ? (
            <Link key={item.name} href={item.route}>
              {itemTemplate}
            </Link>
          ) : (
            <MuiLink
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {itemTemplate}
            </MuiLink>
          );
        });
      }

      return template;
    }
  );

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 999 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MDBox borderRadius="lg">
            <MDTypography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </MDTypography>
            <MDBox shadow="lg" borderRadius="lg" p={1.625} mt={1}>
              {renderRoutes}
            </MDBox>
          </MDBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
        let template;

        if (parentName === nestedDropdownName) {
          template =
            nestedCollapse &&
            nestedCollapse.map((item) => {
              const nestedItemTemplate = (
                <MDTypography
                  key={item.name}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={item.description ? "dark" : "text"}
                  fontWeight={item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  sx={({
                    palette: { grey, dark },
                    borders: { borderRadius },
                  }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: grey[200],
                      color: dark.main,

                      "& *": {
                        color: dark.main,
                      },
                    },
                  })}
                >
                  {item.description ? (
                    <MDBox>
                      {item.name}
                      <MDTypography
                        display="block"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        sx={{ transition: "all 300ms linear" }}
                      >
                        {item.description}
                      </MDTypography>
                    </MDBox>
                  ) : (
                    item.name
                  )}
                  {item.collapse && (
                    <Icon
                      fontSize="small"
                      sx={{
                        fontWeight: "normal",
                        verticalAlign: "middle",
                        mr: -0.5,
                      }}
                    >
                      keyboard_arrow_right
                    </Icon>
                  )}
                </MDTypography>
              );

              return item.route ? (
                <Link key={item.name} href={item.route}>
                  {nestedItemTemplate}
                </Link>
              ) : (
                <MuiLink
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                ></MuiLink>
              );
            });
        }

        return template;
      })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 999 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white } }) => white.main,
          }}
        >
          <MDBox ml={2.5} mt={-2.5} borderRadius="lg">
            <MDBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </MDBox>
          </MDBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position="absolute"
        left={0}
        zIndex={99}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">

            <MDBox
              py={transparent ? 1.5 : 0.75}
              lineHeight={1}
              pl={{ xs: 0, lg: 1 }}
            >
              <MDTypography
                variant="button"
                fontWeight="bold"
                color={light ? "white" : "dark"}
              >
                {brand}
              </MDTypography>
            </MDBox>
          </Link>
          <MDBox
            color="inherit"
            display={{ xs: "none", lg: "flex" }}
            m={0}
            p={0}
          >
            {renderNavbarItems}
          </MDBox>
          {action &&
            (action.type === "internal" ? (
              <MDBox display={{ xs: "none", lg: "inline-block" }}>
                <Link href={action.route}>
                  <MDButton
                    variant="gradient"
                    color={action.color ? action.color : "dark"}
                    size="small"
                    passHref
                  >
                    {action.label}
                  </MDButton>

                </Link>
              </MDBox>
            ) : (
              <MDBox display={{ xs: "none", lg: "inline-block" }}>
                <MDButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant="gradient"
                  color={action.color ? action.color : "dark"}
                  size="small"
                  sx={{ mt: -0.3 }}
                >
                  {action.label}
                </MDButton>
              </MDBox>
            ))}
          <MDBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </MDBox>
        </MDBox>
        <MDBox
          bgColor={transparent ? "white" : "transparent"}
          shadow={transparent ? "lg" : "none"}
          borderRadius="md"
          px={transparent ? 2 : 0}
        >
          {mobileView && (
            <DefaultNavbarMobile routes={routes} open={mobileNavbar} />
          )}
        </MDBox>
      </MDBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Material Dashboard PRO",
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "default",
        "white",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
