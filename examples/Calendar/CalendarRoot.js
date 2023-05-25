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
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme, ownerState }) => {
  const { palette, typography, functions, boxShadows } = theme;
  const { darkMode } = ownerState;

  const { white, dark, light, grey, gradients, info } = palette;
  const {
    size,
    fontWeightMedium,
    fontWeightBold,
    fontWeightRegular,
    fontWeightLight,
  } = typography;
  const { linearGradient, pxToRem } = functions;
  const { md } = boxShadows;

  return {
    height: "100%",

    "& .fc-media-screen": {
      height: "100%",
      color: dark.main,
    },

    "& .fc-theme-standard .fc-scrollgrid": {
      border: "none",
    },

    "& .fc-theme-standard thead tr th": {
      borderLeft: "none",
      borderRight: "none",
    },

    "& .fc-theme-standard td, .fc-theme-standard th": {
      borderColor: light.main,
    },

    "& .fc th": {
      textAlign: "center",
    },

    "& .fc .fc-col-header-cell-cushion": {
      fontSize: size.sm,
      fontWeight: fontWeightMedium,
      color: darkMode ? white.main : grey[500],
    },

    "& .fc .fc-daygrid-day-number": {
      color: darkMode ? white.main : grey[700],
      fontSize: size.sm,
      fontWeight: fontWeightLight,
      width: "100%",
      textAlign: "center",
    },

    "& .fc-scrollgrid-section.fc-scrollgrid-section-header > td": {
      border: "none",
    },

    "& .fc-scrollgrid-section.fc-scrollgrid-section-body.fc-scrollgrid-section-liquid > td":
      {
        border: "none",
      },

    "& .fc-scrollgrid-sync-table": {
      height: "auto !important",
    },

    "& .fc .fc-view-harness-active > .fc-view": {
      position: "static",
      height: "100%",
    },

    "& .fc .fc-scroller-liquid-absolute": {
      position: "static",
    },

    "& .fc-daygrid-event": {
      margin: `${pxToRem(0.5)} ${pxToRem(2)}`,
      border: "none",
      borderRadius: pxToRem(5.6),
      fontSize: size.sm,
      fontWeight: fontWeightMedium,
    },

    "& .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events": {
      minHeight: pxToRem(32),
    },

    "& .fc-event-title": {
      fontSize: `${size.xs} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      padding: `${pxToRem(2)} ${pxToRem(4.8)} ${pxToRem(1.5)} !important`,
    },

    "& .fc-button, .fc-today-button, .fc-button:disabled": {
      backgroundColor: `${dark.main} !important`,
      borderColor: `${dark.main} !important`,
      fontSize: `${size.sm} !important`,
      boxShadow: `${md} !important`,
      opacity: "1 !important",
      transition: `all 150ms ease-in`,

      "&:hover, &:focus, &:active": {
        transform: "scale(1.02)",
        boxShadow: `${md} !important`,
        backgroundColor: `${dark.main} !important`,
        borderColor: `${dark.main} !important`,
      },
    },

    "& .fc .fc-button .fc-icon": {
      fontSize: size.sm,
    },

    "& .fc-toolbar-title": {
      fontSize: `${size.lg} !important`,
      fontWeight: `${fontWeightBold} !important`,
      color: darkMode ? white.main : dark.main,
    },

    "& .event-primary": {
      backgroundImage: linearGradient(
        gradients.primary.main,
        gradients.primary.state
      ),
      "& *": { color: white.main },
    },

    "& .event-secondary": {
      backgroundImage: linearGradient(
        gradients.secondary.main,
        gradients.secondary.state
      ),
      "& *": { color: white.main },
    },

    "& .event-info": {
      backgroundImage: linearGradient(
        gradients.info.main,
        gradients.info.state
      ),
      "& *": { color: white.main },
    },

    "& .event-success": {
      backgroundImage: linearGradient(
        gradients.success.main,
        gradients.success.state
      ),
      "& *": { color: white.main },
    },

    "& .event-warning": {
      backgroundImage: linearGradient(
        gradients.warning.main,
        gradients.warning.state
      ),
      "& *": { color: white.main },
    },

    "& .event-error": {
      backgroundImage: linearGradient(
        gradients.error.main,
        gradients.error.state
      ),
      "& *": { color: white.main },
    },

    "& .event-light": {
      backgroundImage: linearGradient(
        gradients.light.main,
        gradients.light.state
      ),

      "& *": { color: dark.main },
    },

    "& .event-dark": {
      backgroundImage: linearGradient(
        gradients.dark.main,
        gradients.dark.state
      ),
      "& *": { color: white.main },
    },
  };
});
