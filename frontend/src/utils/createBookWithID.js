import { v4 as uuid4 } from "uuid";

const createBookWithID = (book, source) => {
  return {
    ...book,
    source,
    isFavorite: false,
    id: uuid4(),
  };
};

export default createBookWithID;
