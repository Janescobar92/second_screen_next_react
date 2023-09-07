export const replaceCommaForDot = (value: string | undefined) => {
  return (value || "").replace(/,/g, ".");
};

export const formatCurrencyNumb = (value: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatCurrencyStr = (value: string) => {
  if (typeof value === "string") {
    return formatCurrencyNumb(parseFloat(replaceCommaForDot(value)));
  }
  return value;
};

export const formatCurrency = (value?: number | string) => {
  if (!value) return formatCurrencyNumb(0);
  if (typeof value === "string") return formatCurrencyStr(value);
  return formatCurrencyNumb(value);
};
