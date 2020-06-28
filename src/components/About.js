export default function renderAbout(about) {
    const { 
        _, image, title, address, email, resume,
        linkedin, github, description, languages
    } = about;

    return `
    <section id="about" class="row">
        <img src="assets/background.png" alt="background-image" id="about-background"/>
        <div id="about-content">
            <div class="col-2 left-pane">
                <img src="${image}" id="about-profile">
            </div>
            <div id="about-info" class="col-10">
                <p id="about-title">
                    <strong>${title}</strong><br>
                    ${address}<br>
                    <a href="mailto:${email}">${email}</a> |
                    <a href="${resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a>
                </p>
                <p>${description}</p>
            </div>
        </div>
    </section>
    `;
}