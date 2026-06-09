// FAQ Toggle

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
      answer.style.padding = "0 24px";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "0 24px 24px";
    }

  });

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior:"smooth"
      });

  });

});
