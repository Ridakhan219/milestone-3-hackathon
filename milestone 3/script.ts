document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values from the form inputs
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const number = (document.getElementById("number") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Build the resume content HTML
    const resumeContent = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${number}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${workExperience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    // Insert the resume content into the output div
    document.getElementById("resumeOutput")!.innerHTML = resumeContent;
});
