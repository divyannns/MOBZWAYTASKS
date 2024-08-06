document.getElementById('saveButton').addEventListener('click', async () => {
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        mobileNo: document.getElementById('mobileNo').value,
        email: document.getElementById('email').value,
        address: {
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            country: document.getElementById('country').value,
        },
        loginId: document.getElementById('loginId').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('/api/user/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            handleErrors(errorData.errors);
        } else {
            alert('User saved successfully!');
            document.getElementById('userForm').reset();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function handleErrors(errors) {
    if (errors.firstName) document.getElementById('errorFirstName').innerText = errors.firstName.message;
    if (errors.lastName) document.getElementById('errorLastName').innerText = errors.lastName.message;
    if (errors.mobileNo) document.getElementById('errorMobileNo').innerText = errors.mobileNo.message;
    if (errors.email) document.getElementById('errorEmail').innerText = errors.email.message;
    if (errors.loginId) document.getElementById('errorLoginId').innerText = errors.loginId.message;
    if (errors.password) document.getElementById('errorPassword').innerText = errors.password.message;
}
document.getElementById('saveButton').addEventListener('click', async () => {
    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        mobileNo: document.getElementById('mobileNo').value,
        email: document.getElementById('email').value,
        address: {
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            country: document.getElementById('country').value,
        },
        loginId: document.getElementById('loginId').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('/api/user/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            const errorData = await response.json();
            handleErrors(errorData.errors);
        } else {
            alert('User saved successfully!');
            document.getElementById('userForm').reset();
            clearErrors();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function handleErrors(errors) {
    clearErrors();
    if (errors.firstName) document.getElementById('errorFirstName').innerText = errors.firstName.message;
    if (errors.lastName) document.getElementById('errorLastName').innerText = errors.lastName.message;
    if (errors.mobileNo) document.getElementById('errorMobileNo').innerText = errors.mobileNo.message;
    if (errors.email) document.getElementById('errorEmail').innerText = errors.email.message;
    if (errors.loginId) document.getElementById('errorLoginId').innerText = errors.loginId.message;
    if (errors.password) document.getElementById('errorPassword').innerText = errors.password.message;
}

function clearErrors() {
    document.getElementById('errorFirstName').innerText = '';
    document.getElementById('errorLastName').innerText = '';
    document.getElementById('errorMobileNo').innerText = '';
    document.getElementById('errorEmail').innerText = '';
    document.getElementById('errorLoginId').innerText = '';
    document.getElementById('errorPassword').innerText = '';
}
