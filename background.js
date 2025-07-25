chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'transliterate-hebrew',
    title: 'Transliterate Hebrew to English (QWERTY)',
    contexts: ['editable', 'selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'transliterate-hebrew') {
    chrome.tabs.sendMessage(tab.id, { action: 'transliterate-hebrew' }, () => {
      if (chrome.runtime.lastError) {
        // Content script not found; ignore or log if needed
        // console.warn('No content script in this tab:', chrome.runtime.lastError.message);
      }
    });
  }
}); 