const currencyFormatter = Intl.NumberFormat("default", {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(n: number): string {
  return currencyFormatter.format(n);
}

const dateTimeFormatter = Intl.DateTimeFormat("default", {
  hour: "numeric",
  minute: "numeric",
  month: "numeric",
  year: "numeric",
  day: "numeric",
});
export function formatDateTime(date: string) {
  return dateTimeFormatter.format(new Date(date));
}
