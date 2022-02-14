import shuffle from "lodash.shuffle"

export const randomElement = (array) => {
    if (array.length > 10)
      return shuffle(array).slice(array.length - 10)
    return shuffle(array)
}