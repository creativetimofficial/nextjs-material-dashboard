function defaultItemIconBox(theme, ownerState) {
  const { functions, palette, borders } = theme;
  const { color } = ownerState;

  const { pxToRem, linearGradient } = functions;
  const { gradients, dark, white } = palette;
  const { borderRadius } = borders;

  return {
    display: "grid",
    placeItems: "center",
    width: pxToRem(48),
    height: pxToRem(48),
    borderRadius: borderRadius.md,
    color: color === "light" ? dark.mian : white.main,
    background: gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : linearGradient(gradients.dark.main, gradients.dark.state),
  };
}

export default defaultItemIconBox;
