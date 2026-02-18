const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const roleInput = document.getElementById("role");
const saveBtn = document.getElementById("saveBtn");
const userList = document.getElementById("userList");

let users = [];
let editIndex = null;

// Save User
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value.trim();

  if (!name || !email || !role) return;

  const user = { name, email, role };

  if (editIndex !== null) {
    users[editIndex] = user;
    editIndex = null;
    saveBtn.textContent = "Save User";
  } else {
    users.push(user);
  }

  clearInputs();
  renderUsers();
});

// Render Users
function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div>
        <strong>${user.name}</strong><br>
        ${user.email} | ${user.role}
      </div>

      <div class="actions">
        <button class="edit-btn" onclick="editUser(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
      </div>
    `;

    userList.appendChild(li);
  });
}

// Edit User
function editUser(index) {
  const user = users[index];

  nameInput.value = user.name;
  emailInput.value = user.email;
  roleInput.value = user.role;

  editIndex = index;
  saveBtn.textContent = "Update User";
}

// Delete User
function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

// Clear Inputs
function clearInputs() {
  nameInput.value = "";
  emailInput.value = "";
  roleInput.value = "";
}
