window.onload = () => {
  const button = document.createElement ('button');
  button.id = 'darkModeButton';
  button.innerText = 'Dark Mode';
  document.querySelector ('#end').prepend (button);
  button.addEventListener ('click', () => handleDarkMode ());
};

const handleDarkMode = () => {
  const container = document.getElementsByTagName ('ytd-app')[0];
  container.style.background = '#000000';
};
