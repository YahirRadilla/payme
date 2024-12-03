import { EditProfile } from "./components/edit-profile.js";
import { ChangePassword } from "./components/change-password.js";
import { DeleteAccount } from "./components/delete-account.js";

export const UserSettings = () => {
    const editButton = document.getElementById("show-edit-profile");
    const changeButton = document.getElementById("show-change-password");
    const deleteButton = document.getElementById("show-delete-account");
    EditProfile();
    document.addEventListener("click", (event) => {
        if(!event.target.classList.contains("buttons-sections")) return;

        const button = changeButton.classList.contains("active-section");
        const button1 = editButton.classList.contains("active-section");
        const button2 = deleteButton.classList.contains("active-section");

        if(button) {
            changeButton.classList.remove("active-section");
        }else if(button1) {
            editButton.classList.remove("active-section");
        }else if(button2) {
            deleteButton.classList.remove("active-section");
        }

        if(event.target.innerHTML === "Change password") {
            event.target.classList.add("active-section");
            ChangePassword();
        }
        else if(event.target.innerHTML === "Edit personal information") {

            event.target.classList.add("active-section");
            EditProfile();
        }else if(event.target.innerHTML === "Delete my account") {

            event.target.classList.add("active-section");
            DeleteAccount();
        }

    });
};