// For formatting number into IDR currency
export const formatCurrency = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumSignificantDigits: 3,
});
