

// // Dummy dataset for the chatbot
// const dataset = {
//     "hi": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "hello": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "admission": "Student must have completed his/her 12th boards and should have passed all subjects.",
//     "apply": "One can apply through the ACPC website.",
//     "jee marks": "No, JEE marks are not accepted by this college.",
//     "gtu": "Yes, this college is affiliated with GTU.",
//     "university": "Yes, this college is affiliated with GTU.",
//     "courses": "Courses like B.E in Mechanical Engineering, Computer Engineering, Civil Engineering, Information Technology, and Electrical Engineering are offered by this college.",
//     "class strength": "The average class strength is around 60-70 students.",
//     "transportation": "Yes, we have college buses available for transportation of the students.",
//     "parking": "Yes, there is plenty of space available in our college campus for parking purposes.",
//     "fees": "The tuition fees for a particular student is ₹44,000 per semester.",
//     "textbooks": "No, there are no additional fees for textbooks or lab.",
//     "payment": "Students can pay their tuition fees through cash, cheque, GPay, etc.",
//     "canteen": "Yes, there is a canteen facility in the college.",
//     "gym": "No, there is no gym or fitness center.",
//     "sports": "Yes, there is a badminton court, box cricket, and a cricket ground available for students.",
//     "attendance": "As per GTU, you must have 75% attendance.",
//     "scholarships": "Yes, scholarships are provided by MYSY.",
//     "lab": "Yes, the college has up-to-date lab facilities.",
//     "fests": "Yes, the college organizes technical fests and cultural fests.",
//     "hostel": "Yes, the college has both boys and girls hostels.",
//     "timings": "College hours are typically from 8:30 AM to 4:30 PM, Monday to Saturday.",
//     "holidays": "CKPCET follows the GTU academic calendar for holidays and vacations.",
//     "events": "CKPCET regularly hosts technical workshops, seminars, and cultural events throughout the year.",
//     "wifi": "Yes, the college campus provides free Wi-Fi access to students and staff.",
//     "internships": "Internship opportunities are provided through the Training and Placement Cell in collaboration with industry partners.",
//     "security": "The college and hostels are equipped with 24/7 security and surveillance for student safety.",
//     "environment": "CKPCET provides a vibrant and eco-friendly campus environment for students to learn and grow.",
//            "seminars": "The college regularly organizes seminars on emerging technologies and industry trends.",
//                      "technical clubs": "Yes, there are several technical clubs like the Coding Club, Robotics Club, and Electronics Club.",
//              "cultural activities": "CKPCET encourages participation in cultural activities, including dance, drama, and music.",
//              "annual day": "The college celebrates its Annual Day with a mix of cultural performances, awards, and entertainment.",
//             "student council": "The Student Council represents the student body and organizes various events throughout the year.",
//             "hostel fees": "The hostel fee is approximately ₹20,000 per semester, including accommodation and basic amenities.",
//            "mess facilities": "Yes, the hostel has a mess that provides nutritious and hygienic meals to students.",
//             "security": "The college and hostels are equipped with 24/7 security and surveillance for student safety.",
//             "medical facilities": "Basic medical facilities and a first-aid room are available on campus.",
//            "loan assistance": "CKPCET provides guidance for education loans through partner banks.",
//            "parent-teacher meetings": "Regular parent-teacher meetings are conducted to discuss student progress.",
//            "academic support": "Extra classes and tutorials are available for students who need additional academic support.",
//             "exam results": "Results are published on the GTU website and communicated to students through the college portal.",
//             "clubs": "Apart from technical clubs, there are cultural and sports clubs for overall student development.",
//              "grievance redressal": "The college has a Grievance Redressal Cell to address student concerns and complaints.",
//              "workshops": "Workshops on cutting-edge technologies and soft skills are conducted frequently.",
//             "startup support": "The college has an Entrepreneurship Cell to support students in starting their ventures.",
//              "counseling services": "Yes, the college offers professional counseling services to help students with personal and academic issues.",
//             "project guidance": "Faculty members provide extensive guidance for academic and industry-based projects."
// };

// // Function to clean user input (lowercase and remove punctuation)
// function cleanInput(input) {
//     return input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
// }

// // Function to find the best response (keyword matching + fallback)
// function findResponse(input, dataset) {
//     const cleanedInput = cleanInput(input);

//     // Step 1: Check for exact matches
//     if (dataset[cleanedInput]) {
//         return dataset[cleanedInput];
//     }

//     // Step 2: Check for partial matches and prioritize longer keys
//     let bestMatch = null;
//     for (const key in dataset) {
//         if (cleanedInput.includes(key)) {
//             if (!bestMatch || key.length > bestMatch.length) {
//                 bestMatch = key;
//             }
//         }
//     }

//     if (bestMatch) {
//         return dataset[bestMatch];
//     }

//     // Step 3: Fallback response if no match is found
//     return "Sorry, I didn't understand that. Can you rephrase your question?";
// }

// // Function to send the message and display the response
// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const userMessage = inputField.value.trim();

//     if (userMessage !== "") {
//         addMessage(userMessage, "user-message"); // Calls addMessage() to display the user's message in the chat.

//         // Find the best response
//         const botResponse = findResponse(userMessage, dataset); // Calls findResponse() to get the bot's reply based on the dataset.

//         setTimeout(() => {
//             addMessage(botResponse, "bot-message");
//         }, 500); // Mimic bot thinking

//         inputField.value = ""; // Clear the input field
//     }
// }

// // Function to add a message to the chat
// function addMessage(message, className) {
//     const chatMessages = document.getElementById("chat-messages");

//     const messageDiv = document.createElement("div");
//     messageDiv.classList.add("message", className);
//     messageDiv.innerText = message;

//     chatMessages.appendChild(messageDiv);
//     chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
// }

// // Allow sending message with the Enter key
// document.getElementById("user-input").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// });






// Full dataset for the chatbot
// 

// // Full dataset for the chatbot
// const dataset = {
//     "hi": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "hello": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "admission": "Student must have completed his/her 12th boards and should have passed all subjects.",
//     "apply": "One can apply through the ACPC website.",
//     "jee marks": "No, JEE marks are not accepted by this college.",
//     "gtu": "Yes, this college is affiliated with GTU.",
//     "university": "Yes, this college is affiliated with GTU.",
//     "courses": "Courses like B.E in Mechanical Engineering, Computer Engineering, Civil Engineering, Information Technology, and Electrical Engineering are offered by this college.",
//     "class strength": "The average class strength is around 60-70 students.",
//     "transportation": "Yes, we have college buses available for transportation of the students.",
//     "parking": "Yes, there is plenty of space available in our college campus for parking purposes.",
//     "fees": "The tuition fees for a particular student is ₹44,000 per semester.",
//     "textbooks": "No, there are no additional fees for textbooks or lab.",
//     "payment": "Students can pay their tuition fees through cash, cheque, GPay, etc.",
//     "canteen": "Yes, there is a canteen facility in the college.",
//     "gym": "No, there is no gym or fitness center.",
//     "sports": "Yes, there is a badminton court, box cricket, and a cricket ground available for students.",
//     "attendance": "As per GTU, you must have 75% attendance.",
//     "scholarships": "Yes, scholarships are provided by MYSY.",
//     "lab": "Yes, the college has up-to-date lab facilities.",
//     "fests": "Yes, the college organizes technical fests and cultural fests.",
//     "hostel": "Yes, the college has both boys and girls hostels.",
//     "timings": "College hours are typically from 8:30 AM to 4:30 PM, Monday to Saturday.",
//     "holidays": "CKPCET follows the GTU academic calendar for holidays and vacations.",
//     "events": "CKPCET regularly hosts technical workshops, seminars, and cultural events throughout the year.",
//     "wifi": "Yes, the college campus provides free Wi-Fi access to students and staff.",
//     "internships": "Internship opportunities are provided through the Training and Placement Cell in collaboration with industry partners.",
//     "security": "The college and hostels are equipped with 24/7 security and surveillance for student safety.",
//     "environment": "CKPCET provides a vibrant and eco-friendly campus environment for students to learn and grow.",
//     "seminars": "The college regularly organizes seminars on emerging technologies and industry trends.",
//     "technical clubs": "Yes, there are several technical clubs like the Coding Club, Robotics Club, and Electronics Club.",
//     "cultural activities": "CKPCET encourages participation in cultural activities, including dance, drama, and music.",
//     "annual day": "The college celebrates its Annual Day with a mix of cultural performances, awards, and entertainment.",
//     "student council": "The Student Council represents the student body and organizes various events throughout the year.",
//     "hostel fees": "The hostel fee is approximately ₹20,000 per semester, including accommodation and basic amenities.",
//     "mess facilities": "Yes, the hostel has a mess that provides nutritious and hygienic meals to students.",
//     "medical facilities": "Basic medical facilities and a first-aid room are available on campus.",
//     "loan assistance": "CKPCET provides guidance for education loans through partner banks.",
//     "parent-teacher meetings": "Regular parent-teacher meetings are conducted to discuss student progress.",
//     "academic support": "Extra classes and tutorials are available for students who need additional academic support.",
//     "exam results": "Results are published on the GTU website and communicated to students through the college portal.",
//     "clubs": "Apart from technical clubs, there are cultural and sports clubs for overall student development.",
//     "grievance redressal": "The college has a Grievance Redressal Cell to address student concerns and complaints.",
//     "workshops": "Workshops on cutting-edge technologies and soft skills are conducted frequently.",
//     "startup support": "The college has an Entrepreneurship Cell to support students in starting their ventures.",
//     "counseling services": "Yes, the college offers professional counseling services to help students with personal and academic issues.",
//     "project guidance": "Faculty members provide extensive guidance for academic and industry-based projects."
// };

// const queryLog = {};
// const THRESHOLD = 3; // Number of times a query must be asked to add it to FAQs

// // Function to clean user input
// function cleanInput(input) {
//     return input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
// }

// // Function to find a response
// function findResponse(input) {
//     const cleanedInput = cleanInput(input);
//     return dataset[cleanedInput] || "Sorry, I didn't understand that. Can you rephrase your question?";
// }

// // Function to handle user query
// function handleUserQuery(userQuery) {
//     const response = findResponse(userQuery);

//     // Track the question frequency
//     queryLog[userQuery] = (queryLog[userQuery] || 0) + 1;

//     // Add to FAQs if threshold is met
//     if (queryLog[userQuery] === THRESHOLD) {
//         addToFAQs(userQuery, response);
//     }

//     return response;
// }

// // Function to add a question to FAQs
// function addToFAQs(question, answer) {
//     const faqList = JSON.parse(localStorage.getItem("faqDataset")) || [];
//     if (!faqList.some(faq => faq.question === question)) {
//         faqList.push({ question, answer });
//         localStorage.setItem("faqDataset", JSON.stringify(faqList));
//         console.log(`Added to FAQs: ${question} -> ${answer}`);
//     }
// }

// // Function to send a chatbot message
// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const userMessage = inputField.value.trim();

//     if (userMessage) {
//         const response = handleUserQuery(userMessage);
//         console.log(`Bot Response: ${response}`);
//         inputField.value = "";
//     }
// }

// 







// // Dummy dataset for the chatbot
// const dataset = {
//     "hi": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "hello": "Hello User! I am CKPCET Chatbot. What can I help you?",
//     "admission": "Student must have completed his/her 12th boards and should have passed all subjects.",
//     "apply": "One can apply through the ACPC website.",
//     "jee marks": "No, JEE marks are not accepted by this college.",
//     "gtu": "Yes, this college is affiliated with GTU.",
//     "university": "Yes, this college is affiliated with GTU.",
//     "courses": "Courses like B.E in Mechanical Engineering, Computer Engineering, Civil Engineering, Information Technology, and Electrical Engineering are offered by this college.",
//     "class strength": "The average class strength is around 60-70 students.",
//     "transportation": "Yes, we have college buses available for transportation of the students.",
//     "parking": "Yes, there is plenty of space available in our college campus for parking purposes.",
//     "fees": "The tuition fees for a particular student is ₹44,000 per semester.",
//     "textbooks": "No, there are no additional fees for textbooks or lab.",
//     "payment": "Students can pay their tuition fees through cash, cheque, GPay, etc.",
//     "canteen": "Yes, there is a canteen facility in the college.",
//     "gym": "No, there is no gym or fitness center.",
//     "sports": "Yes, there is a badminton court, box cricket, and a cricket ground available for students.",
//     "attendance": "As per GTU, you must have 75% attendance.",
//     "scholarships": "Yes, scholarships are provided by MYSY.",
//     "lab": "Yes, the college has up-to-date lab facilities.",
//     "fests": "Yes, the college organizes technical fests and cultural fests.",
//     "hostel": "Yes, the college has both boys and girls hostels.",
//     "timings": "College hours are typically from 8:30 AM to 4:30 PM, Monday to Saturday.",
//     "holidays": "CKPCET follows the GTU academic calendar for holidays and vacations.",
//     "events": "CKPCET regularly hosts technical workshops, seminars, and cultural events throughout the year.",
//     "wifi": "Yes, the college campus provides free Wi-Fi access to students and staff.",
//     "internships": "Internship opportunities are provided through the Training and Placement Cell in collaboration with industry partners.",
//     "security": "The college and hostels are equipped with 24/7 security and surveillance for student safety.",
//     "environment": "CKPCET provides a vibrant and eco-friendly campus environment for students to learn and grow.",
//     "seminars": "The college regularly organizes seminars on emerging technologies and industry trends.",
//     "technical clubs": "Yes, there are several technical clubs like the Coding Club, Robotics Club, and Electronics Club.",
//     "cultural activities": "CKPCET encourages participation in cultural activities, including dance, drama, and music.",
//     "annual day": "The college celebrates its Annual Day with a mix of cultural performances, awards, and entertainment.",
//     "student council": "The Student Council represents the student body and organizes various events throughout the year.",
//     "hostel fees": "The hostel fee is approximately ₹20,000 per semester, including accommodation and basic amenities.",
//     "mess facilities": "Yes, the hostel has a mess that provides nutritious and hygienic meals to students.",
//     "medical facilities": "Basic medical facilities and a first-aid room are available on campus.",
//     "loan assistance": "CKPCET provides guidance for education loans through partner banks.",
//     "parent-teacher meetings": "Regular parent-teacher meetings are conducted to discuss student progress.",
//     "academic support": "Extra classes and tutorials are available for students who need additional academic support.",
//     "exam results": "Results are published on the GTU website and communicated to students through the college portal.",
//     "clubs": "Apart from technical clubs, there are cultural and sports clubs for overall student development.",
//     "grievance redressal": "The college has a Grievance Redressal Cell to address student concerns and complaints.",
//     "workshops": "Workshops on cutting-edge technologies and soft skills are conducted frequently.",
//     "startup support": "The college has an Entrepreneurship Cell to support students in starting their ventures.",
//     "counseling services": "Yes, the college offers professional counseling services to help students with personal and academic issues.",
//     "project guidance": "Faculty members provide extensive guidance for academic and industry-based projects."
// };


// // Track question frequency
// const questionFrequency = {};
// const THRESHOLD = 3; // Add to FAQs after this many repetitions

// // Function to clean user input
// function cleanInput(input) {
//     return input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
// }

// // Function to find the best response
// function findResponse(input, dataset) {
//     const cleanedInput = cleanInput(input);

//     // Step 1: Check for exact matches
//     if (dataset[cleanedInput]) {
//         return dataset[cleanedInput];
//     }

//     // Step 2: Check for partial matches and prioritize longer keys
//     let bestMatch = null;
//     for (const key in dataset) {
//         if (cleanedInput.includes(key)) {
//             if (!bestMatch || key.length > bestMatch.length) {
//                 bestMatch = key;
//             }
//         }
//     }

//     if (bestMatch) {
//         return dataset[bestMatch];
//     }

//     // Step 3: Fallback response if no match is found
//     return "Sorry, I didn't understand that. Can you rephrase your question?";
// }

// // Function to send the message and display the response
// function sendMessage() {
//     const inputField = document.getElementById("user-input");
//     const userMessage = inputField.value.trim();

//     if (userMessage !== "") {
//         addMessage(userMessage, "user-message"); // Display the user's message

//         // Track question frequency
//         const cleanedInput = cleanInput(userMessage);
//         questionFrequency[cleanedInput] = (questionFrequency[cleanedInput] || 0) + 1;

//         // Add to FAQs if threshold is reached
//         if (questionFrequency[cleanedInput] === THRESHOLD && dataset[cleanedInput]) {
//             addToFAQs(userMessage, dataset[cleanedInput]);
//         }

//         // Find the best response
//         const botResponse = findResponse(userMessage, dataset);

//         setTimeout(() => {
//             addMessage(botResponse, "bot-message"); // Display the bot's response
//         }, 500);

//         inputField.value = ""; // Clear the input field
//     }
// }

// // Function to add a message to the chat
// function addMessage(message, className) {
//     const chatMessages = document.getElementById("chat-messages");

//     const messageDiv = document.createElement("div");
//     messageDiv.classList.add("message", className);
//     messageDiv.innerText = message;

//     chatMessages.appendChild(messageDiv);
//     chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
// }

// // Allow sending message with the Enter key
// document.getElementById("user-input").addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         sendMessage();
//     }
// });

// // Function to add FAQs dynamically
// function addToFAQs(question, answer) {
//     const faqs = JSON.parse(localStorage.getItem("faqDataset")) || [];
    
//     // Check if the question already exists in the FAQs
//     if (!faqs.some(faq => faq.question.toLowerCase() === question.toLowerCase())) {
//         faqs.push({ question, answer });

//         // Save back to localStorage
//         localStorage.setItem("faqDataset", JSON.stringify(faqs));
//         console.log(`Added to FAQs: ${question} -> ${answer}`);
//     }
// }


// function addFAQToDataset(question, answer) {
//     faqDataset.push({ question, answer });

//     // Limit FAQs to 5
//     if (faqDataset.length > 5) {
//         faqDataset.shift();
//     }

//     // Save to localStorage
//     localStorage.setItem("faqDataset", JSON.stringify(faqDataset));

//     console.log(`New FAQ added: ${question} -> ${answer}`);
// }

// if (questionFrequency[cleanedInput] === THRESHOLD && dataset[cleanedInput]) {
//     addToFAQs(userMessage, dataset[cleanedInput]); // Add the new FAQ dynamically
// }














// Dataset for Chatbot
const dataset = {
    "hi": "Hello User! I am CKPCET Chatbot. What can I help you?",
    "admission": "Student must have completed his/her 12th boards and should have passed all subjects.",
    "apply": "One can apply through the ACPC website.",
    "jee marks": "No, JEE marks are not accepted by this college.",
    "gtu": "Yes, this college is affiliated with GTU.",
    "university": "Yes, this college is affiliated with GTU.",
    "courses": "Courses like B.E in Mechanical Engineering, Computer Engineering, Civil Engineering, Information Technology, and Electrical Engineering are offered by this college.",
    "fees": "The tuition fees for a particular student is ₹44,000 per semester.",
    "timings": "College hours are typically from 8:30 AM to 4:30 PM, Monday to Saturday.",
    "hostel": "Yes, the college has both boys and girls hostels.",
    "canteen": "Yes, there is a canteen facility in the college.",
    "sports": "Yes, there is a badminton court, box cricket, and a cricket ground available for students.",
    "scholarships": "Yes, scholarships are provided by MYSY.",
    "wifi": "Yes, the college campus provides free Wi-Fi access to students and staff.",
    "gym": "No, there is no gym or fitness center.",
    "transportation": "Yes, we have college buses available for transportation of the students.",
    "parking": "Yes, there is plenty of space available in our college campus for parking purposes.",
    "fests": "Yes, the college organizes technical fests and cultural fests.",
    "lab": "Yes, the college has up-to-date lab facilities.",
    "holidays": "CKPCET follows the GTU academic calendar for holidays and vacations.",
    "internships": "Internship opportunities are provided through the Training and Placement Cell in collaboration with industry partners.",
    "security": "The college and hostels are equipped with 24/7 security and surveillance for student safety.",
    "mess facilities": "Yes, the hostel has a mess that provides nutritious and hygienic meals to students.",
    "medical facilities": "Basic medical facilities and a first-aid room are available on campus.",
    "loan assistance": "CKPCET provides guidance for education loans through partner banks.",
    "exam results": "Results are published on the GTU website and communicated to students through the college portal.",
    "cultural activities": "CKPCET encourages participation in cultural activities, including dance, drama, and music.",
    "technical clubs": "Yes, there are several technical clubs like the Coding Club, Robotics Club, and Electronics Club.",
    "project guidance": "Faculty members provide extensive guidance for academic and industry-based projects.",
    "counseling services": "Yes, the college offers professional counseling services to help students with personal and academic issues.",
    "annual day": "The college celebrates its Annual Day with a mix of cultural performances, awards, and entertainment.",
    "student council": "The Student Council represents the student body and organizes various events throughout the year.",
    "parent-teacher meetings": "Regular parent-teacher meetings are conducted to discuss student progress.",
    "startup support": "The college has an Entrepreneurship Cell to support students in starting their ventures.",
    "workshops": "Workshops on cutting-edge technologies and soft skills are conducted frequently.",
    "grievance redressal": "The college has a Grievance Redressal Cell to address student concerns and complaints.",
    "clubs": "Apart from technical clubs, there are cultural and sports clubs for overall student development.",
    "placement": "The Training and Placement Cell provides placement assistance to final-year students.",
    "faculty": "The faculty members are highly qualified and experienced in their respective fields.",
    "environment": "CKPCET provides a vibrant and eco-friendly campus environment for students to learn and grow.",
    "hostel fees": "The hostel fee is approximately ₹20,000 per semester, including accommodation and basic amenities.",
    "library": "The library is well-equipped with books, journals, and e-resources for all courses.",
    "canteen menu": "The canteen offers a variety of vegetarian snacks and meals at reasonable prices.",
    "placement rate": "The college has a placement rate of over 85%, with top recruiters visiting each year.",
    "guest lectures": "Guest lectures by industry experts are organized regularly to enhance student knowledge.",
    "research opportunities": "Students are encouraged to participate in research projects and publish their work."
};


// Synonyms for Intent Mapping
const intentSynonyms = {
    "fees": ["fees", "tuition", "cost", "payment", "charges"],
    "timings": ["timings", "hours", "schedule", "college hours"],
    "admission": ["admission", "enrollment", "eligibility", "entry requirements"],
    "hostel": ["hostel", "dorm", "accommodation", "lodging"],
    "canteen": ["canteen", "food", "cafeteria", "mess"],
    "sports": ["sports", "games", "physical activities", "badminton", "cricket"],
    "wifi": ["wifi", "internet", "network", "connectivity"],
    "gym": ["gym", "fitness", "exercise", "workout"],
    "scholarships": ["scholarships", "financial aid", "mysy", "scholarship programs"],
    "transportation": ["transportation", "buses", "commute", "college bus"],
    "parking": ["parking", "vehicle parking", "parking space", "where to park"],
    "fests": ["fests", "events", "technical fests", "cultural fests", "annual events"],
    "lab": ["lab", "laboratories", "practical labs", "lab facilities"],
    "holidays": ["holidays", "vacations", "days off", "college holidays"],
    "internships": ["internships", "training", "placement training", "industry collaboration"],
    "security": ["security", "safety", "surveillance", "24/7 security"],
    "mess facilities": ["mess facilities", "food services", "hostel food", "meals"],
    "medical facilities": ["medical facilities", "first aid", "healthcare", "doctor"],
    "loan assistance": ["loan assistance", "education loan", "student loans", "loan guidance"],
    "exam results": ["exam results", "results", "marks", "grades", "scores"],
    "cultural activities": ["cultural activities", "dance", "drama", "music", "cultural events"],
    "technical clubs": ["technical clubs", "coding club", "robotics club", "electronics club"],
    "project guidance": ["project guidance", "project help", "academic projects", "industry projects"],
    "counseling services": ["counseling services", "counseling", "mental health", "student help"],
    "annual day": ["annual day", "annual celebration", "college day", "main event"],
    "student council": ["student council", "student body", "council events", "student representatives"],
    "placement": ["placement", "jobs", "recruitment", "training and placement"],
    "faculty": ["faculty", "professors", "teachers", "lecturers"],
    "library": ["library", "books", "journals", "e-resources", "study materials"],
    "placement rate": ["placement rate", "job opportunities", "recruitment success"],
    "guest lectures": ["guest lectures", "seminars", "talks", "industry experts"],
    "research opportunities": ["research opportunities", "projects", "publications", "R&D"],
    "workshops": ["workshops", "hands-on training", "skill sessions", "technical training"]
};


// Stopwords for Preprocessing
const stopwords = ["what", "is", "the", "tell", "me", "about", "does", "how", "much", "are", "can", "you", "in", "for", "of"];

// Question Frequency Tracking
const questionFrequency = {};
const THRESHOLD = 3; // Number of repetitions before adding to FAQs

// Helper: Clean User Input
function cleanInput(input) {
    const words = input.toLowerCase().split(/\s+/);
    return words.filter(word => !stopwords.includes(word)).join(" ");
}

// Helper: Match Intent Using Synonyms
function matchIntent(input) {
    const cleanedInput = cleanInput(input);
    for (const intent in intentSynonyms) {
        if (intentSynonyms[intent].some(synonym => cleanedInput.includes(synonym))) {
            return intent;
        }
    }
    return null; // No match found
}

// Find Chatbot Response
function findResponse(input) {
    const intent = matchIntent(input) || input; // Check intent or fallback to exact match
    if (dataset[intent]) {
        return dataset[intent];
    }
    return "Sorry, I didn't understand that. Can you rephrase?";
}

// Send Message Handler
function sendMessage() {
    const inputField = document.getElementById("user-input");
    const userMessage = inputField.value.trim();

    if (userMessage) {
        // Display User's Message
        addMessage(userMessage, "user-message");

        // Track Question Frequency
        const cleanedInput = cleanInput(userMessage);
        questionFrequency[cleanedInput] = (questionFrequency[cleanedInput] || 0) + 1;

        // Dynamically Add to FAQs if Threshold is Met
        if (questionFrequency[cleanedInput] === THRESHOLD) {
            const response = findResponse(userMessage);
            addToFAQs(userMessage, response);
        }

        // Get and Display Chatbot Response
        const response = findResponse(userMessage);
        setTimeout(() => addMessage(response, "bot-message"), 500);

        // Clear Input Field
        inputField.value = "";
    }
}

// Add to FAQs
function addToFAQs(question, answer) {
    const faqs = JSON.parse(localStorage.getItem("faqDataset")) || [];
    if (!faqs.some(faq => faq.question.toLowerCase() === question.toLowerCase())) {
        faqs.push({ question, answer });
        localStorage.setItem("faqDataset", JSON.stringify(faqs));
        console.log(`Added to FAQs: ${question} -> ${answer}`);
    }
}

// Add Message to Chat
function addMessage(message, className) {
    const chatMessages = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Enable Sending with Enter Key
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});
// function isMobileDevice() {
//     return /iPhone|iPad|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent);
// }

// if (isMobileDevice()) {
//     // Apply mobile-specific styles or UI changes
//     document.body.classList.add('mobile-ui');
// } else {
//     // Apply desktop-specific styles
//     document.body.classList.add('desktop-ui');
// }

// if (isMobileDevice()) {
//     document.querySelector('.chat-container').innerHTML = `
//         <div class="mobile-chat-header">Mobile Chatbot</div>
//         <div class="mobile-chat-messages">
//             <!-- Add Mobile-Specific Chat Messages -->
//         </div>
//         <div class="mobile-chat-input">
//             <input type="text" placeholder="Type here...">
//             <button>Send</button>
//         </div>
//     `;
// }



     // Function to toggle the 'active' class for the navbar
     function toggleNavbar() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }




    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".navbar");
        const hamburger = document.querySelector(".hamburger");
        const closeBtn = document.querySelector(".close-btn");
    
        // Toggle Navbar on Hamburger Click
        hamburger.addEventListener("click", function () {
            navbar.classList.add("active");
        });
    
        // Hide Navbar on Close Button Click
        closeBtn.addEventListener("click", function () {
            navbar.classList.remove("active");
        });
    });
    