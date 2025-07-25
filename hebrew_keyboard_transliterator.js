// Hebrew to English QWERTY mapping
const hebrewToEnglish = {
    'ש': 'a', 'נ': 'b', 'ב': 'c', 'ה': 'd', 'ו': 'e', 'א': 'f', 'ר': 'g', 'ט': 'h', 'ו': 'i', 'ן': 'j', 'ם': 'k', 'פ': 'l', 'ם': 'm', 'צ': 'n', 'ק': 'o', 'ר': 'p', 'א': 'q', 'ט': 'r', 'ו': 's', 'ן': 't', 'ם': 'u', 'פ': 'v', 'ד': 'w', 'ג': 'x', 'כ': 'y', 'ע': 'z',
    // Full mapping below (standard Hebrew QWERTY)
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
            result += char; // Keep non-Hebrew characters as is
        }
    }
    return result;
}

// CLI demonstration
if (require.main === module) {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter Hebrew text: ', (answer) => {
        const transliterated = transliterateHebrewToEnglish(answer);
        console.log('Transliterated:', transliterated);
        rl.close();
    });
}

// Export for testing
module.exports = { transliterateHebrewToEnglish, hebrewToEnglish }; 