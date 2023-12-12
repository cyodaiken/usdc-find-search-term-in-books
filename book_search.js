/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */



/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let resultList = [];

    // doesn't match alphabetical characters on either side of search term 
    const regex = new RegExp('[^a-zA-Z]' + searchTerm + '[^a-zA-Z]', 'g');

    // Scanned Lines
    for (let i = 0; i < scannedTextObj.length; i++) {
        let objectText = scannedTextObj[i]
        // Text Line
        for (let j = 0; j < objectText.Content.length; j++) {
            let t = " " + objectText.Content[j].Text + " "
            if (t.match(regex)) {
                resultList.push(
                    {
                        "ISBN": objectText.ISBN,
                        "Page": objectText.Content[j].Page,
                        "Line": objectText.Content[j].Line
                    }
                );
                // console.log("Search Results: ", resultList )
            }
        }
    }
    return result = {
        "SearchTerm": searchTerm,
        "Results": resultList
    };
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesAnd = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

const twentyLeaguesPanda = {
    "SearchTerm": "panda",
    "Results": []
}

const twentyLeaguesCanada = {
    "SearchTerm": "Canadian's",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesDark = {
    "SearchTerm": "dark",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}


// Input Object 1 
const inputObject1 = [
    {
        "Title": "My Book Title",
        "ISBN": "0123456789012",
        "Content": [
            {
                "Page": 2,
                "Line": 1,
                "Text": "chemotherapy. There is a black dog sleeping!"
            },
            {
                "Page": 7,
                "Line": 3,
                "Text": "I have to check-in to the 8hotel."
            },
            {
                "Page": 7,
                "Line": 9,
                "Text": "Please dog cat monkey(s)"
            }
        ]
    }
]

// Output objects for inputObject1 tests

const inputObject1Mother = {
    "SearchTerm": "mother",
    "Results": []
}

const inputObject1CheckIn = {
    "SearchTerm": "check-in",
    "Results": [
        {
            "ISBN": "0123456789012",
            "Page": 7,
            "Line": 3
        }
    ]
}

const inputObject1Hotel = {
    "SearchTerm": "hotel",
    "Results": [
        {
            "ISBN": "0123456789012",
            "Page": 7,
            "Line": 3
        }
    ]
}

const inputObject1Monkey = {
    "SearchTerm": "monkey",
    "Results": [
        {
            "ISBN": "0123456789012",
            "Page": 7,
            "Line": 9
        }
    ]
}

const inputObject1Monkeys = {
    "SearchTerm": "monkeys",
    "Results": [
    ]
}

// Input object 2
const inputObject2 = [
    {
        "Title": "My Book Title2",
        "ISBN": "1123456789012",
        "Content": []
    }
]

// output objects for Input object 2 
const inputObject2Nonexistent = {
    "SearchTerm": "nonexistent",
    "Results": []
}

// Input object 3
const inputObject3 = []

// output objects for Input object 3 
const inputObject3None = {
    "SearchTerm": "none",
    "Results": []
}

// Input object 4
const inputObject4 = [
    {
        "Title": "My Book Title4",
        "ISBN": "4123456789012",
        "Content": [
            {
                "Page": 19,
                "Line": 11,
                "Text": "This is some random text."
            },
            {
                "Page": 30,
                "Line": 2,
                "Text": "Peanut butter and jam sandwiches have peanut butter and jam in them."
            },
            {
                "Page": 40,
                "Line": 1,
                "Text": "Lemons are a type of citrus."
            }
        ]
    },

    {
        "Title": "My Book Title5",
        "ISBN": "5123456789012",
        "Content": [
            {
                "Page": 1,
                "Line": 2,
                "Text": "Panda bears are black and white."
            },
            {
                "Page": 3,
                "Line": 4,
                "Text": "Oranges are a type of citrus."
            },
            {
                "Page": 5,
                "Line": 6,
                "Text": "Jellybeans have a lot of sugar in them."
            }
        ]
    }
]

// output objects for Input object 4
const inputObject4Citrus = {
    "SearchTerm": "citrus",
    "Results": [
        {
            "ISBN": "4123456789012",
            "Page": 40,
            "Line": 1
        },
        {
            "ISBN": "5123456789012",
            "Page": 3,
            "Line": 4
        }
    ]
}

const inputObject4Jam = {
    "SearchTerm": "jam",
    "Results": [
        {
            "ISBN": "4123456789012",
            "Page": 30,
            "Line": 2
        }
    ]
}


/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */

// capitalization 
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length === 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Canadian's apostrophe 
const testCanada = findSearchTermInBooks("Canadian's", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesCanada) === JSON.stringify(testCanada)) {
    console.log("PASS: Canadian's Test")
} else {
    console.log("FAIL: Test Canadian's");
    console.log("Expected:", twentyLeaguesCanada);
    console.log("Received:", testCanada);
}

// dark- dash
const testDark = findSearchTermInBooks("dark", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesDark) === JSON.stringify(testDark)) {
    console.log("PASS: Dark Test")
} else {
    console.log("FAIL: Test Dark");
    console.log("Expected:", twentyLeaguesDark);
    console.log("Received:", testDark);
}

// positive test that has multiple results and
const testPositiveMultiple = findSearchTermInBooks("and", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesAnd) === JSON.stringify(testPositiveMultiple)) {
    console.log("PASS: Test Positive Multiple And");
} else {
    console.log("FAIL: Test Positive Multiple And");
    console.log("Expected:", twentyLeaguesAnd);
    console.log("Received:", testPositiveMultiple);
}

// positive test that has multiple results and length
const testPosMultLen = findSearchTermInBooks("and", twentyLeaguesIn);
if (testPosMultLen.Results.length === 2) {
    console.log("PASS: Test Positive Multiple Length And");
} else {
    console.log("FAIL: Test Positive Multiple Length And");
    console.log("Expected:", twentyLeaguesAnd.Results.length);
    console.log("Received:", testPosMultLen.Results.length);
}

// negative test Panda
const testNegativePanda = findSearchTermInBooks("panda", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesPanda) === JSON.stringify(testNegativePanda)) {
    console.log("PASS: Test Negative Panda");
} else {
    console.log("FAIL: Test Negative Panda");
    console.log("Expected:", twentyLeaguesPanda);
    console.log("Received:", testNegativePanda);
}

// negative test Panda length
const testNegLen = findSearchTermInBooks("panda", twentyLeaguesIn);
if (testNegLen.Results.length === 0) {
    console.log("PASS: Test Negative Length Panda");
} else {
    console.log("FAIL: Test Negative Length Panda");
    console.log("Expected:", twentyLeaguesPanda.Results.length);
    console.log("Received:", testNegLen.Results.length);
}

/* letters */
// words inside words
const testMother = findSearchTermInBooks("mother", inputObject1);
if (JSON.stringify(inputObject1Mother) === JSON.stringify(testMother)) {
    console.log("PASS: Test Negative Chemo");
} else {
    console.log("FAIL: Test Negative Chemo");
    console.log("Expected:", inputObject1Mother);
    console.log("Received:", testMother);
}

/* non-letter */
// dashed word
const testCheckIn = findSearchTermInBooks("check-in", inputObject1);
if (JSON.stringify(inputObject1CheckIn) === JSON.stringify(testCheckIn)) {
    console.log("PASS: Test Check-in");
} else {
    console.log("FAIL: Test Check-in");
    console.log("Expected:", inputObject1CheckIn);
    console.log("Received:", testCheckIn);
}


// numbers 
const testHotel = findSearchTermInBooks("hotel", inputObject1);
if (JSON.stringify(inputObject1Hotel) === JSON.stringify(testHotel)) {
    console.log("PASS: Test Hotel");
} else {
    console.log("FAIL: Test Hotel");
    console.log("Expected:", inputObject1Hotel);
    console.log("Received:", testHotel);
}


// ()
const testMonkey = findSearchTermInBooks("monkey", inputObject1);
if (JSON.stringify(inputObject1Monkey) === JSON.stringify(testMonkey)) {
    console.log("PASS: Test Monkey");
} else {
    console.log("FAIL: Test Mokey");
    console.log("Expected:", inputObject1Monkey);
    console.log("Received:", testMonkey);
}

const testMonkeys = findSearchTermInBooks("monkeys", inputObject1);
if (JSON.stringify(inputObject1Monkeys) === JSON.stringify(testMonkeys)) {
    console.log("PASS: Test Monkeys");
} else {
    console.log("FAIL: Test Mokeys");
    console.log("Expected:", inputObject1Monkeys);
    console.log("Received:", testMonkeys);
}


// no object
const test3None = findSearchTermInBooks("none", inputObject3);
if (JSON.stringify(inputObject3None) === JSON.stringify(test3None)) {
    console.log("PASS: Test 3 None");
} else {
    console.log("FAIL: Test 3 None");
    console.log("Expected:", inputObject3None);
    console.log("Received:", test3None);
}

// object, no content
const testNonexistent = findSearchTermInBooks("nonexistent", inputObject2);
if (JSON.stringify(inputObject2Nonexistent) === JSON.stringify(testNonexistent)) {
    console.log("PASS: Test 2 Nonexistent");
} else {
    console.log("FAIL: Test 2 Nonexistent");
    console.log("Expected:", inputObject2Nonexistent);
    console.log("Received:", testNonexistent);
}

// more than 1 book object search result in both 
const testCitrus = findSearchTermInBooks("citrus", inputObject4);
if (JSON.stringify(inputObject4Citrus) === JSON.stringify(testCitrus)) {
    console.log("PASS: Test 4 Citrus");
} else {
    console.log("FAIL: Test 4 Citrus");
    console.log("Expected:", inputObject4Citrus);
    console.log("Received:", testCitrus);
}

// same word in the same line 
const testJam = findSearchTermInBooks("jam", inputObject4);
if (JSON.stringify(inputObject4Jam) === JSON.stringify(testJam)) {
    console.log("PASS: Test 4 Jam");
} else {
    console.log("FAIL: Test 4 Jam");
    console.log("Expected:", inputObject4Jam);
    console.log("Received:", testJam);
}