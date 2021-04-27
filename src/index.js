import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });
countStore.dispatch({ type: "ADD" });