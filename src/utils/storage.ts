function setItem<ValuesType>(name: string, values: ValuesType) {
  try {
    window.localStorage.setItem(name, JSON.stringify(values));
  } catch (error) {
    throw new Error(
      "An error ocurred trying to save your data, try again later"
    );
  }
}

function getItem<ValuesType>(name: string): ValuesType {
  try {
    const value = window.localStorage.getItem(name);
    return value ? JSON.parse(value || "") : null;
  } catch (error) {
    throw new Error(
      "An error ocurred trying to retrieve your data, try again later"
    );
  }
}

function removeItem(name: string) {
  try {
    window.localStorage.removeItem(name);
  } catch (error) {
    throw new Error(
      "An error ocurred trying to delete your data, try again later"
    );
  }
}

export { setItem, getItem, removeItem };
