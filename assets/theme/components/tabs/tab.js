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

// NextJS Material Dashboard 2 PRO base styles
import typography from "/assets/theme/base/typography";
import borders from "/assets/theme/base/borders";
import colors from "/assets/theme/base/colors";

// NextJS Material Dashboard 2 PRO helper functions
import pxToRem from "/assets/theme/functions/pxToRem";

const { size, fontWeightRegular } = typography;
const { borderRadius } = borders;
const { dark } = colors;

const tab = {
  styleOverrides: {
    root: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flex: "1 1 auto",
      textAlign: "center",
      maxWidth: "unset !important",
      minWidth: "unset !important",
      minHeight: "unset !important",
      fontSize: size.md,
      fontWeight: fontWeightRegular,
      textTransform: "none",
      lineHeight: "inherit",
      padding: pxToRem(4),
      borderRadius: borderRadius.lg,
      color: `${dark.main} !important`,
      opacity: "1 !important",

      "& .material-icons, .material-icons-round": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },

      "& svg": {
        marginBottom: "0 !important",
        marginRight: pxToRem(6),
      },
    },

    labelIcon: {
      paddingTop: pxToRem(4),
    },
  },
};

export default tab;
