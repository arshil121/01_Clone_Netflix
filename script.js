const faqItems = document.querySelectorAll('.accordion li');

faqItems.forEach((item) => {
  const faqToggle = item.querySelector('.faq-toggle');
  const faqAnswer = item.querySelector('.content');

  faqToggle.addEventListener('change', () => {
    if (faqToggle.checked) {
      faqAnswer.style.display = 'block';
    } else {
      faqAnswer.style.display = 'none';
    }
  });
});