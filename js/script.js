const descriptionText = document.getElementById('description-text');
const buttons = document.getElementById('buttons');
const defaultText = '<p>Hover over any of the buttons above to see more information.</p>';

const buttonData = [
  { button: document.getElementById('about-me'), title: '[ About ]', text: 'Click <u>About Me</u> to learn more about Stella.' },
  { button: document.getElementById('work'), title: '[ Work ]', text: 'Click <u>Work</u> to see my CV and other professional work stuff.' },
  { button: document.getElementById('projects'), title: '[ Projects ]', text: 'Click <u>Projects</u> to see other stuff I have done.' },
  { button: document.getElementById('contact'), title: '[ Contact ]', text: 'Click <u>Contact</u> to get in touch.' }
];

buttonData.forEach(data => {
  const button = data.button;
  const title = data.title;
  const text = data.text;
  
  button.addEventListener('mouseover', () => {
    descriptionText.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
  });

  button.addEventListener('mouseout', () => {
    descriptionText.innerHTML = defaultText;
  });
});

descriptionText.innerHTML = defaultText;
