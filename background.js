chrome.runtime.onInstalled.addListener (() => {
  console.log ('extension installed');
});

chrome.bookmarks.onCreated.addListener (() => {
  alert ('bookmark created!');
});
