import type { ExamQuestion } from '@/types';

export const questions2: ExamQuestion[] = [
  // Chapter 1: Fundamentals of Testing (8%) - Questions 1-3
  {
    id: 1,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a valid reason why testing is necessary?",
    options: [
      "Testing proves that the software is completely free of defects",
      "Testing identifies defects and failures, and helps evaluate work products",
      "Testing guarantees that the software will meet all user requirements",
      "Testing replaces the need for quality assurance processes"
    ],
    correctAnswer: 1,
    explanation: "Testing is necessary because it helps identify defects, failures, and root causes. It also evaluates work products such as requirements, user stories, designs, and code. Testing does not prove the absence of defects, guarantee full requirement coverage, or replace quality assurance."
  },
  {
    id: 2,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "What is the main difference between testing and debugging?",
    options: [
      "Testing is performed by developers, while debugging is performed by testers",
      "Testing is performed by testers, while debugging is performed by developers",
      "Testing is a dynamic process, while debugging is a static process",
      "Testing is a static process, while debugging is a dynamic process"
    ],
    correctAnswer: 1,
    explanation: "Testing is a process that involves finding defects by executing test objects, and is typically performed by testers. Debugging is a development activity that involves finding, analyzing, and fixing defects, and is typically performed by developers. Both testing and debugging can involve dynamic and static aspects."
  },
  {
    id: 3,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which of the following is a root cause that could lead to defects and failures?",
    options: [
      "Running test cases in a regression suite",
      "Ambiguous or incomplete requirements in the specification",
      "Executing test cases during the test execution phase",
      "Writing test cases based on the acceptance criteria"
    ],
    correctAnswer: 1,
    explanation: "Ambiguous or incomplete requirements are a common root cause of defects. If requirements are unclear, developers may implement incorrect functionality, leading to defects. Running test cases, executing tests, and writing tests based on acceptance criteria are testing activities, not root causes."
  },

  // Chapter 2: Testing Throughout the SDLC (15%) - Questions 4-9
  {
    id: 4,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "In the V-model, which test level corresponds to the requirements specification phase?",
    options: [
      "Integration testing",
      "System testing",
      "Acceptance testing",
      "Component testing"
    ],
    correctAnswer: 2,
    explanation: "In the V-model, each development phase on the left side has a corresponding test level on the right side. Acceptance testing corresponds to the requirements specification phase, system testing corresponds to functional specification, integration testing corresponds to architectural design, and component testing corresponds to detailed design."
  },
  {
    id: 5,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which SDLC model is characterized by short iterations, incremental delivery, and close collaboration between cross-functional teams?",
    options: [
      "Waterfall model",
      "V-model",
      "Agile model",
      "Spiral model"
    ],
    correctAnswer: 2,
    explanation: "The Agile model is characterized by short iterations, incremental delivery, and close collaboration between cross-functional teams. The Waterfall model is sequential, the V-model is an extension of Waterfall with corresponding test levels, and the Spiral model focuses on risk analysis."
  },
  {
    id: 6,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test activity is typically performed during the test planning phase?",
    options: [
      "Designing test cases",
      "Executing test cases",
      "Defining the test scope, approach, and schedule",
      "Analyzing test results"
    ],
    correctAnswer: 2,
    explanation: "During the test planning phase, the test scope, approach, resources, and schedule are defined. Test case design is part of test design, test execution involves running test cases, and analyzing test results is part of test completion."
  },
  {
    id: 7,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "What is the primary goal of maintenance testing when a software system is modified?",
    options: [
      "To ensure no new functionality was added",
      "To confirm that the changes work correctly and that existing functionality is not adversely affected",
      "To replace all existing test cases with new ones",
      "To stop testing once the changes are deployed"
    ],
    correctAnswer: 1,
    explanation: "Maintenance testing aims to confirm that changes work correctly and that existing functionality is not adversely affected. It includes regression testing (re-testing existing functionality) and impact analysis (identifying areas affected by changes). It does not remove new functionality or replace all existing tests."
  },
  {
    id: 8,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test level is typically performed by developers in the development environment?",
    options: [
      "System testing",
      "Acceptance testing",
      "Component testing",
      "Integration testing"
    ],
    correctAnswer: 2,
    explanation: "Component testing (also known as unit testing) is typically performed by developers in the development environment. System testing is performed by testers in a test environment, acceptance testing is performed by users or customers, and integration testing can be performed by developers or testers."
  },
  {
    id: 9,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "In an iterative SDLC, when should testing activities ideally begin?",
    options: [
      "Only after all code is written",
      "As early as possible in the lifecycle",
      "Only after the first iteration is complete",
      "Only during the final iteration before release"
    ],
    correctAnswer: 1,
    explanation: "Testing activities should begin as early as possible in the lifecycle (shift-left testing). Early testing helps identify defects when they are cheaper to fix and prevents the accumulation of defects. In iterative models, testing is performed continuously throughout each iteration."
  },

  // Chapter 3: Static Testing (10%) - Questions 10-13
  {
    id: 10,
    domain: "Chapter 3: Static Testing",
    question: "Which review type is the most formal, uses defined roles, and requires documented results and metrics?",
    options: [
      "Informal review",
      "Walkthrough",
      "Technical review",
      "Inspection"
    ],
    correctAnswer: 3,
    explanation: "Inspection is the most formal review type. It uses defined roles (e.g., moderator, author, reader), requires documented results, collects metrics, and follows a formal process. Informal reviews are ad-hoc, walkthroughs are led by the author, and technical reviews are less formal than inspections."
  },
  {
    id: 11,
    domain: "Chapter 3: Static Testing",
    question: "Which static analysis tool can be used to measure the complexity of code by counting the number of independent paths?",
    options: [
      "A linter",
      "A cyclomatic complexity analyzer",
      "A code formatter",
      "A debugger"
    ],
    correctAnswer: 1,
    explanation: "Cyclomatic complexity measures the number of linearly independent paths through a program's source code. It is a metric used in static analysis to assess code complexity. A linter checks for style violations, a code formatter formats code, and a debugger is a dynamic testing tool."
  },
  {
    id: 12,
    domain: "Chapter 3: Static Testing",
    question: "What is the primary benefit of conducting reviews early in the SDLC?",
    options: [
      "It eliminates the need for dynamic testing",
      "It finds defects before they propagate to later phases, reducing rework costs",
      "It ensures the code is automatically optimized",
      "It replaces the need for a test plan"
    ],
    correctAnswer: 1,
    explanation: "Reviews conducted early in the SDLC find defects before they propagate to later phases, reducing rework costs. Early defect detection is significantly cheaper than finding defects during testing or in production. Reviews do not eliminate dynamic testing, optimize code, or replace test plans."
  },
  {
    id: 13,
    domain: "Chapter 3: Static Testing",
    question: "Which of the following is a typical activity in a walkthrough review?",
    options: [
      "Collecting metrics and formal follow-up",
      "The author guiding participants through the work product to gather feedback",
      "Formal entry and exit criteria evaluation",
      "A trained moderator leading the review without the author"
    ],
    correctAnswer: 1,
    explanation: "In a walkthrough, the author typically guides participants through the work product to gather feedback and explain the content. Walkthroughs are less formal than inspections and do not typically involve formal metrics, entry/exit criteria, or a trained moderator leading without the author."
  },

  // Chapter 4: Test Techniques (25%) - Questions 14-23
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
  },

  // Chapter 5: Test Management (20%) - Questions 24-31
  {
    id: 24,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is typically included in a test plan?",
    options: [
      "The detailed code of the system under test",
      "The test scope, approach, resources, and schedule",
      "The user manual for the application",
      "The source code repository URL"
    ],
    correctAnswer: 1,
    explanation: "A test plan typically includes the test scope, approach, resources, and schedule. It may also include test levels, entry and exit criteria, and risk assessment. It does not include the detailed code, user manual, or repository URL."
  },
  {
    id: 25,
    domain: "Chapter 5: Test Management",
    question: "A test manager uses historical data from similar projects to estimate the testing effort. Which estimation technique is being used?",
    options: [
      "Expert-based estimation",
      "Metrics-based estimation",
      "Top-down estimation",
      "Bottom-up estimation"
    ],
    correctAnswer: 1,
    explanation: "Metrics-based estimation (also known as analogous or formula-based estimation) uses historical data and metrics from similar projects to estimate effort. Expert-based estimation relies on the experience of experts. Top-down and bottom-up are approaches to breaking down estimation work."
  },
  {
    id: 26,
    domain: "Chapter 5: Test Management",
    question: "What are exit criteria used for in test management?",
    options: [
      "To determine when to start testing",
      "To define the conditions that must be met to conclude a test level",
      "To identify the test environment requirements",
      "To specify the test data needed for execution"
    ],
    correctAnswer: 1,
    explanation: "Exit criteria define the conditions that must be met to conclude a test level or test phase. They help determine when testing is complete and whether the system is ready for the next phase. Entry criteria determine when to start testing, not exit criteria."
  },
  {
    id: 27,
    domain: "Chapter 5: Test Management",
    question: "In defect management, what does severity indicate?",
    options: [
      "The order in which the defect should be fixed",
      "The impact of the defect on the system's functionality",
      "The tester who reported the defect",
      "The estimated time to fix the defect"
    ],
    correctAnswer: 1,
    explanation: "Severity indicates the impact of the defect on the system's functionality. Priority indicates the order in which the defect should be fixed. Severity is typically assigned by the tester, while priority is assigned by the project manager or development team."
  },
  {
    id: 28,
    domain: "Chapter 5: Test Management",
    question: "Which of the following is a product risk in risk-based testing?",
    options: [
      "Delays in test environment availability",
      "A defect in the login functionality that prevents user access",
      "Lack of skilled testers on the project",
      "Budget overruns due to extended testing"
    ],
    correctAnswer: 1,
    explanation: "Product risks are risks related to the quality of the work product (e.g., defects, performance issues). A defect in the login functionality is a product risk. Project risks (delays, lack of resources, budget overruns) relate to the project management and execution."
  },
  {
    id: 29,
    domain: "Chapter 5: Test Management",
    question: "Which test activity involves comparing actual test results with expected results and documenting discrepancies?",
    options: [
      "Test planning",
      "Test monitoring",
      "Test execution",
      "Test completion"
    ],
    correctAnswer: 2,
    explanation: "Test execution involves running test cases, comparing actual results with expected results, and documenting discrepancies as defects. Test planning defines the approach, test monitoring tracks progress, and test completion involves finalizing test activities and reporting."
  },
  {
    id: 30,
    domain: "Chapter 5: Test Management",
    question: "What is the primary purpose of test monitoring?",
    options: [
      "To create test cases",
      "To track test progress and identify deviations from the plan",
      "To execute test cases",
      "To fix defects found during testing"
    ],
    correctAnswer: 1,
    explanation: "Test monitoring is the activity of tracking test progress and identifying deviations from the test plan. It involves collecting metrics, comparing actual progress against planned progress, and reporting status. It does not involve creating test cases, executing them, or fixing defects."
  },
  {
    id: 31,
    domain: "Chapter 5: Test Management",
    question: "Which document is typically used to track the lifecycle of a defect from discovery to closure?",
    options: [
      "Test plan",
      "Test case specification",
      "Defect report",
      "Test strategy"
    ],
    correctAnswer: 2,
    explanation: "A defect report (or bug report) is used to track the lifecycle of a defect from discovery to closure. It includes details such as the defect description, severity, priority, status, and resolution. The test plan defines the overall approach, test cases specify test steps, and the test strategy defines high-level testing guidelines."
  },

  // Chapter 6: Test Tools and Automation (12%) - Questions 32-36
  {
    id: 32,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which type of test tool is used to manage test cases, test execution, and defect tracking?",
    options: [
      "A performance testing tool",
      "A test management tool",
      "A static analysis tool",
      "A test execution tool"
    ],
    correctAnswer: 1,
    explanation: "A test management tool is used to manage test cases, test execution, and defect tracking. It provides a centralized repository for test assets and traceability. Performance testing tools test load and stress, static analysis tools analyze code without execution, and test execution tools automate test execution."
  },
  {
    id: 33,
    domain: "Chapter 6: Test Tools and Automation",
    question: "In keyword-driven automation, what does a keyword represent?",
    options: [
      "A programming language construct",
      "A high-level action or operation that can be reused across test scripts",
      "A specific test data value",
      "A defect severity classification"
    ],
    correctAnswer: 1,
    explanation: "In keyword-driven automation, a keyword represents a high-level action or operation (e.g., 'Login', 'ClickButton', 'VerifyText') that can be reused across test scripts. Testers create test cases by combining keywords and test data, without needing to write code."
  },
  {
    id: 34,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which test automation approach separates test data from test scripts, allowing the same script to be run with multiple data sets?",
    options: [
      "Scripted testing",
      "Data-driven testing",
      "Keyword-driven testing",
      "Manual testing"
    ],
    correctAnswer: 1,
    explanation: "Data-driven testing separates test data from test scripts, allowing the same script to be executed with multiple data sets. This improves maintainability and coverage. Scripted testing has hardcoded data, keyword-driven testing uses reusable actions, and manual testing is not automated."
  },
  {
    id: 35,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which category of test tools is used to check code without executing it, such as checking for unreachable code or potential security vulnerabilities?",
    options: [
      "Test execution tools",
      "Static testing tools",
      "Performance testing tools",
      "Test management tools"
    ],
    correctAnswer: 1,
    explanation: "Static testing tools analyze code without executing it. They can check for unreachable code, coding standard violations, and potential security vulnerabilities. Test execution tools run tests, performance testing tools measure performance, and test management tools manage test assets."
  },
  {
    id: 36,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a benefit of test automation?",
    options: [
      "It eliminates the need for manual testing entirely",
      "It reduces regression testing time and increases repeatability",
      "It guarantees that all defects will be found",
      "It removes the need for test planning"
    ],
    correctAnswer: 1,
    explanation: "Test automation reduces regression testing time and increases repeatability. It does not eliminate the need for manual testing entirely (exploratory testing is still valuable), guarantee that all defects will be found, or remove the need for test planning."
  },

  // Additional questions to cover all 40 and ensure realistic distribution
  // Chapter 1: Fundamentals of Testing - 1 more
  {
    id: 37,
    domain: "Chapter 1: Fundamentals of Testing",
    question: "Which statement about the objectives of testing is TRUE?",
    options: [
      "Testing only aims to find defects in the code",
      "Testing can provide confidence about the quality of the software and help identify risks",
      "Testing guarantees that the software will meet all business requirements",
      "Testing is only performed after the coding phase is complete"
    ],
    correctAnswer: 1,
    explanation: "Testing objectives include finding defects, providing confidence about the level of quality, and helping identify risks. Testing does not guarantee that all business requirements are met, nor is it only about finding code defects. Testing can also be performed throughout the SDLC, not just after coding."
  },

  // Chapter 2: Testing Throughout the SDLC - 2 more (already have 6)
  {
    id: 38,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "Which test activity involves verifying that test objectives have been met and documenting lessons learned?",
    options: [
      "Test planning",
      "Test analysis",
      "Test completion",
      "Test monitoring"
    ],
    correctAnswer: 2,
    explanation: "Test completion involves verifying that test objectives have been met, documenting lessons learned, and archiving test assets. Test planning defines the approach, test analysis identifies what to test, and test monitoring tracks progress."
  },
  {
    id: 39,
    domain: "Chapter 2: Testing Throughout the SDLC",
    question: "In a waterfall SDLC, when is the test completion report typically produced?",
    options: [
      "At the beginning of the project",
      "During the requirements phase",
      "At the end of the testing phase",
      "After the software is deployed to production"
    ],
    correctAnswer: 2,
    explanation: "In a waterfall SDLC, the test completion report is typically produced at the end of the testing phase. It summarizes the testing activities, results, defects found, and whether exit criteria were met. In iterative models, it may be produced at the end of each iteration."
  },

  // Chapter 3: Static Testing - 1 more (already have 4)
  {
    id: 40,
    domain: "Chapter 3: Static Testing",
    question: "Which review role is typically responsible for ensuring the review process is followed and for scheduling the review meeting?",
    options: [
      "The author",
      "The reviewer",
      "The moderator",
      "The manager"
    ],
    correctAnswer: 2,
    explanation: "The moderator (or facilitator) is responsible for ensuring the review process is followed, scheduling the review meeting, and managing the review process. The author is the creator of the work product, reviewers examine the work product, and the manager may authorize resources but does not typically run the review."
  }
];

