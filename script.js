const buttonStyle = document.querySelector('.style-button');
const htmlClass = document.querySelector('html')
// console.log(htmlClass);
buttonStyle.addEventListener('click', changeTheme);

if (localStorage.getItem('theme-color') === null) {
  localStorage.setItem('theme-color', 'light-theme')
} else {
  storageTheme = localStorage.getItem('theme-color');

  htmlClass.classList.remove('dark-theme', 'light-theme');
  htmlClass.classList.add(storageTheme);
  buttonStyle.classList.remove('fa-sun-o', 'fa-moon-o');
  if(storageTheme === 'light-theme') {
    buttonStyle.classList.remove('fa-sun-o', 'fa-moon-o');
    buttonStyle.classList.add('fa-moon-o');
  } else {
    buttonStyle.classList.remove('fa-sun-o', 'fa-moon-o');
    buttonStyle.classList.add('fa-sun-o');
  }
}

function changeButtonIcon() {
  if([...buttonStyle.classList].includes('fa-sun-o')) {
    buttonStyle.classList.remove('fa-sun-o', 'fa-moon-o');
    buttonStyle.classList.add('fa-moon-o');
    localStorage.setItem('theme-color', 'light-theme')
  } else {
    buttonStyle.classList.remove('fa-sun-o', 'fa-moon-o');
    buttonStyle.classList.add('fa-sun-o');
    localStorage.setItem('theme-color', 'dark-theme')
  }
}

function changeThemeColor() {
  if([...htmlClass.classList].includes('dark-theme')) {
    htmlClass.classList.remove('dark-theme', 'light-theme');
    htmlClass.classList.add('light-theme');
  } else {
    htmlClass.classList.remove('dark-theme', 'light-theme');
    htmlClass.classList.add('dark-theme');
  }
}

function changeTheme() {
  changeThemeColor();
  changeButtonIcon();
}
