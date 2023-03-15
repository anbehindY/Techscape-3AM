const menu = document.querySelector('.menuButton');
const header = document.querySelector('header');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  header.classList.toggle('active');
});

const speakersInfo = [
  {
    image: 'img1',
    name: 'Rafeh Qazi',
    position: 'Founder of Clever Programmer coding bootcamp',
    details: 'Clever Programmer is a community with thousands of students who are learning to code by building real world projects.',
  },
  {
    image: 'img2',
    name: 'Ei Maung',
    position: 'Full-stack web developer with decades of experience',
    details: 'He is known as one of the greatest web developer in Myanmar and he also released a book named "Professional Web Developer".',
  },
  {
    image: 'img3',
    name: 'Aung Chan Myae',
    position: 'CEO of TBH labs & former tech lead in Myanmar',
    details: 'He stepped into the field by mobile phone and laptop reviews in 2016 and now he become the greatest technical influencer in Myanmar.',
  },
  {
    image: 'img4',
    name: 'Alfie Yang',
    position: 'Web designer of Techscape@3AM',
    details: 'Alfie is a passionate web designer with a great sense of style, sharing his perspectives with minimalistic designs and perfectionalism.',
  },
  {
    image: 'img5',
    name: 'Phillip Paing',
    position: 'CEO of Pareon and expertise in digital marketing',
    details: 'Paing has always dreamed about being an enterprenuer, starting his journey from UCONN and founded Pareon in 2022.',
  },
  {
    image: 'img6',
    name: 'Ko PI',
    position: 'CEO of Techscape@3AM',
    details: 'Ko PI established the startup in 2017 with his fellows. Sharing technological information to people with blogs, vlogs and conferences.',
  },
];

const cards = () => {
  const card = speakersInfo.map(
    (speakersInfo) => `<div class="card">
                        <div class="${speakersInfo.image}"></div>
                        <div class="description">
                            <h3 class="name">${speakersInfo.name}</h3>
                            <small class="italic">${speakersInfo.position}</small>
                            <span class="grayBar"></span>
                            <p class="text">${speakersInfo.details}</p>
                        </div>
                      </div>`,
  );
  return card;
};

const speakerSection = `<h1 class="mainHeader">
    Featured Speakers
</h1>
<span class="redBar"></span>
<div class="cardsContainer"></div>`;

window.addEventListener('load', () => {
  document.querySelector('.speakers').innerHTML = speakerSection;
  document.querySelector('.cardsContainer').innerHTML = cards().join('');
});