window.onload = () => {
  const button = document.createElement ('button');
  button.id = 'darkModeButton';
  button.innerText = 'Dark Mode';
  const input = document.createElement ('input');
  input.type = 'checkbox';
  input.id = 'darkModeSetting';
  document.querySelector ('#end').prepend (button, input, 'Auto apply?');
  button.addEventListener ('click', () => handleDarkMode ());
  input.addEventListener ('click', () => storeSetting ());

  checkSetting ();
};

const checkSetting = () => {
  chrome.storage.local.get (['enabled'], result => {
    const isEnabled = result.enabled;

    console.log(isEnabled);
    
    document.getElementById ('darkModeSetting').checked = isEnabled;
    isEnabled && handleDarkMode();
  });
};

const handleDarkMode = () => {
  const container = document.getElementsByTagName ('ytd-app')[0];
  container.style.background = '#000000';
};

const storeSetting = () => {
  const isEnabled = document.getElementById ('darkModeSetting').checked;
  const setting = {
    enabled: isEnabled,
  };
  chrome.storage.local.set (setting);
};
