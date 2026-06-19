import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a primary objective of testing according to the ISTQB CTFL v4.0 syllabus?",
    options: [
      "To provide information about the quality of the software and reduce the risk of failures in operation",
      "To prove that the software is completely free of defects",
      "To ensure that all developers follow coding standards",
      "To replace the need for quality assurance processes"
    ],
    correctAnswer: 0,
    explanation: "Testing provides information about the quality of the software and reduces the risk of failures occurring during operation. It cannot prove that software is completely free of defects."
  },
  {
    id: 2,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is one of the seven principles of testing?",
    options: [
      "Testing should be performed after development is complete",
      "Exhaustive testing is possible for small software systems",
      "Defects are always caused by coding errors",
      "Testing is context dependent"
    ],
    correctAnswer: 3,
    explanation: "Testing is context dependent is one of the seven testing principles. Testing is done differently in different contexts (e.g., safety-critical software vs. commercial software)."
  },
  {
    id: 3,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the main difference between testing and debugging?",
    options: [
      "Testing is performed by developers, while debugging is performed by testers",
      "Testing is a dynamic process, while debugging is a static process",
      "Testing is a process that involves finding defects by executing test objects, while debugging is a development activity that involves finding, analyzing, and fixing defects",
      "Testing is a static process, while debugging is a dynamic process"
    ],
    correctAnswer: 2,
    explanation: "Testing is a process that involves finding defects by executing test objects, and is typically performed by testers. Debugging is a development activity that involves finding, analyzing, and fixing defects, and is typically performed by developers. Both testing and debugging can involve dynamic and static aspects."
  },
  {
    id: 4,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following best describes the 'defect clustering' principle?",
    options: [
      "Defects are usually evenly distributed throughout the software",
      "A small number of modules usually contains most of the defects",
      "Defects are always found in the newest code",
      "Defects cluster only in the user interface"
    ],
    correctAnswer: 1,
    explanation: "Defect clustering (also known as the Pareto principle) states that a small number of modules usually contains most of the defects discovered during pre-release testing or shows the most operational failures."
  },
  {
    id: 5,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "According to the seven testing principles, which statement is correct?",
    options: [
      "Early testing saves time and money",
      "Beware of the pesticide paradox: running the same tests repeatedly will find new defects",
      "Defect clustering implies that defects are evenly distributed throughout the software",
      "Absence-of-errors fallacy means that finding and fixing many defects guarantees a successful product"
    ],
    correctAnswer: 0,
    explanation: "Early testing saves time and money is one of the seven testing principles. Testing should start as early as possible in the software development life cycle."
  },
  {
    id: 6,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the 'pesticide paradox' in testing?",
    options: [
      "Running the same tests repeatedly will eventually find all defects",
      "Using automated tools eliminates the need for manual testing",
      "Testing is only effective when using the latest tools",
      "If the same tests are repeated over and over, eventually the same set of test cases will no longer find any new defects"
    ],
    correctAnswer: 3,
    explanation: "The pesticide paradox states that if the same tests are repeated over and over, eventually the same set of test cases will no longer find any new defects. To overcome this, test cases need to be regularly reviewed and revised, and new and different tests need to be written."
  },
  {
    id: 7,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a test work product?",
    options: [
      "Source code",
      "User manual",
      "Test plan",
      "Design document"
    ],
    correctAnswer: 2,
    explanation: "Test work products include the test plan, test design specification, test cases, and test summary report. Source code, user manual, and design document are development work products, not test work products."
  },
  {
    id: 8,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the primary purpose of a test basis?",
    options: [
      "To document the test results",
      "To provide the source of information for test conditions and test cases",
      "To track the status of defects",
      "To define the test environment requirements"
    ],
    correctAnswer: 1,
    explanation: "The test basis is the body of knowledge used as the basis for test analysis and design. It provides the source of information for test conditions and test cases, such as requirements, user stories, and design specifications."
  },
  {
    id: 9,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the difference between an error and a defect?",
    options: [
      "An error is a human action that produces an incorrect result, while a defect is a flaw in a work product",
      "An error is a flaw in the code, while a defect is a failure in operation",
      "An error is found by testers, while a defect is found by developers",
      "There is no difference between an error and a defect"
    ],
    correctAnswer: 0,
    explanation: "An error is a human action that produces an incorrect result, while a defect (also called a bug or fault) is a flaw in a work product that can cause the work product to fail to perform its required function. A failure is the observable incorrect behavior caused by a defect."
  },
  {
    id: 10,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the 'absence-of-errors fallacy'?",
    options: [
      "Finding and fixing many defects guarantees a successful product",
      "Testing can prove the absence of defects",
      "Defects are always present in software",
      "Finding and fixing defects does not help if the system built is unusable and does not fulfill the user's needs and expectations"
    ],
    correctAnswer: 3,
    explanation: "The absence-of-errors fallacy means that finding and fixing defects does not help if the system built is unusable and does not fulfill the user's needs and expectations. Testing should not only find defects but also validate that the software meets user requirements."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is the correct sequence of test activities in the test process?",
    options: [
      "Test analysis, test planning, test design, test implementation, test execution, test completion",
      "Test planning, test design, test analysis, test implementation, test execution, test completion",
      "Test planning, test analysis, test design, test implementation, test execution, test completion",
      "Test planning, test analysis, test implementation, test design, test execution, test completion"
    ],
    correctAnswer: 2,
    explanation: "The correct sequence of test activities in the test process is: test planning, test analysis, test design, test implementation, test execution, and test completion. Each activity has specific objectives and work products."
  },
  {
    id: 2,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is a test condition?",
    options: [
      "A document that describes the test environment",
      "An item or event of a component or system that could be verified by one or more test cases",
      "A tool used to execute test cases",
      "A report that summarizes test results"
    ],
    correctAnswer: 1,
    explanation: "A test condition is an item or event of a component or system that could be verified by one or more test cases. It is derived from the test basis during test analysis."
  },
  {
    id: 3,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the purpose of traceability between the test basis and test work products?",
    options: [
      "To provide visibility into the relationship between requirements and tests, and to assess coverage",
      "To ensure that all test cases are executed",
      "To track the time spent on testing activities",
      "To document the defects found during testing"
    ],
    correctAnswer: 0,
    explanation: "Traceability between the test basis and test work products provides visibility into the relationship between requirements and tests, helps assess coverage, and identifies the impact of changes to the test basis."
  },
  {
    id: 4,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a root cause that could lead to defects and failures?",
    options: [
      "Running test cases in a regression suite",
      "Executing test cases during the test execution phase",
      "Writing test cases based on the acceptance criteria",
      "Ambiguous or incomplete requirements in the specification"
    ],
    correctAnswer: 3,
    explanation: "Ambiguous or incomplete requirements are a common root cause of defects. If requirements are unclear, developers may implement incorrect functionality, leading to defects. Running test cases, executing tests, and writing tests based on acceptance criteria are testing activities, not root causes."
  },
  {
    id: 5,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the main principle behind the 'testing is context dependent' principle?",
    options: [
      "Testing should be performed the same way for all software systems",
      "Testing should only be performed in the development environment",
      "Testing is done differently in different contexts, such as safety-critical software vs. e-commerce websites",
      "Testing is only dependent on the programming language used"
    ],
    correctAnswer: 2,
    explanation: "Testing is context dependent means that testing is done differently in different contexts. For example, safety-critical software is tested differently from an e-commerce website. The approach, techniques, and level of rigor depend on the context."
  },
  {
    id: 6,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a characteristic of the 'whole-team approach' to testing?",
    options: [
      "Only testers are responsible for quality",
      "Everyone on the team is responsible for quality, and testers collaborate with other team members",
      "Testers work in isolation from developers",
      "Testing is performed only at the end of the project"
    ],
    correctAnswer: 1,
    explanation: "In the whole-team approach, everyone on the team is responsible for quality, and testers collaborate with developers, business analysts, and other team members throughout the software development lifecycle."
  },
  {
    id: 7,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the purpose of tester independence?",
    options: [
      "To provide a different perspective and recognize different kinds of failures and defects",
      "To ensure that testers are completely isolated from the development team",
      "To allow testers to skip writing test documentation",
      "To ensure that testers have no knowledge of the system under test"
    ],
    correctAnswer: 0,
    explanation: "Tester independence provides a different perspective and allows testers to recognize different kinds of failures and defects compared to developers. However, total independence may lead to communication issues and lack of collaboration."
  },
  {
    id: 8,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is a test case?",
    options: [
      "A document that describes the overall test strategy",
      "A tool used to automate test execution",
      "A report that documents the defects found during testing",
      "A set of preconditions, inputs, actions, expected results, and postconditions developed based on test conditions"
    ],
    correctAnswer: 3,
    explanation: "A test case is a set of preconditions, inputs, actions (where applicable), expected results, and postconditions developed based on test conditions. It is used to verify a specific aspect of the software."
  },
  {
    id: 9,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which statement about testing psychology is TRUE?",
    options: [
      "Testers should focus on proving that the software works correctly",
      "Testers should focus on demonstrating that the software does not work correctly",
      "Testers should focus on showing that the software has defects, while developers should focus on building confidence that the software works",
      "Testing psychology is not relevant to the testing process"
    ],
    correctAnswer: 2,
    explanation: "Testing psychology is important because testers and developers may have different mindsets. Testers should focus on showing that the software has defects, while developers should focus on building confidence that the software works. This balance helps improve quality."
  },
  {
    id: 10,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "A developer writes code with a logic error. During testing, the tester observes that the application crashes when a specific button is clicked. What is the correct classification of these events?",
    options: [
      "The logic error is a failure, and the crash is a defect",
      "The logic error is an error, the crash is a failure, and the underlying flaw is a defect",
      "The logic error is a defect, and the crash is an error",
      "The logic error is a root cause, and the crash is a defect"
    ],
    correctAnswer: 1,
    explanation: "The logic error is a human error (mistake), the underlying flaw in the code is a defect, and the observable crash is a failure. The root cause is the reason why the error occurred, which may be due to time pressure, lack of knowledge, or unclear requirements."
  }
];
