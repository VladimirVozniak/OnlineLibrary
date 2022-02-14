export const fullNameAuthor = (author) => {
  return author === undefined ? "" : `${author.first_name} ${author.last_name}`
}