export function selectColor(category?: string) {
  return category === "men's clothing" ? "#2BD9AF" : "#FF5E84";
}

export function toUpdateCategoryName(str?: string) {
  return str?.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}