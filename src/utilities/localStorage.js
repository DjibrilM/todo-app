export const getItems = (identifier) => JSON.parse(localStorage.getItem(identifier));

export const setItems = (identifier, elements) => {
  localStorage.setItem(identifier, JSON.stringify(elements));
};

export const getLength = (identifier) => {
  const elements = JSON.parse(localStorage.getItem(identifier));
  return elements ? elements.length : 0;
};
