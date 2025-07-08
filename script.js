let cnt = 1;
function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();

  if (!value) {
    alert("Please enter a todo item");
    return;
  }

  const element = document.createElement("div");
  element.style.cssText =
    "display: flex; justify-content: space-between; align-items: center; padding: 10px; border-bottom: 1px solid #eee;";

  const innerEl = document.createElement("h3");
  innerEl.innerHTML = cnt + ". " + value;
  element.appendChild(innerEl);

  cnt++;

  const innerDiv = document.createElement("div");

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.onclick = function () {
    cnt--;
    element.remove();
  };

  const updateBtn = document.createElement("button");
  updateBtn.innerHTML = "Update";
  updateBtn.onclick = function () {
    const newValue = prompt("Update todo:", innerEl.innerHTML);
    if (newValue && newValue.trim()) {
      innerEl.innerHTML = newValue.trim();
    }
  };

  innerDiv.appendChild(updateBtn);
  innerDiv.appendChild(delBtn);
  element.appendChild(innerDiv);

  document.getElementById("todo-container").appendChild(element);
  input.value = ""; // Clear input after adding
}
