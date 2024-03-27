export const getFontFamily = (baseFont = 'Montserrat', weight: string) => {
  switch (weight) {
    case 'bold':
    case '700':
      return `${baseFont}-Bold`;
    case '600':
      return `${baseFont}-SemiBold`;
    case 'normal':
    case '400':
    case '500':
    default:
      return `${baseFont}-Regular`;
  }
};
