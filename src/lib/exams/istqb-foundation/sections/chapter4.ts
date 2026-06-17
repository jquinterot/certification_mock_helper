import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 4: Test Techniques",
    question: "What is the main purpose of equivalence partitioning?",
    options: [
      "To test all possible input values",
      "To divide input data into partitions that are expected to behave the same way",
      "To test only the boundary values",
      "To test all possible paths through the code"
    ],
    correctAnswer: 1,
    explanation: "Equivalence partitioning divides input data into partitions (equivalence classes) that are expected to behave the same way. Testing one value from each partition is sufficient."
  },
  {
    id: 2,
    domain: "Chapter 4: Test Techniques",
    question: "In boundary value analysis, which values are typically tested for a range of 1 to 100?",
    options: [
      "Only the minimum value (1)",
      "Only the maximum value (100)",
      "The minimum, maximum, and values just inside and outside the boundaries (0, 1, 100, 101)",
      "All values from 1 to 100"
    ],
    correctAnswer: 2,
    explanation: "Boundary value analysis tests values at the boundaries: the minimum, maximum, and values just inside and outside the boundaries (0, 1, 100, 101 for a range of 1 to 100)."
  },
  {
    id: 3,
    domain: "Chapter 4: Test Techniques",
    question: "What is a decision table used for?",
    options: [
      "To test the performance of the system",
      "To test combinations of inputs and conditions that affect processing",
      "To test the user interface layout",
      "To test the database schema"
    ],
    correctAnswer: 1,
    explanation: "Decision tables are used to test combinations of inputs and conditions that affect processing. They are useful for complex business rules."
  },
  {
    id: 4,
    domain: "Chapter 4: Test Techniques",
    question: "Which test technique is based on the tester's experience and intuition?",
    options: [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Error guessing",
      "Decision table testing"
    ],
    correctAnswer: 2,
    explanation: "Error guessing is an experience-based technique where the tester uses their experience and intuition to guess where defects might occur."
  },
  {
    id: 5,
    domain: "Chapter 4: Test Techniques",
    question: "What is the main advantage of state transition testing?",
    options: [
      "It is only applicable to web applications",
      "It can test systems that behave differently depending on previous conditions or history",
      "It requires no documentation of the system under test",
      "It can only test static systems"
    ],
    correctAnswer: 1,
    explanation: "State transition testing is useful for testing systems that behave differently depending on previous conditions or history (e.g., finite state machines)."
  },
  {
    id: 6,
    domain: "Chapter 4: Test Techniques",
    question: "What does statement coverage measure?",
    options: [
      "The percentage of executable statements that have been exercised by the test suite",
      "The percentage of decision outcomes that have been exercised by the test suite",
      "The percentage of requirements that have been tested",
      "The percentage of test cases that have passed"
    ],
    correctAnswer: 0,
    explanation: "Statement coverage measures the percentage of executable statements in the source code that have been exercised by the test suite."
  },
  {
    id: 7,
    domain: "Chapter 4: Test Techniques",
    question: "What is the difference between statement coverage and branch coverage?",
    options: [
      "Statement coverage measures executable statements, while branch coverage measures decision outcomes (true and false branches)",
      "Statement coverage is always 100%, while branch coverage is never 100%",
      "Statement coverage is only used for black-box testing, while branch coverage is only used for white-box testing",
      "There is no difference between them"
    ],
    correctAnswer: 0,
    explanation: "Statement coverage measures the percentage of executable statements exercised, while branch coverage measures the percentage of decision outcomes (both true and false branches) exercised."
  },
  {
    id: 8,
    domain: "Chapter 4: Test Techniques",
    question: "Which test technique is most suitable for testing a login feature with multiple valid and invalid inputs?",
    options: [
      "Performance testing",
      "Equivalence partitioning and boundary value analysis",
      "Usability testing",
      "Security testing"
    ],
    correctAnswer: 1,
    explanation: "Equivalence partitioning and boundary value analysis are black-box techniques suitable for testing inputs with multiple valid and invalid values."
  },
  {
    id: 9,
    domain: "Chapter 4: Test Techniques",
    question: "What is exploratory testing?",
    options: [
      "A formal test technique with predefined test cases",
      "An informal test technique where the tester actively designs and executes tests simultaneously",
      "A technique that only tests the user interface",
      "A technique that requires no test documentation"
    ],
    correctAnswer: 1,
    explanation: "Exploratory testing is an experience-based technique where the tester actively designs and executes tests simultaneously, learning about the system as they test."
  },
  {
    id: 10,
    domain: "Chapter 4: Test Techniques",
    question: "Which test technique is typically used to test the flow of a use case?",
    options: [
      "Use case testing",
      "Statement testing",
      "Branch testing",
      "Static analysis"
    ],
    correctAnswer: 0,
    explanation: "Use case testing is used to test the flow of a use case, including the main success scenario and alternative paths."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 4: Test Techniques",
    question: "In equivalence partitioning, if a valid input range is 1 to 100, which of the following is an invalid equivalence class?",
    options: [
      "Values between 1 and 100 inclusive",
      "Values less than 1",
      "Values between 1 and 50",
      "Values between 51 and 100"
    ],
    correctAnswer: 1,
    explanation: "In equivalence partitioning, valid equivalence classes are ranges of valid inputs (1 to 100), while invalid equivalence classes are ranges outside the valid input (values less than 1 and values greater than 100). Values between 1 and 50 or 51 and 100 are subsets of the valid class, not distinct equivalence classes."
  },
  {
    id: 2,
    domain: "Chapter 4: Test Techniques",
    question: "Using 3-value boundary value analysis (BVA) for a valid range of 10 to 50, which test values should be selected?",
    options: [
      "9, 10, 50, 51",
      "10, 50",
      "9, 10, 11, 49, 50, 51",
      "8, 9, 10, 50, 51, 52"
    ],
    correctAnswer: 2,
    explanation: "3-value BVA includes the boundary value itself, the value just below the boundary, and the value just above the boundary. For a range of 10 to 50, the test values are 9, 10, 11 (lower boundary) and 49, 50, 51 (upper boundary). 2-value BVA would only include 9, 10, 50, 51."
  },
  {
    id: 3,
    domain: "Chapter 4: Test Techniques",
    question: "A decision table has 3 conditions. How many rules are needed for full coverage if all conditions are binary?",
    options: [
      "3",
      "6",
      "8",
      "9"
    ],
    correctAnswer: 2,
    explanation: "For a decision table with 3 binary conditions, the number of rules is 2^3 = 8. Each condition can be true or false, so the total number of combinations is 2 raised to the power of the number of conditions. For n binary conditions, there are 2^n rules."
  },
  {
    id: 4,
    domain: "Chapter 4: Test Techniques",
    question: "In state transition testing, which of the following describes an event that causes a change from one state to another?",
    options: [
      "A state",
      "A transition",
      "An event",
      "An action"
    ],
    correctAnswer: 2,
    explanation: "An event is a trigger that causes a transition from one state to another. A state is a condition of the system, a transition is the change from one state to another, and an action is the output or behavior that occurs during or after a transition."
  },
  {
    id: 5,
    domain: "Chapter 4: Test Techniques",
    question: "In use case testing, which element describes the sequence of interactions between an actor and the system?",
    options: [
      "The actor",
      "The scenario",
      "The precondition",
      "The postcondition"
    ],
    correctAnswer: 1,
    explanation: "In use case testing, a scenario describes the sequence of interactions between an actor and the system. An actor is the user or external system interacting with the system. Preconditions and postconditions describe the state before and after the use case."
  },
  {
    id: 6,
    domain: "Chapter 4: Test Techniques",
    question: "A tester uses their experience to guess that a form might fail when submitting with special characters in the name field. Which test technique is being used?",
    options: [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Error guessing",
      "Decision table testing"
    ],
    correctAnswer: 2,
    explanation: "Error guessing is a test technique where the tester uses their experience and intuition to guess where defects might occur. It relies on common errors and past experience. Equivalence partitioning and BVA are systematic techniques, and decision table testing is used for complex business rules."
  },
  {
    id: 7,
    domain: "Chapter 4: Test Techniques",
    question: "Which statement BEST describes exploratory testing?",
    options: [
      "Testing without any documentation or test cases",
      "Simultaneous learning, test design, and test execution",
      "Testing that is only performed after all test cases are written",
      "Testing that follows a strict predefined script without deviation"
    ],
    correctAnswer: 1,
    explanation: "Exploratory testing is an approach where the tester simultaneously learns about the system, designs tests, and executes them. It is not testing without documentation (test charters are often used), nor is it strictly predefined or performed only after test cases are written."
  },
  {
    id: 8,
    domain: "Chapter 4: Test Techniques",
    question: "If an input field accepts values from 0 to 100, which values should be tested using 2-value boundary value analysis?",
    options: [
      "0, 50, 100",
      "-1, 0, 1, 99, 100, 101",
      "-1, 0, 100, 101",
      "0, 100"
    ],
    correctAnswer: 2,
    explanation: "2-value boundary value analysis tests the boundary value and the value just outside the boundary. For a range of 0 to 100, the test values are -1, 0, 100, 101. The value just below the lower boundary (-1), the lower boundary (0), the upper boundary (100), and the value just above the upper boundary (101)."
  },
  {
    id: 9,
    domain: "Chapter 4: Test Techniques",
    question: "In a decision table, what does a rule represent?",
    options: [
      "A single condition",
      "A single action",
      "A combination of conditions that lead to a set of actions",
      "The number of conditions in the table"
    ],
    correctAnswer: 2,
    explanation: "In a decision table, a rule represents a specific combination of condition values (true/false) that leads to a set of actions. Each rule is a column that defines what actions should be taken when the conditions match that specific combination."
  },
  {
    id: 10,
    domain: "Chapter 4: Test Techniques",
    question: "Which black-box test technique is most suitable for testing a system with complex business rules involving multiple conditions?",
    options: [
      "Equivalence partitioning",
      "Boundary value analysis",
      "Decision table testing",
      "State transition testing"
    ],
    correctAnswer: 2,
    explanation: "Decision table testing is most suitable for testing complex business rules involving multiple conditions. It systematically captures all combinations of conditions and their corresponding actions. Equivalence partitioning and BVA are better for input ranges, and state transition testing is for systems with distinct states."
  }
];
