# Hebrew Keyboard Transliterator Chrome Extension

## Elevator Pitch
Transform Hebrew text to English QWERTY keyboard layout with a simple right-click! This Chrome extension instantly converts Hebrew characters to their corresponding English letters based on standard Hebrew QWERTY keyboard positioning, making it perfect for users who accidentally type in Hebrew mode or need quick transliteration.

## What It Does
The Hebrew Keyboard Transliterator is a Chrome extension that:
- **Converts Hebrew text to English** using QWERTY keyboard mapping
- **Works on any selected text** across the entire web page
- **Supports text fields, textareas, and contenteditable elements**
- **Preserves non-Hebrew characters** (spaces, numbers, punctuation, English letters)
- **Activates via right-click context menu** for seamless integration

### Example
- **Input:** "שמים" (Hebrew for "sky")
- **Output:** "aknho" (English QWERTY equivalent)

## Features
- ✅ Real-time Hebrew-to-English transliteration
- ✅ Works on any webpage with text selection
- ✅ Supports input fields, textareas, and rich text editors
- ✅ Preserves formatting and non-Hebrew characters
- ✅ Simple right-click activation
- ✅ No API keys or external dependencies required

## Installation Instructions

### Prerequisites
- Google Chrome browser (version 88 or higher)
- No additional software or API keys required

### Setup Steps

1. **Download the Extension Files**
   - Ensure all files are in the `hebrew-to-qwerty` directory:
     - `manifest.json`
     - `background.js`
     - `content.js`

2. **Load the Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable **"Developer mode"** (toggle in top-right corner)
   - Click **"Load unpacked"**
   - Select the `demo_hw11` folder containing your extension files
   - The extension should now appear in your extensions list

3. **Verify Installation**
   - Look for "Hebrew Keyboard Transliterator" in your extensions
   - The extension should show as "Enabled"

## How to Use

### Basic Usage
1. **Navigate to any webpage** with text content
2. **Select Hebrew text** you want to transliterate
3. **Right-click** on the selected text
4. **Choose** "Transliterate Hebrew to English (QWERTY)" from the context menu
5. **View the result** - your Hebrew text is now converted to English QWERTY

### Usage Scenarios
- **Text Fields:** Select text in input boxes, textareas, or search bars
- **Web Content:** Select Hebrew text in articles, comments, or any webpage content
- **Rich Text Editors:** Works in contenteditable areas like email composers or document editors
- **No Selection:** If a text field is focused but no text is selected, the entire field content will be transliterated

### Keyboard Mapping
The extension uses standard Hebrew QWERTY layout mapping:
- `ש` → `a`, `נ` → `b`, `ב` → `c`, `ה` → `d`, `ו` → `e`
- `א` → `f`, `ר` → `g`, `ט` → `h`, `ו` → `i`, `ן` → `j`
- And so on...

## Troubleshooting

### Common Issues
- **"Could not establish connection" error:** This is normal on Chrome internal pages (chrome://) and can be safely ignored
- **Extension not working:** Ensure you're on a regular website (not chrome:// pages)
- **Context menu not appearing:** Make sure the extension is enabled in chrome://extensions/

### Reloading the Extension
If you make changes to the code:
1. Go to `chrome://extensions/`
2. Click the refresh icon on the Hebrew Keyboard Transliterator extension
3. Test on a new webpage

## Technical Details

### Files Structure
```
demo_hw11/
├── manifest.json      # Extension configuration
├── background.js      # Context menu setup and message handling
├── content.js         # Text transliteration logic
└── README.md         # This file
```

### Permissions
- `contextMenus`: Creates the right-click menu item
- `activeTab`: Accesses the current tab for text manipulation
- `scripting`: Injects content scripts (if needed)

## Contributing
Feel free to improve the Hebrew-to-English mapping or add additional features. The extension is designed to be easily extensible.

## License
This project is open source and available under the MIT License.

---

**Note:** This extension works entirely client-side and doesn't require any API keys, external services, or internet connection for basic functionality. 