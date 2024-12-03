export const ChangePassword = () => {

    const mainSection = document.getElementById('main-section');
    mainSection.innerHTML = `
        <div>
            <label class="titles-content">Change Password</label>
            <div class="inline-inputs">
                <div class="input-container">
                    <label for="name" class="name">First Name:</label>
                    <input required id="name" name="firstName" placeholder="Enter your name" type="text" class="input">
                </div>
                <div class="input-container">
                    <label for="lastname" class="name">Last Name:</label>
                    <input id="lastname" name="lastName" placeholder="Enter your last name" type="text" class="input">
                </div>
                <div class="input-container">
                    <label for="email" class="name">E-Mail:</label>
                    <input required id="email" name="emal" placeholder="Enter your email" type="email" class="input">
                </div>
                <div class="input-container">
                    <label for="phone" class="name">Phone Number:</label>
                    <input required id="phone" name="phone" placeholder="Enter your phone number" type="number"
                        class="input">
                </div>
            </div>
            <input class="input" type="submit" value="Update Profile">
        </div>
    `;
};