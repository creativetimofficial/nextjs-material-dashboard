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

// NextJS Material Dashboard 2 PRO Base Styles
import colors from "/assets/theme/base/colors";
import typography from "/assets/theme/base/typography";

// NextJS Material Dashboard 2 PRO Helper Functions
import pxToRem from "/assets/theme/functions/pxToRem";

const { transparent, light, dark, secondary } = colors;
const { size } = typography;

const outlined = {
  base: {
    minHeight: pxToRem(40),
    color: light.main,
    borderColor: light.main,
    padding: `${pxToRem(10)} ${pxToRem(24)}`,

    "&:hover": {
      opacity: 0.75,
      backgroundColor: transparent.main,
    },

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(16)} !important`,
    },
  },

  small: {
    minHeight: pxToRem(32),
    padding: `${pxToRem(6)} ${pxToRem(16)}`,
    fontSize: size.xs,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(12)} !important`,
    },
  },

  large: {
    minHeight: pxToRem(47),
    padding: `${pxToRem(12)} ${pxToRem(28)}`,
    fontSize: size.sm,

    "& .material-icon, .material-icons-round, svg": {
      fontSize: `${pxToRem(22)} !important`,
    },
  },

  primary: {
    backgroundColor: transparent.main,
    borderColor: dark.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },

  secondary: {
    backgroundColor: transparent.main,
    borderColor: secondary.main,

    "&:hover": {
      backgroundColor: transparent.main,
    },
  },
};

export default outlined;
