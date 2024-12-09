import { EditProfile } from "../components/edit-profile.js";
import { ChangePassword } from "../components/change-password.js";
import { DeleteAccount } from "../components/delete-account.js";
import { notyf } from "../../../../shared/components/toast.js";
import { HandleApi } from "../../../../shared/utils/api.js";
import { monitorUserSession } from "../../../../shared/utils/helpers/verify-token.js";



export const UserSettings = async () => {

    await monitorUserSession();
    const encodedId = localStorage.getItem('userId');
    localStorage.getItem('userName');
    const userId = atob(encodedId);
    const { data: user } = await HandleApi.getUser({ id: userId })

    const editButton = document.getElementById("show-edit-profile");
    const changeButton = document.getElementById("show-change-password");
    const deleteButton = document.getElementById("show-delete-account");

    editButton.classList.add("active-section");
    editButton.style.color = "#515DEF";

    await updateUserSettings({ id: userId });
    EditProfile({
        userFirstName: user[0].first_name,
        userLastName: user[0].first_lastname,
        userEmail: user[0].email,
        userPhoneNumber: user[0].phone,
    });

    document.addEventListener("click", (e) => {
        if (!e.target.classList.contains("buttons-sections")) return;
        [editButton, changeButton, deleteButton].forEach(button => {
            button.classList.remove("active-section");
            button.style.color = "#242424";
        });

        e.target.classList.add("active-section");
        e.target.style.color = "#515DEF";

        if (e.target === changeButton) {
            ChangePassword();
        } else if (e.target === editButton) {
            EditProfile({
                id: user.id,
                userFirstName: user[0].first_name,
                userLastName: user[0].first_lastname,
                userEmail: user[0].email,
                userPhoneNumber: user[0].phone,
            });


        } else if (e.target === deleteButton) {
            DeleteAccount();
        }
    });
};


const updateUserSettings = async ({ id }) => {

    const getForm = document.getElementById("main-section");
    getForm.addEventListener("submit", async e => {
        e.preventDefault()

        const updateData = Object.fromEntries(
            new FormData(e.target)
        )

        if (updateData.phone.length < 10 || updateData.phone.length > 10) {
            notyf.error('Phone number must be at least 10 numbers');

            return
        }
        console.log("Mandar datos")

        const data = await HandleApi.putUserInfo({
            id,
            firstName: updateData.firstName,
            firstLastname: updateData.lastName,
            phone: updateData.phone,
            email: updateData.email
        })

        if (data.success) {
            notyf.success(data.message)
            setTimeout(() => {
                location.reload()
            }, 500);

            return
        }
        notyf.error(data.message)


    })
}