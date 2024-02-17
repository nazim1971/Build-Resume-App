// Achievement

const container = document.querySelector('.input-container');
const addAchievementButton = document.querySelector('.addNewBtn');

addAchievementButton.addEventListener('click', function () {
    const lastAchievementDiv = container.querySelector('.grid-cols-2');
    lastAchievementDiv.classList.add('achievement');
    const newAchievementDiv = lastAchievementDiv.cloneNode(true);

    // Clear input values
    clearInputValues(newAchievementDiv);
    
    // Append the new div after the last div
    lastAchievementDiv.parentElement.appendChild(newAchievementDiv);
   
    // // Apply transition effect
    showNewDiv(newAchievementDiv);
    
    // Delete New Div
    const deleteAchievementButton = newAchievementDiv.querySelector('.deleteButton');
    deleteAchievementButton.style.display = 'inline-block';

    deleteAchievementButton.addEventListener('click', function() {
        deleteDiv(newAchievementDiv);
    });
});


// Ecperience

const experience = document.querySelector('.experience-container');
const addExperienceButton = document.querySelector('.addBtnEx');

addExperienceButton.addEventListener('click', function () {
    const lastExperienceDiv = experience.querySelector('.exContainer');
    lastExperienceDiv.classList.add('achievement');
    const newExperienceDiv = lastExperienceDiv.cloneNode(true);

    // Clear input values function
    clearInputValues(newExperienceDiv);
     
    // Append the new div after the last div
    experience.appendChild(newExperienceDiv);

    // Add new div function 
    showNewDiv(newExperienceDiv);

    // Delete New Div
    const deleteExperienceButton = newExperienceDiv.querySelector('.deleteButton');
    deleteExperienceButton.style.display = 'inline-block';

    deleteExperienceButton.addEventListener('click', function() { 
        deleteDiv(newExperienceDiv);
    });
   
});


// Education 

const education = document.querySelector('.education-container');
const educationBtn = document.querySelector('.addBtnEdu');

educationBtn.addEventListener('click', function(){
    const getEduContainer = education.querySelector('.eduContainer');
    getEduContainer.classList.add('achievement');
    const newEduDiv = getEduContainer.cloneNode(true);

    // Clear input field
    clearInputValues(newEduDiv);

    // Append the new div after the last div
    education.appendChild(newEduDiv);

    // Add new div function 
    showNewDiv(newEduDiv);

      // Delete New Div
      const deleteEduBtn = newEduDiv.querySelector('.deleteButton');
      deleteEduBtn.style.display = 'inline-block';
  
      deleteEduBtn.addEventListener('click', function() { 
          deleteDiv(newEduDiv);
      });

})


// Projects

const project = document.querySelector('.project-container');
const projectBtn = document.querySelector('.addBtnPro');

projectBtn.addEventListener('click', function(){
    const getProContainer = project.querySelector('.proContainer');
    getProContainer.classList.add('achievement');
    const newProDiv = getProContainer.cloneNode(true);

     // Clear input field
     clearInputValues(newProDiv);

     // Append the new div after the last div
     project.appendChild(newProDiv);
 
     // Add new div function 
     showNewDiv(newProDiv);

     // Delete New Div
     const deleteProBtn = newProDiv.querySelector('.deleteButton');
     deleteProBtn.style.display = 'inline-block';
 
     deleteProBtn.addEventListener('click', function() { 
         deleteDiv(newProDiv);
     });

})


// skill

const skill = document.querySelector('.skill-container');
const skillBtn = document.querySelector('.addBtnSkill');

skillBtn.addEventListener('click',function(){
    const getSkillContainer = skill.querySelector('.skillContainer');
    getSkillContainer.classList.add('achievement');
    const newSkillDiv = getSkillContainer.cloneNode(true);

      // Clear input field
      clearInputValues(newSkillDiv);

      // Append the new div after the last div
      skill.appendChild(newSkillDiv);
  
      // Add new div function 
      showNewDiv(newSkillDiv);
 
      // Delete New Div
      const deleteSkillBtn = newSkillDiv.querySelector('.deleteButton');
      deleteSkillBtn.style.display = 'inline-block';
  
      deleteSkillBtn.addEventListener('click', function() { 
          deleteDiv(newSkillDiv);
      });
})
