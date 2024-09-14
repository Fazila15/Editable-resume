// Get form and resume section elements
var form = document.getElementById("resume-form");
var resumeSection = document.getElementById("resume-section");
var resumeName = document.getElementById("resume-name");
var resumeEmail = document.getElementById("resume-email");
var resumePhone = document.getElementById("resume-phone");
var resumeEducation = document.getElementById("resume-education");
var resumeSkills = document.getElementById("resume-skills");
// Initial form submission to generate the resume
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var nameInput = document.getElementById("name").value;
    var emailInput = document.getElementById("email").value;
    var phoneInput = document.getElementById("phone").value;
    var educationInput = document.getElementById("education").value;
    var skillsInput = document.getElementById("skills").value;
    // Populate the resume fields
    resumeName.innerText = nameInput;
    resumeEmail.innerText = "Email: ".concat(emailInput);
    resumePhone.innerText = "Phone: ".concat(phoneInput);
    resumeEducation.innerText = educationInput;
    // Convert the skills into a list and make each editable
    var skillsArray = skillsInput.split(",").map(function (skill) { return skill.trim(); });
    resumeSkills.innerHTML = ""; // Clear any previous skills
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        li.contentEditable = "true"; // Make each skill editable
        resumeSkills.appendChild(li);
    });
    // Show the resume section
    resumeSection.classList.remove("hidden");
});
// Optional: Event listener to handle saving edits as they happen (auto-save on blur)
var editableElements = [resumeName, resumeEmail, resumePhone, resumeEducation];
// Add event listeners to editable fields to save changes automatically
editableElements.forEach(function (element) {
    element.addEventListener("blur", function (event) {
        var target = event.target;
        saveEdit(target);
    });
});
resumeSkills.addEventListener("blur", function (event) {
    var target = event.target;
    if (target.tagName === 'LI') {
        saveEdit(target);
    }
}, true);
// Function to save edits (you can extend this to persist data in local storage)
function saveEdit(target) {
    console.log("Saving changes for ".concat(target.id || 'Skill', ": ").concat(target.innerText));
    // This function can be extended to save edits to local storage or backend
}
