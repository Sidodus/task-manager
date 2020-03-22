import { getStorageTodos, getCompletedStorageTodos } from "./todoStorageAction";

export const sortDown = () => {
  const currentTodos = getStorageTodos();

  const sortedAll = currentTodos.sort(function(a, b) {
    return new Date(a.date_Full) - new Date(b.date_Full);
  });

  const sortedNoDate = sortedAll.filter(sort => {
    return sort.date_Full === undefined;
  });

  const sortedWithDate = sortedAll.filter(sort => {
    return sort.date_Full !== undefined;
  });

  const sortSortedWithDate = sortedWithDate.sort(function(a, b) {
    return new Date(a.date_Full) - new Date(b.date_Full);
  });

  const newSortDown = sortSortedWithDate.concat(sortedNoDate);

  return newSortDown;
};

export const sortDefault = () => {
  const currentTodos = getStorageTodos();

  return currentTodos;
};

export const sortUp = () => {
  const currentTodos = getStorageTodos();

  const sortedAll = currentTodos.sort(function(a, b) {
    return new Date(b.date_Full) - new Date(a.date_Full);
  });

  const sortedNoDate = sortedAll.filter(sort => {
    return sort.date_Full === undefined;
  });

  const sortedWithDate = sortedAll.filter(sort => {
    return sort.date_Full !== undefined;
  });

  const sortSortedWithDate = sortedWithDate.sort(function(a, b) {
    return new Date(b.date_Full) - new Date(a.date_Full);
  });

  const newSortUp = sortSortedWithDate.concat(sortedNoDate);

  return newSortUp;
};

export const completedSortDown = () => {
  const currentTodos = getCompletedStorageTodos();

  const sortedAll = currentTodos.sort(function(a, b) {
    return new Date(a.date_Full) - new Date(b.date_Full);
  });

  const sortedNoDate = sortedAll.filter(sort => {
    return sort.date_Full === undefined;
  });

  const sortedWithDate = sortedAll.filter(sort => {
    return sort.date_Full !== undefined;
  });

  const sortSortedWithDate = sortedWithDate.sort(function(a, b) {
    return new Date(a.date_Full) - new Date(b.date_Full);
  });

  const newCompletedSortDown = sortSortedWithDate.concat(sortedNoDate);

  return newCompletedSortDown;
};

export const completedSortDefault = () => {
  const currentCompletedTodos = getCompletedStorageTodos();

  return currentCompletedTodos;
};

export const completedSortUp = () => {
  const currentTodos = getCompletedStorageTodos();

  const sortedAll = currentTodos.sort(function(a, b) {
    return new Date(b.date_Full) - new Date(a.date_Full);
  });

  const sortedNoDate = sortedAll.filter(sort => {
    return sort.date_Full === undefined;
  });

  const sortedWithDate = sortedAll.filter(sort => {
    return sort.date_Full !== undefined;
  });

  const sortSortedWithDate = sortedWithDate.sort(function(a, b) {
    return new Date(b.date_Full) - new Date(a.date_Full);
  });

  const newCompletedSortUp = sortSortedWithDate.concat(sortedNoDate);

  return newCompletedSortUp;
};
