export function formatCurrency(value: number) {
  return new Intl.NumberFormat('ru-RU').format(value);
}
