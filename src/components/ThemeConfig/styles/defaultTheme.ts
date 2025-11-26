const commonStyles = {
  '$primary-color': '#e25829ff',
  '$theme-variant':'acc'
}
const componentsStyles = {
  '$overlay-bg-color': 'rgba(0, 0, 0, 0.7)',
  '$popup-border-radius': 5
}
const createTheme = () => {
  return {
    ...commonStyles,
    ...componentsStyles
  }
}
const defaultTheme = createTheme()
export default defaultTheme;