// document.getElementById("resumeForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting
var _a;
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const number = document.getElementById("number").value;
//     const education = document.getElementById("education").value;
//     const workExperience = document.getElementById("workExperience").value;
//     const skills = document.getElementById("skills").value;
//     const resumeContent = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Contact:</strong> ${number}</p>
//         <p><strong>Education:</strong> ${education}</p>
//         <p><strong>Work Experience:</strong> ${workExperience}</p>
//         <p><strong>Skills:</strong> ${skills}</p>
//     `;
//     document.getElementById("resumeOutput").innerHTML = resumeContent;
// });
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    // Get the values from the form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    // Build the resume content HTML
    var resumeContent = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(number, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(workExperience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    // Insert the resume content into the output div
    document.getElementById("resumeOutput").innerHTML = resumeContent;
});
