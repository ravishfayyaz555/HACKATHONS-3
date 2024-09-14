function getResumeData() {
    var name = document.getElementById('name').innerText;
    var email = document.getElementById('email').innerText;
    var phone = document.getElementById('phone').innerText;
    var education = document.getElementById('education').innerText;
    var skills = document.getElementById('skills').innerText;
    var experience = document.getElementById('experience').innerText;
    return { name: name, email: email, phone: phone, education: education, skills: skills, experience: experience };
}
function saveResume() {
    var resumeData = getResumeData();
    localStorage.setItem('editableResume', JSON.stringify(resumeData));
    alert('Resume saved!');
}
function loadResume() {
    var savedResume = localStorage.getItem('editableResume');
    if (savedResume) {
        var resumeData = JSON.parse(savedResume);
        document.getElementById('name').innerText = resumeData.name;
        document.getElementById('email').innerText = resumeData.email;
        document.getElementById('phone').innerText = resumeData.phone;
        document.getElementById('education').innerText = resumeData.education;
        document.getElementById('skills').innerText = resumeData.skills;
        document.getElementById('experience').innerText = resumeData.experience;
    }
}
var saveButton = document.getElementById('saveButton');
if (saveButton) {
    saveButton.addEventListener('click', saveResume);
}
window.onload = loadResume;
