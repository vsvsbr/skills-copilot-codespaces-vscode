function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberSkills = document.getElementById("memberSkills");
    if (member.checked) {
        skills.style.display = "block";
        memberSkills.style.display = "block";
    } else {
        skills.style.display = "none";
        memberSkills.style.display = "none";
    }
}