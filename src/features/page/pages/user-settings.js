import { EditProfile } from "./components/edit-profile.js";
import { ChangePassword } from "./components/change-password.js";
import { DeleteAccount } from "./components/delete-account.js";

export const UserSettings = () => {
    EditProfile();
    document.addEventListener("click", (event) => {
        console.log(event.target.innerHTML);
        if(event.target.innerHTML === "Change password") {
            ChangePassword();
        }
        else if(event.target.innerHTML === "Edit personal information") {
            EditProfile();
        }else if(event.target.innerHTML === "Delete my account") {
            DeleteAccount();
        }

    });
};