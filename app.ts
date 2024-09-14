// Get form and resume section elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeSection = document.getElementById("resume-section") as HTMLElement;
const resumeName = document.getElementById("resume-name") as HTMLElement;
const resumeEmail = document.getElementById("resume-email") as HTMLElement;
const resumePhone = document.getElementById("resume-phone") as HTMLElement;
const resumeEducation = document.getElementById("resume-education") as HTMLElement;
const resumeSkills = document.getElementById("resume-skills") as HTMLElement;

// Initial form submission to generate the resume
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const nameInput = (document.getElementById("name") as HTMLInputElement).value;
    const emailInput = (document.getElementById("email") as HTMLInputElement).value;
    const phoneInput = (document.getElementById("phone") as HTMLInputElement).value;
    const educationInput = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skillsInput = (document.getElementById("skills") as HTMLTextAreaElement).value;

    // Populate the resume fields
    resumeName.innerText = nameInput;
    resumeEmail.innerText = `Email: ${emailInput}`;
    resumePhone.innerText = `Phone: ${phoneInput}`;
    resumeEducation.innerText = educationInput;

    // Convert the skills into a list and make each editable
    const skillsArray = skillsInput.split(",").map(skill => skill.trim());
    resumeSkills.innerHTML = ""; // Clear any previous skills
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        li.contentEditable = "true"; // Make each skill editable
        resumeSkills.appendChild(li);
    });

    // Show the resume section
    resumeSection.classList.remove("hidden");
});

// Optional: Event listener to handle saving edits as they happen (auto-save on blur)
const editableElements = [resumeName, resumeEmail, resumePhone, resumeEducation];

// Add event listeners to editable fields to save changes automatically
editableElements.forEach(element => {
    element.addEventListener("blur", (event: Event) => {
        const target = event.target as HTMLElement;
        saveEdit(target);
    });
});

resumeSkills.addEventListener("blur", (event: Event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'LI') {
        saveEdit(target);
    }
}, true);

// Function to save edits (you can extend this to persist data in local storage)
function saveEdit(target: HTMLElement) {
    console.log(`Saving changes for ${target.id || 'Skill'}: ${target.innerText}`);
    // This function can be extended to save edits to local storage or backend
}
