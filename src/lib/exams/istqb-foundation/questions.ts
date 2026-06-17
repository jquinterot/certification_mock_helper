import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Chapter 1: Fundamentals of Testing (4 questions)
  {
    id: 1,
    domain: 'Chapter 1: Fundamentals of Testing',
    question: 'Which of the following is one of the seven principles of testing?',
    options: [
      'Testing should be performed after development is complete',
      'Exhaustive testing is possible for small software systems',
      'Testing is context dependent',
      'Defects are always caused by coding errors',
    ],
    correctAnswer: 2,
    explanation:
      'Testing is context dependent is one of the seven testing principles. Testing is done differently in different contexts (e.g., safety-critical software vs. commercial software).',
  },
  {
    id: 2,
    domain: 'Chapter 1: Fundamentals of Testing',
    question:
      'According to the seven testing principles, which statement is correct?',
    options: [
      'Beware of the pesticide paradox: running the same tests repeatedly will find new defects',
      'Early testing saves time and money',
      'Defect clustering implies that defects are evenly distributed throughout the software',
      'Absence-of-errors fallacy means that finding and fixing many defects guarantees a successful product',
    ],
    correctAnswer: 1,
    explanation:
      'Early testing saves time and money is one of the seven testing principles. Testing should start as early as possible in the software development life cycle.',
  },
  {
    id: 3,
    domain: 'Chapter 1: Fundamentals of Testing',
    question:
      'What is the primary goal of testing in software development?',
    options: [
      'To prove that the software is completely free of defects',
      'To provide information about the quality of the software and reduce the risk of failures in operation',
      'To replace the need for quality assurance processes',
      'To ensure that all developers follow coding standards',
    ],
    correctAnswer: 1,
    explanation:
      'Testing provides information about the quality of the software and reduces the risk of failures occurring during operation. It cannot prove that software is completely free of defects.',
  },
  {
    id: 4,
    domain: 'Chapter 1: Fundamentals of Testing',
    question: 'Which of the following best describes the "defect clustering" principle?',
    options: [
      'Defects are usually evenly distributed throughout the software',
      'A small number of modules usually contains most of the defects',
      'Defects are always found in the newest code',
      'Defects cluster only in the user interface',
    ],
    correctAnswer: 1,
    explanation:
      'Defect clustering (also known as the Pareto principle) states that a small number of modules usually contains most of the defects discovered during pre-release testing or shows the most operational failures.',
  },

  // Chapter 2: Testing Throughout the SDLC (6 questions)
  {
    id: 5,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question:
      'In the V-model, which test level corresponds to the requirements specification phase?',
    options: [
      'Unit testing',
      'Integration testing',
      'System testing',
      'Acceptance testing',
    ],
    correctAnswer: 3,
    explanation:
      'In the V-model, acceptance testing corresponds to the requirements specification phase. Each development phase has a corresponding testing phase on the opposite side of the V.',
  },
  {
    id: 6,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question:
      'Which test level is typically performed by the developers themselves?',
    options: [
      'System testing',
      'Acceptance testing',
      'Unit testing',
      'Regression testing',
    ],
    correctAnswer: 2,
    explanation:
      'Unit testing is typically performed by the developers themselves. It tests the smallest testable components of the software.',
  },
  {
    id: 7,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question: 'What is the main focus of integration testing?',
    options: [
      'Testing individual functions in isolation',
      'Testing interfaces and interactions between components or systems',
      'Testing the complete system against user requirements',
      'Testing the system under heavy load conditions',
    ],
    correctAnswer: 1,
    explanation:
      'Integration testing focuses on interfaces and interactions between integrated components or systems. It verifies that components work together correctly.',
  },
  {
    id: 8,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question:
      'Which of the following best describes acceptance testing?',
    options: [
      'Testing performed by developers to verify individual code units',
      'Testing performed by end users or customers to validate the system meets their needs',
      'Testing performed to verify system performance under load',
      'Testing performed to check if the system is compatible with other systems',
    ],
    correctAnswer: 1,
    explanation:
      'Acceptance testing is typically performed by end users or customers to validate that the system meets their business needs and requirements.',
  },
  {
    id: 9,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question: 'Which of the following is a type of non-functional testing?',
    options: [
      'Usability testing',
      'Component testing',
      'Integration testing',
      'System testing',
    ],
    correctAnswer: 0,
    explanation:
      'Usability testing is a type of non-functional testing. Non-functional testing focuses on characteristics such as performance, usability, reliability, and security.',
  },
  {
    id: 10,
    domain: 'Chapter 2: Testing Throughout the SDLC',
    question:
      'What is the main purpose of maintenance testing?',
    options: [
      'To verify that the software still meets user requirements after changes',
      'To test the software during the initial development phase',
      'To replace the need for regression testing',
      'To verify that the development team is following coding standards',
    ],
    correctAnswer: 0,
    explanation:
      'Maintenance testing verifies that the software still meets requirements after changes (corrections, enhancements, or environment changes) and includes regression testing.',
  },

  // Chapter 3: Static Testing (5 questions)
  {
    id: 11,
    domain: 'Chapter 3: Static Testing',
    question: 'Which of the following is a static testing technique?',
    options: [
      'Unit testing',
      'Integration testing',
      'Code review',
      'System testing',
    ],
    correctAnswer: 2,
    explanation:
      'Code review is a static testing technique. Static testing involves examining work products without executing the code.',
  },
  {
    id: 12,
    domain: 'Chapter 3: Static Testing',
    question:
      'What is the main difference between static analysis and dynamic testing?',
    options: [
      'Static analysis requires the code to be executed, while dynamic testing does not',
      'Static analysis does not require the code to be executed, while dynamic testing does',
      'Static analysis is only performed by developers, while dynamic testing is only performed by testers',
      'Static analysis finds only syntax errors, while dynamic testing finds only logic errors',
    ],
    correctAnswer: 1,
    explanation:
      'Static analysis examines code without executing it, while dynamic testing requires the code to be executed. Both can find various types of defects.',
  },
  {
    id: 13,
    domain: 'Chapter 3: Static Testing',
    question: 'Which of the following is a typical benefit of static testing?',
    options: [
      'It requires specialized hardware to execute the code',
      'It can find defects early in the development cycle',
      'It can only be performed after the code is complete',
      'It cannot find defects in requirements documents',
    ],
    correctAnswer: 1,
    explanation:
      'Static testing can find defects early in the development cycle, often before the code is executed. This makes defects cheaper and easier to fix.',
  },
  {
    id: 14,
    domain: 'Chapter 3: Static Testing',
    question:
      'What is a formal review characterized by?',
    options: [
      'No documentation is required',
      'Individual preparation, defined roles, and documented results',
      'Only the author is present',
      'It is always performed by automated tools',
    ],
    correctAnswer: 1,
    explanation:
      'Formal reviews are characterized by individual preparation, defined roles (e.g., moderator, author, reviewer), and documented results.',
  },
  {
    id: 15,
    domain: 'Chapter 3: Static Testing',
    question: 'A team is planning a formal review of a requirements specification document. They need a structured approach with defined roles (moderator, author, reviewer) and a documented process. Which review type is MOST appropriate?',
    options: [
      'Informal review',
      'Walkthrough',
      'Technical review',
      'Inspection',
    ],
    correctAnswer: 3,
    explanation:
      'Inspection is the most formal review type with defined roles (moderator, author, scribe, reviewers), structured process, and metrics collection. Technical reviews are less formal, walkthroughs are informal presentations, and informal reviews lack formal structure. Inspection is the best choice when you need a rigorous, documented review process.',
  },

  // Chapter 4: Test Techniques (11 questions)
  {
    id: 16,
    domain: 'Chapter 4: Test Techniques',
    question: 'What is the main purpose of equivalence partitioning?',
    options: [
      'To test all possible input values',
      'To divide input data into partitions that are expected to behave the same way',
      'To test only the boundary values',
      'To test all possible paths through the code',
    ],
    correctAnswer: 1,
    explanation:
      'Equivalence partitioning divides input data into partitions (equivalence classes) that are expected to behave the same way. Testing one value from each partition is sufficient.',
  },
  {
    id: 17,
    domain: 'Chapter 4: Test Techniques',
    question: 'In boundary value analysis, which values are typically tested for a range of 1 to 100?',
    options: [
      'Only the minimum value (1)',
      'Only the maximum value (100)',
      'The minimum, maximum, and values just inside and outside the boundaries (0, 1, 100, 101)',
      'All values from 1 to 100',
    ],
    correctAnswer: 2,
    explanation:
      'Boundary value analysis tests values at the boundaries: the minimum, maximum, and values just inside and outside the boundaries (0, 1, 100, 101 for a range of 1 to 100).',
  },
  {
    id: 18,
    domain: 'Chapter 4: Test Techniques',
    question: 'What is a decision table used for?',
    options: [
      'To test the performance of the system',
      'To test combinations of inputs and conditions that affect processing',
      'To test the user interface layout',
      'To test the database schema',
    ],
    correctAnswer: 1,
    explanation:
      'Decision tables are used to test combinations of inputs and conditions that affect processing. They are useful for complex business rules.',
  },
  {
    id: 19,
    domain: 'Chapter 4: Test Techniques',
    question: 'Which test technique is based on the tester\'s experience and intuition?',
    options: [
      'Equivalence partitioning',
      'Boundary value analysis',
      'Error guessing',
      'Decision table testing',
    ],
    correctAnswer: 2,
    explanation:
      'Error guessing is an experience-based technique where the tester uses their experience and intuition to guess where defects might occur.',
  },
  {
    id: 20,
    domain: 'Chapter 4: Test Techniques',
    question: 'What is the main advantage of state transition testing?',
    options: [
      'It is only applicable to web applications',
      'It can test systems that behave differently depending on previous conditions or history',
      'It requires no documentation of the system under test',
      'It can only test static systems',
    ],
    correctAnswer: 1,
    explanation:
      'State transition testing is useful for testing systems that behave differently depending on previous conditions or history (e.g., finite state machines).',
  },
  {
    id: 21,
    domain: 'Chapter 4: Test Techniques',
    question: 'What does statement coverage measure?',
    options: [
      'The percentage of executable statements that have been exercised by the test suite',
      'The percentage of decision outcomes that have been exercised by the test suite',
      'The percentage of requirements that have been tested',
      'The percentage of test cases that have passed',
    ],
    correctAnswer: 0,
    explanation:
      'Statement coverage measures the percentage of executable statements in the source code that have been exercised by the test suite.',
  },
  {
    id: 22,
    domain: 'Chapter 4: Test Techniques',
    question: 'What is the difference between statement coverage and branch coverage?',
    options: [
      'Statement coverage measures executable statements, while branch coverage measures decision outcomes (true and false branches)',
      'Statement coverage is always 100%, while branch coverage is never 100%',
      'Statement coverage is only used for black-box testing, while branch coverage is only used for white-box testing',
      'There is no difference between them',
    ],
    correctAnswer: 0,
    explanation:
      'Statement coverage measures the percentage of executable statements exercised, while branch coverage measures the percentage of decision outcomes (both true and false branches) exercised.',
  },
  {
    id: 23,
    domain: 'Chapter 4: Test Techniques',
    question: 'Which test technique is most suitable for testing a login feature with multiple valid and invalid inputs?',
    options: [
      'Performance testing',
      'Equivalence partitioning and boundary value analysis',
      'Usability testing',
      'Security testing',
    ],
    correctAnswer: 1,
    explanation:
      'Equivalence partitioning and boundary value analysis are black-box techniques suitable for testing inputs with multiple valid and invalid values.',
  },
  {
    id: 24,
    domain: 'Chapter 4: Test Techniques',
    question: 'What is exploratory testing?',
    options: [
      'A formal test technique with predefined test cases',
      'An informal test technique where the tester actively designs and executes tests simultaneously',
      'A technique that only tests the user interface',
      'A technique that requires no test documentation',
    ],
    correctAnswer: 1,
    explanation:
      'Exploratory testing is an experience-based technique where the tester actively designs and executes tests simultaneously, learning about the system as they test.',
  },
  {
    id: 25,
    domain: 'Chapter 4: Test Techniques',
    question: 'Which test technique is typically used to test the flow of a use case?',
    options: [
      'Use case testing',
      'Statement testing',
      'Branch testing',
      'Static analysis',
    ],
    correctAnswer: 0,
    explanation:
      'Use case testing is used to test the flow of a use case, including the main success scenario and alternative paths.',
  },
  {
    id: 26,
    domain: 'Chapter 4: Test Techniques',
    question:
      'Which of the following is a white-box test technique?',
    options: [
      'Equivalence partitioning',
      'Boundary value analysis',
      'Statement coverage',
      'Decision table testing',
    ],
    correctAnswer: 2,
    explanation:
      'Statement coverage is a white-box (structure-based) test technique. The other options are black-box (specification-based) techniques.',
  },

  // Chapter 5: Test Management (9 questions)
  {
    id: 27,
    domain: 'Chapter 5: Test Management',
    question: 'What is the main purpose of a test plan?',
    options: [
      'To document the test cases for a specific feature',
      'To describe the scope, approach, resources, and schedule of testing activities',
      'To record the defects found during testing',
      'To provide a detailed report of test results',
    ],
    correctAnswer: 1,
    explanation:
      'A test plan describes the scope, approach, resources, and schedule of testing activities. It is a high-level document that guides the testing process.',
  },
  {
    id: 28,
    domain: 'Chapter 5: Test Management',
    question: 'Which of the following is a risk-based testing approach?',
    options: [
      'Testing all features equally without prioritization',
      'Prioritizing testing based on the likelihood and impact of potential failures',
      'Testing only the features that are easiest to test',
      'Testing only the features that have the most test cases',
    ],
    correctAnswer: 1,
    explanation:
      'Risk-based testing prioritizes testing based on the likelihood and impact of potential failures. High-risk areas are tested first or more thoroughly.',
  },
  {
    id: 29,
    domain: 'Chapter 5: Test Management',
    question: 'What does the test estimation process typically involve?',
    options: [
      'Guessing the time needed without any analysis',
      'Using historical data, expert judgment, or estimation techniques to predict the effort required for testing',
      'Only counting the number of test cases',
      'Using only the number of developers to estimate testing effort',
    ],
    correctAnswer: 1,
    explanation:
      'Test estimation involves using historical data, expert judgment, or estimation techniques (e.g., metrics-based, expert-based) to predict the effort required for testing.',
  },
  {
    id: 30,
    domain: 'Chapter 5: Test Management',
    question: 'What is the purpose of test monitoring?',
    options: [
      'To write test cases for new features',
      'To check the status of testing activities and compare actual progress against the plan',
      'To fix defects found during testing',
      'To design the test environment',
    ],
    correctAnswer: 1,
    explanation:
      'Test monitoring involves checking the status of testing activities and comparing actual progress against the plan. It provides information for test control.',
  },
  {
    id: 31,
    domain: 'Chapter 5: Test Management',
    question: 'Which of the following is a test exit criterion?',
    options: [
      'The test plan has been approved',
      'All high-priority test cases have been executed and the defect density is below a defined threshold',
      'The test environment has been set up',
      'All test cases have been written',
    ],
    correctAnswer: 1,
    explanation:
      'Test exit criteria define when testing can be considered complete. An example is that all high-priority test cases have been executed and the defect density is below a defined threshold.',
  },
  {
    id: 32,
    domain: 'Chapter 5: Test Management',
    question: 'What is the main purpose of test control?',
    options: [
      'To design test cases',
      'To take corrective actions when monitoring shows deviations from the plan',
      'To execute test cases manually',
      'To write test scripts',
    ],
    correctAnswer: 1,
    explanation:
      'Test control involves taking corrective actions when monitoring shows deviations from the plan. For example, reprioritizing tests or adjusting resources.',
  },
  {
    id: 33,
    domain: 'Chapter 5: Test Management',
    question: 'Which of the following is a typical test deliverable?',
    options: [
      'Source code',
      'Test plan and test cases',
      'User manual',
      'Design document',
    ],
    correctAnswer: 1,
    explanation:
      'Test deliverables include documents such as the test plan, test design specification, test cases, and test summary report.',
  },
  {
    id: 34,
    domain: 'Chapter 5: Test Management',
    question: 'What is a test policy?',
    options: [
      'A detailed document describing how to test a specific feature',
      'A high-level document describing the principles, approach, and major objectives of testing for the organization',
      'A document listing all test cases for a project',
      'A document describing the coding standards for developers',
    ],
    correctAnswer: 1,
    explanation:
      'A test policy is a high-level document describing the principles, approach, and major objectives of testing for the organization.',
  },
  {
    id: 35,
    domain: 'Chapter 5: Test Management',
    question: 'Which of the following is a test independence benefit?',
    options: [
      'Testers are always more familiar with the code than developers',
      'Independent testers can recognize different kinds of failures and defects compared to developers',
      'Independent testers do not need to follow the test plan',
      'Independent testers always work faster than developers',
    ],
    correctAnswer: 1,
    explanation:
      'Independent testers can recognize different kinds of failures and defects compared to developers because they have a different perspective and are less likely to make the same assumptions.',
  },

  // Chapter 6: Test Tools and Automation (6 questions)
  {
    id: 36,
    domain: 'Chapter 6: Test Tools and Automation',
    question: 'Which of the following is a test management tool?',
    options: [
      'A tool that automatically generates code',
      'A tool that manages test cases, test execution, and defect tracking',
      'A tool that only performs load testing',
      'A tool that only checks syntax errors',
    ],
    correctAnswer: 1,
    explanation:
      'Test management tools manage test cases, test execution, and defect tracking. They help organize and control the testing process.',
  },
  {
    id: 37,
    domain: 'Chapter 6: Test Tools and Automation',
    question: 'What is a potential risk of test automation?',
    options: [
      'It always reduces the cost of testing',
      'It requires significant initial investment and maintenance effort',
      'It eliminates the need for manual testing entirely',
      'It makes testing faster in all situations',
    ],
    correctAnswer: 1,
    explanation:
      'Test automation requires significant initial investment and maintenance effort. Automated tests need to be maintained when the application changes.',
  },
  {
    id: 38,
    domain: 'Chapter 6: Test Tools and Automation',
    question: 'Which of the following is a benefit of using a static analysis tool?',
    options: [
      'It can find defects without executing the code',
      'It can only be used after the code is deployed',
      'It requires user interaction to test the user interface',
      'It can only find syntax errors',
    ],
    correctAnswer: 0,
    explanation:
      'Static analysis tools can find defects without executing the code. They analyze source code, bytecode, or binary code for potential defects.',
  },
  {
    id: 39,
    domain: 'Chapter 6: Test Tools and Automation',
    question: 'What is the main purpose of a performance testing tool?',
    options: [
      'To check the spelling of the user interface',
      'To measure the performance of the system under various conditions',
      'To automatically fix code defects',
      'To generate test cases automatically',
    ],
    correctAnswer: 1,
    explanation:
      'Performance testing tools measure the performance of the system under various conditions, such as load, stress, or spike conditions.',
  },
  {
    id: 40,
    domain: 'Chapter 6: Test Tools and Automation',
    question: 'Which of the following is a key consideration when selecting a test tool?',
    options: [
      'The tool should be the most expensive option available',
      'The tool should support the organization\'s testing objectives and be compatible with the existing environment',
      'The tool should only be selected based on its brand name',
      'The tool should require no training to use',
    ],
    correctAnswer: 1,
    explanation:
      'When selecting a test tool, key considerations include whether it supports the organization\'s testing objectives and whether it is compatible with the existing environment and processes.',
  },
];

