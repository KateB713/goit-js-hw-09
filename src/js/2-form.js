const STORAGE_KEY = "feedback-form-state";

let formData = {
    email: "",
    message: "",
};

const form = document.querySelector(".feedback-form");

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

populateForm();

function populateForm() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);

        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    };
};


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { email, message } = form.elements;
    if (email.value.trim() === "" || message.value.trim() === "") {
        return alert('Fill please all fields')
    };

    formData = { email: "", message: "" };
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

