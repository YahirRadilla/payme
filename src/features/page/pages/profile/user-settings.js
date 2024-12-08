import { EditProfile } from "../components/edit-profile.js";
import { ChangePassword } from "../components/change-password.js";
import { DeleteAccount } from "../components/delete-account.js";

export const UserSettings = () => {
    const editButton = document.getElementById("show-edit-profile");
    const changeButton = document.getElementById("show-change-password");
    const deleteButton = document.getElementById("show-delete-account");

    editButton.classList.add("active-section");
    editButton.style.color = "#515DEF";
    EditProfile();

    document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("buttons-sections")) return;
        [editButton, changeButton, deleteButton].forEach(button => {
            button.classList.remove("active-section");
            button.style.color = "#242424";
        });

        event.target.classList.add("active-section");
        event.target.style.color = "#515DEF";

        if (event.target === changeButton) {
            ChangePassword();
        } else if (event.target === editButton) {
            EditProfile();
        } else if (event.target === deleteButton) {
            DeleteAccount();
        }
    });
};
