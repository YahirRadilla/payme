import { EditProfile } from "./components/edit-profile.js";
import { ChangePassword } from "./components/change-password.js";

export const UserSettings = () => {
    EditProfile();
    document.addEventListener("click", (event) => {
        console.log(event.target.innerHTML);
        if(event.target.innerHTML === "Change password") {
            ChangePassword();
        }

    });
};