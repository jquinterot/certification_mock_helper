import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // K1 - Remember (2 questions)
  {
    id: 1,
    domain: "Chapter 4: Test Techniques",
    question: "Which of the following is a black-box test technique?",
    options: [
      "Statement testing",
      "Decision table testing",
      "Branch testing",
      "Path testing"
    ],
    correctAnswer: 1,
    explanation: "Decision table testing is a black-box technique that tests combinations of conditions. Statement testing, branch testing, and path testing are all white-box techniques that require knowledge of the code."
  },
  {
    id: 2,
    domain: "Chapter 4: Test Techniques",
    question: "Which of the following experience-based test techniques relies on the tester's intuition and experience to identify potential defects?",
    options: [
      "Use case testing",
      "Equivalence partitioning",
      "Error guessing",
      "State transition testing"
    ],
    correctAnswer: 2,
    explanation: "Error guessing is an experience-based technique that relies on the tester's intuition and experience. Use case testing and state transition testing are specification-based, and equivalence partitioning is a structured black-box technique."
  },

  // K2 - Understand (4 questions)
  {
    id: 3,
    domain: "Chapter 4: Test Techniques",
    question: "What is the main advantage of state transition testing?",
    options: [
      "It tests all possible combinations of inputs",
      "It can test systems that behave differently depending on previous states or events",
      "It eliminates the need for requirements documentation",
      "It provides 100% statement coverage"
    ],
    correctAnswer: 1,
    explanation: "State transition testing is useful for systems that behave differently depending on previous states or events. It models the system as a set of states and transitions between them. It does not test all input combinations (that's decision table testing), nor does it guarantee coverage metrics."
  },
  {
    id: 4,
    domain: "Chapter 4: Test Techniques",
    question: "Which statement BEST describes the difference between statement coverage and decision coverage?",
    options: [
      "They are identical measures of test thoroughness",
      "100% decision coverage guarantees 100% statement coverage, but not vice versa",
      "100% statement coverage guarantees 100% decision coverage, but not vice versa",
      "Statement coverage is a black-box technique, while decision coverage is a white-box technique"
    ],
    correctAnswer: 2,
    explanation: "Statement coverage exercises each statement at least once, while decision coverage exercises each decision outcome (both true and false). 100% statement coverage does NOT guarantee 100% decision coverage because a decision with only one outcome tested still has its statement covered. But 100% decision coverage does guarantee 100% statement coverage."
  },
  {
    id: 5,
    domain: "Chapter 4: Test Techniques",
    question: "Which of the following BEST describes exploratory testing?",
    options: [
      "Testing that is performed without any documentation or planning",
      "Simultaneous learning, test design, and test execution guided by a test charter",
      "Testing that is always performed after all scripted tests are completed",
      "A technique that replaces all other test techniques"
    ],
    correctAnswer: 3,
    explanation: "Exploratory testing is simultaneous learning, test design, and test execution, often guided by a test charter (not unstructured). It does not replace other techniques but complements them. It is experience-based and can be performed at any time, not just after scripted tests."
  },
  {
    id: 6,
    domain: "Chapter 4: Test Techniques",
    question: "In a state transition diagram, what does a transition represent?",
    options: [
      "A condition of the system at a particular point in time",
      "An action performed by the system when entering a state",
      "A change from one state to another triggered by an event",
      "A test case that covers all possible states"
    ],
    correctAnswer: 0,
    explanation: "In a state transition model, a transition represents a change from one state to another, which is triggered by an event. A state represents a condition of the system, and an action is the output produced during or after a transition. A transition itself is not a test case."
  },

  // K3 - Apply (3 questions - scenario/exercise based)
  {
    id: 7,
    domain: "Chapter 4: Test Techniques",
    question: "A bank's loan approval system accepts loan amounts from $10,000 to $500,000. Using equivalence partitioning, which of the following sets of test values covers all equivalence classes (valid and invalid)?",
    options: [
      "$5,000; $50,000; $600,000",
      "$10,000; $50,000; $500,000",
      "$5,000; $50,000; $600,000; $10,000; $500,000",
      "$9,999; $10,000; $500,000; $500,001"
    ],
    correctAnswer: 3,
    explanation: "For the range $10,000 to $500,000, there are three equivalence classes: below minimum (invalid), within range (valid), and above maximum (invalid). The minimum set to cover all three classes includes one value from each partition: $9,999 (below), any value in range, and $500,001 (above). Option D includes values from all three partitions. Option A includes valid values from valid and two invalid partitions but misses the boundary precision. Option B only covers the valid partition."
  },
  {
    id: 8,
    domain: "Chapter 4: Test Techniques",
    question: "An online store offers a discount based on order value: 0% for orders under $50, 5% for $50-$99, 10% for $100-$199, 15% for $200 and above. Using 2-value BVA on each boundary, which set of test values covers ALL boundaries?",
    options: [
      "$49, $50, $99, $100, $199, $200",
      "$49, $50, $51, $99, $100, $101, $199, $200, $201",
      "$0, $50, $100, $200",
      "$48, $50, $98, $100, $198, $200, $202"
    ],
    correctAnswer: 0,
    explanation: "The boundaries are at $50, $100, and $200. Using 2-value BVA, we test each boundary value and the value just outside: $49/$50, $99/$100, and $199/$200. Option B uses 3-value BVA which is more thorough but not what was asked. Option C misses boundary-adjacent values. Option D uses incorrect offset values."
  },
  {
    id: 9,
    domain: "Chapter 4: Test Techniques",
    question: "A system allows users to rate a product from 1 to 5 stars. Users can also choose not to rate (0 stars). The valid inputs are 0 (no rating) and 1-5 (ratings). Using equivalence partitioning, how many valid and invalid equivalence classes are there?",
    options: [
      "1 valid class, 1 invalid class",
      "2 valid classes, 2 invalid classes",
      "6 valid classes, 2 invalid classes",
      "2 valid classes, 1 invalid class"
    ],
    correctAnswer: 1,
    explanation: "The valid partitions are: {0} (no rating) and {1,2,3,4,5} (valid ratings) = 2 valid classes. The invalid partitions are: values less than 0 (e.g., -1) and values greater than 5 (e.g., 6) = 2 invalid classes. So there are 2 valid and 2 invalid equivalence classes."
  },

  // K4 - Analyze (1 question)
  {
    id: 10,
    domain: "Chapter 4: Test Techniques",
    question: "A vending machine delivers a drink when the correct amount is inserted. It accepts coins of 10, 20, and 50 cents. A drink costs 80 cents. The machine has the following states: 'Idle', 'Coin inserted', and 'Drink dispensed'. Which of the following test sequences would cover the MOST transitions in the state transition model?",
    options: [
      "Insert 80 cents → Drink dispensed → Return to idle",
      "Insert 10 cents → Insert 20 cents → Insert 50 cents → Drink dispensed → Return to idle",
      "Insert 10 cents → Insert 20 cents → Insert 10 cents → Insert 50 cents (overpayment) → Drink dispensed → Return to idle",
      "Insert 50 cents → Cancel → Return to idle → Insert 10 cents → Insert 20 cents → Insert 50 cents → Cancel → Return to idle"
    ],
    correctAnswer: 3,
    explanation: "Option D covers the most transitions: Idle→Coin inserted (50c), Coin inserted→Idle (cancel), Idle→Coin inserted (10c), Coin inserted→Coin inserted (20c, 50c), Coin inserted→Idle (cancel). This tests the cancel transition, coin insertion at different states, and the return-to-idle transition. The other options cover fewer transitions. This question requires analyzing the state model to determine which test sequence exercises the most transitions."
  }
];

export const questions2: ExamQuestion[] = [
  // K1 - Remember (2 questions)
  {
    id: 11,
    domain: "Chapter 4: Test Techniques",
    question: "Which of the following is an experience-based test technique?",
    options: [
      "Boundary value analysis",
      "Equivalence partitioning",
      "Checklist-based testing",
      "Decision table testing"
    ],
    correctAnswer: 2,
    explanation: "Checklist-based testing is an experience-based technique. Boundary value analysis, equivalence partitioning, and decision table testing are all specification-based (black-box) techniques."
  },
  {
    id: 12,
    domain: "Chapter 4: Test Techniques",
    question: "What does 100% statement coverage mean?",
    options: [
      "Every decision outcome has been tested",
      "Every line of code has been executed at least once",
      "Every possible path through the code has been tested",
      "Every requirement has been tested"
    ],
    correctAnswer: 1,
    explanation: "100% statement coverage means that every executable statement in the code has been exercised at least once. It does not guarantee that every decision outcome has been tested (that's decision coverage), every path has been tested (that's path coverage), or every requirement has been tested (that's requirements coverage)."
  },

  // K2 - Understand (4 questions)
  {
    id: 13,
    domain: "Chapter 4: Test Techniques",
    question: "Which statement about decision table testing is CORRECT?",
    options: [
      "It can only be used when conditions have exactly two possible values",
      "It systematically tests combinations of conditions and their resulting actions",
      "It is only applicable to real-time systems",
      "It replaces the need for all other test techniques"
    ],
    correctAnswer: 1,
    explanation: "Decision table testing systematically tests combinations of conditions and their resulting actions. Conditions can have more than two values (not just binary). It is applicable to any system with complex business rules, not just real-time systems. It complements other techniques rather than replacing them."
  },
  {
    id: 14,
    domain: "Chapter 4: Test Techniques",
    question: "Why is achieving 100% decision coverage generally considered more thorough than 100% statement coverage?",
    options: [
      "Decision coverage requires fewer test cases than statement coverage",
      "100% decision coverage ensures all decision outcomes (true and false) are tested, which may not be achieved by 100% statement coverage",
      "Decision coverage is a black-box technique, while statement coverage is a white-box technique",
      "Statement coverage only works for object-oriented code"
    ],
    correctAnswer: 1,
    explanation: "100% decision coverage is more thorough because it ensures both true and false outcomes of every decision are tested. 100% statement coverage might execute every statement without testing both outcomes of a decision (e.g., an if-statement where only the true branch is tested). Decision coverage subsumes statement coverage."
  },
  {
    id: 15,
    domain: "Chapter 4: Test Techniques",
    question: "What is the purpose of a test charter in exploratory testing?",
    options: [
      "To replace all formal test cases with random testing",
      "To provide a clear mission and scope for the exploratory testing session",
      "To guarantee that all defects will be found",
      "To eliminate the need for any test documentation"
    ],
    correctAnswer: 1,
    explanation: "A test charter provides a clear mission and scope for the exploratory testing session. It defines what to test, how to test it, and what to look for. It does not replace formal test cases or guarantee all defects will be found, and it is itself a form of test documentation."
  },
  {
    id: 16,
    domain: "Chapter 4: Test Techniques",
    question: "Which of the following pairs of test techniques are BOTH white-box techniques?",
    options: [
      "Equivalence partitioning and boundary value analysis",
      "Statement testing and path testing",
      "Decision table testing and state transition testing",
      "Error guessing and exploratory testing"
    ],
    correctAnswer: 1,
    explanation: "Statement testing and path testing are both white-box techniques because they require knowledge of the internal structure of the code. Equivalence partitioning and BVA are black-box techniques. Decision table testing and state transition testing are black-box techniques. Error guessing and exploratory testing are experience-based techniques."
  },

  // K3 - Apply (3 questions - scenario/exercise based)
  {
    id: 17,
    domain: "Chapter 4: Test Techniques",
    question: "A password field requires a minimum of 8 characters and a maximum of 20 characters. Using 2-value boundary value analysis, which values should be tested?",
    options: [
      "7, 8, 20, 21",
      "8, 14, 20",
      "7, 8, 9, 19, 20, 21",
      "0, 8, 20, 21"
    ],
    correctAnswer: 0,
    explanation: "2-value BVA tests each boundary value and the value just outside. For a valid range of 8 to 20 characters: just below minimum (7), minimum (8), just within minimum (9 not needed for 2-value), just above maximum (21). Wait—2-value BVA tests the boundary and one value outside each boundary: 7, 8, 20, 21. Option C is 3-value BVA."
  },
  {
    id: 18,
    domain: "Chapter 4: Test Techniques",
    question: "A library system charges no fine for books returned within 7 days, a $1 fine for 8-14 days late, a $5 fine for 15-30 days late, and $10 for more than 30 days late. Using equivalence partitioning, which set of test values covers ALL partitions with the MINIMUM number of tests?",
    options: [
      "3 days, 10 days, 20 days, 45 days",
      "0 days, 7 days, 8 days, 14 days, 15 days, 30 days, 31 days",
      "3 days, 10 days, 20 days",
      "7 days, 8 days, 14 days, 15 days, 30 days, 31 days"
    ],
    correctAnswer: 0,
    explanation: "There are four equivalence classes: within 7 days (no fine), 8-14 days ($1 fine), 15-30 days ($5 fine), and 31+ days ($10 fine). Option A tests one value from each of the four partitions with minimum tests: 3 (within 7), 10 (8-14), 20 (15-30), 45 (31+). Option B uses boundary values but doesn't represent minimum tests. Option C misses the 31+ partition."
  },
  {
    id: 19,
    domain: "Chapter 4: Test Techniques",
    question: "Consider the following decision table for an insurance application:\n\n| Condition: Age < 25 | Y | Y | Y | Y | N | N | N | N |\n| Condition: Clean record | Y | Y | N | N | Y | Y | N | N |\n| Condition: Full coverage | Y | N | Y | N | Y | N | Y | N |\n\nHow many test cases are needed for full coverage of this decision table?",
    options: [
      "3",
      "4",
      "8",
      "6"
    ],
    correctAnswer: 2,
    explanation: "The decision table has 3 binary conditions. Full coverage requires testing all combinations: 2^3 = 8 test cases. Each condition can be true or false, and full coverage means every possible combination of conditions must be tested."
  },

  // K4 - Analyze (1 question)
  {
    id: 20,
    domain: "Chapter 4: Test Techniques",
    question: "A tester is testing an e-commerce checkout process with the following state transition model:\n\nStates: Browsing → Cart → Checkout → Payment → Confirmation\nEvents: Add to cart, Proceed to checkout, Submit payment, Continue shopping, Cancel\n\nThe tester needs to write tests that achieve high transition coverage. Which of the following statements is TRUE?",
    options: [
      "A single test that goes from Browsing to Confirmation covers all transitions",
      "Testing only the 'happy path' (Browsing→Cart→Checkout→Payment→Confirmation) achieves 100% transition coverage",
      "Testing both the happy path and the cancel transitions from each state provides better transition coverage than the happy path alone",
      "Transition coverage cannot be measured in state transition testing"
    ],
    correctAnswer: 2,
    explanation: "The happy path only covers 4 forward transitions. To achieve high transition coverage, the tester must also test 'Cancel' transitions from each state (Cart→Browsing, Checkout→Cart, Payment→Cart) and 'Continue shopping' (Cart→Browsing). These additional transitions would not be covered by the happy path alone. Option A is wrong because a single path doesn't cover cancel transitions. Option B is wrong because the happy path misses many transitions. Option D is wrong because transition coverage can be measured."
  }
];