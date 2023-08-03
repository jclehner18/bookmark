const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

//tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(e) {
  //deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      'md:border-b-0',
      'border-softred',
      'border-b-4'
    );
  });
  //hide all panels

  panels.forEach((panel) => {
    panel.classList.add('hidden');
  });

  //activate new tab and panel based on target
  e.target.classList.add('border-softred', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.remove('hidden');
}

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

document.querySelectorAll('#menu a').forEach((link) => {
  link.addEventListener('click', () => {
    btn.classList.remove('open');
    menu.classList.remove('flex');
    menu.classList.add('hidden');
    localStorage.setAttribute('src', './images/logo-bookmark.svg');
  });
});
