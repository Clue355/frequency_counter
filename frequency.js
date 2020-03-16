document.getElementById("countButton").onclick = function () {
    let typedText = document.getElementById("textInput").value;
    const letterCounts = {};
    const wordcounts = {};
    typedText = typedText.toLowerCase();
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    word = typedText.split(/\s/);

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    
    for (let i = 0; i < word.length; i++) {
        currentword = word[i]
        if (wordcounts[currentword] === undefined) {
            wordcounts[currentword] = 1;
        } else {
           wordcounts[currentword]++;
        }
    }
    
    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    for (let currentword in wordcounts) {
        const span = document.createElement("span");
        const textContent = document.createTextNode('"' + currentword + "\": " + wordcounts[currentword] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }

}

// typedText = typedText.toLowerCase();  
// This changes all the letter to lower case.  
// typedText = typedText.replace(/[^a-z'\s]+/g, "");  
// This gets rid of all the characters except letters, spaces, and apostrophes.  
// We will learn more about how to use the replace function in an upcoming lesson.