document.getElementById('textInput').addEventListener('input', function () {
    let text = this.value;

    // Count Words
    let words = text.match(/\b\w+\b/g);
    let wordCount = words ? words.length : 0;

    // Count Characters with spaces
    let charCount = text.length;

    // Count Characters without spaces
    let charCountNoSpace = text.replace(/\s/g, '').length;

    // Count Sentences
    let sentences = text.match(/[\w|\)][.?!](\s|$)/g);
    let sentenceCount = sentences ? sentences.length : 0;

    // Update the results
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
    document.getElementById('charCountNoSpace').textContent = charCountNoSpace;
    document.getElementById('sentenceCount').textContent = sentenceCount;
});
