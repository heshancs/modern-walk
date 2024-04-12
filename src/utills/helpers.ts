export function selectColor(category: string | undefined) {
  return category === "men's clothing" ? "#2BD9AF" : "#FF5E84";
}

export function toUpdateCategoryName (str: string|undefined) {
  return str?.replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());
}