document.getElementById("add-skill-btn").addEventListener("click", function (){
    const skillInput = document.getElementById("skill-input");
    const skillValue = skillInput.value.trim();

    if (skillValue) {
        const skillList = document.getElementById("skills-list");

        const listItem = document.createElement("li");
        const skillText = document.createElement("span");
        skillText.textContent = skillValue;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.addEventListener("click", function (){
            skillList.removeChild(listItem);
        });

        listItem.appendChild(skillText);
        listItem.appendChild(deleteBtn);
        skillList.appendChild(listItem);

        skillInput.value = "";
    }
});
