
const hebrewToEnglish = {
    'ק': 'q', 'ר': 'r', 'א': 't', 'ט': 'y', 'ו': 'u', 'ן': 'i', 'ם': 'o', 'פ': 'p',
    'ש': 'a', 'ד': 's', 'ג': 'd', 'כ': 'f', 'ע': 'g', 'י': 'h', 'ח': 'j', 'ל': 'k', 'ך': 'l',
    'ז': 'z', 'ס': 'x', 'ב': 'c', 'ה': 'v', 'נ': 'b', 'מ': 'n', 'צ': 'm', 'ת': ',', 'ץ': '.'
};

function transliterateHebrewToEnglish(input) {
    let result = '';
    for (const char of input) {
        if (hebrewToEnglish[char]) {
            result += hebrewToEnglish[char];
        } else {
            result += char;
        }
    }
    return result;
}

function transliterateSelectedText() {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
        // Try to handle input/textarea focus with no selection
        const active = document.activeElement;
        if (active && (active.tagName === 'TEXTAREA' || (active.tagName === 'INPUT' && active.type === 'text') || active.isContentEditable)) {
            const value = active.value || active.innerText || '';
            if (value) {
                const transliterated = transliterateHebrewToEnglish(value);
                if (active.value !== undefined) {
                    active.value = transliterated;
                } else {
                    active.innerText = transliterated;
                }
            }
        }
        return;
    }
    // If selection is inside an input, textarea, or contenteditable
    const anchorNode = selection.anchorNode;
    let field = anchorNode;
    while (field && field.nodeType === 3) field = field.parentNode;
    if (field && (field.tagName === 'TEXTAREA' || (field.tagName === 'INPUT' && field.type === 'text') || field.isContentEditable)) {
        // For input/textarea, use selectionStart/End
        if (field.value !== undefined) {
            const start = field.selectionStart;
            const end = field.selectionEnd;
            const value = field.value;
            const before = value.slice(0, start);
            const selected = value.slice(start, end);
            const after = value.slice(end);
            field.value = before + transliterateHebrewToEnglish(selected) + after;
            field.setSelectionRange(start, start + transliterateHebrewToEnglish(selected).length);
        } else if (field.isContentEditable) {
            // For contenteditable, replace selection
            const selectedText = selection.toString();
            const transliterated = transliterateHebrewToEnglish(selectedText);
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(transliterated));
            selection.removeAllRanges();
        }
    } else {
        // For normal DOM selection
        const range = selection.getRangeAt(0);
        const selectedText = selection.toString();
        const transliterated = transliterateHebrewToEnglish(selectedText);
        range.deleteContents();
        range.insertNode(document.createTextNode(transliterated));
        selection.removeAllRanges();
    }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'transliterate-hebrew') {
        transliterateSelectedText();
    }
});