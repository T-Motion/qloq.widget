export function isRequired(val) {
  return (val && val.length > 0) || 'Verplicht veld'
}
