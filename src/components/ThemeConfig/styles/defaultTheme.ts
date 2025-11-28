const commonStyles = {
  '$primary-color': '#e25829ff',
}
const componentsStyles = {
  //Header
  '$header-height': 44,
  '$header-background': 'transparent',
  '$header-title-fontsize': 18,
  '$header-title-fontweight': "500",
  '$header-spacing': 15,
  //Button
  '$button-border-radius': 18,
  //OverLay
  '$overlay-bg-color': 'rgba(0, 0, 0, 0.6)',
  //Popup
  '$popup-closeicon-width': 12,
  '$popup-closeicon-height': 12,
  '$popup-height': 200,
  '$popup-center-border-radius': 10,
  '$popup-border-radius': 10
}
const createTheme = () => {
  return {
    ...commonStyles,
    ...componentsStyles
  }
}
const defaultTheme = createTheme()
export default defaultTheme;