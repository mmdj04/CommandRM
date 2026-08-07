export const colors = [
  "#eddcd2",
  "#fff1e6",
  "#fde2e4",
  "#fad2e1",
  "#c5dedd",
  "#dbe7e4",
  "#f0efeb",
  "#d6e2e9",
  "#bcd4e6",
  "#99c1de",
];

export function getTagTextColor(hexColor: string): string {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "text-black" : "text-white";
}
