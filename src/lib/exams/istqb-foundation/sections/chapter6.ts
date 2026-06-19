import type { ExamQuestion } from '@/types';

export const questions: ExamQuestion[] = [
  // Questions 1-10 (Test Set 1)
  {
    id: 1,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a test management tool?",
    options: [
      "A tool that manages test cases, test execution, and defect tracking",
      "A tool that automatically generates code",
      "A tool that only performs load testing",
      "A tool that only checks syntax errors"
    ],
    correctAnswer: 0,
    explanation: "Test management tools manage test cases, test execution, and defect tracking. They help organize and control the testing process."
  },
  {
    id: 2,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is a potential risk of test automation?",
    options: [
      "It always reduces the cost of testing",
      "It eliminates the need for manual testing entirely",
      "It makes testing faster in all situations",
      "It requires significant initial investment and maintenance effort"
    ],
    correctAnswer: 3,
    explanation: "Test automation requires significant initial investment and maintenance effort. Automated tests need to be maintained when the application changes."
  },
  {
    id: 3,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a benefit of using a static analysis tool?",
    options: [
      "It can only be used after the code is deployed",
      "It requires user interaction to test the user interface",
      "It can find defects without executing the code",
      "It can only find syntax errors"
    ],
    correctAnswer: 2,
    explanation: "Static analysis tools can find defects without executing the code. They analyze source code, bytecode, or binary code for potential defects."
  },
  {
    id: 4,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the main purpose of a performance testing tool?",
    options: [
      "To check the spelling of the user interface",
      "To measure the performance of the system under various conditions",
      "To automatically fix code defects",
      "To generate test cases automatically"
    ],
    correctAnswer: 1,
    explanation: "Performance testing tools measure the performance of the system under various conditions, such as load, stress, or spike conditions."
  },
  {
    id: 5,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a key consideration when selecting a test tool?",
    options: [
      "The tool should support the organization's testing objectives and be compatible with the existing environment",
      "The tool should be the most expensive option available",
      "The tool should only be selected based on its brand name",
      "The tool should require no training to use"
    ],
    correctAnswer: 0,
    explanation: "When selecting a test tool, key considerations include whether it supports the organization's testing objectives and whether it is compatible with the existing environment and processes."
  },
  {
    id: 6,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the purpose of a test design tool?",
    options: [
      "To execute test cases automatically",
      "To manage the test environment",
      "To track defects found during testing",
      "To generate test cases or test data based on models, requirements, or code"
    ],
    correctAnswer: 3,
    explanation: "Test design tools generate test cases or test data based on models, requirements, or code. They help automate the test design process and improve coverage."
  },
  {
    id: 7,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is a test coverage tool used for?",
    options: [
      "To measure the percentage of requirements covered by test cases",
      "To measure the time taken to execute test cases",
      "To measure the percentage of code or requirements that have been exercised by the test suite",
      "To measure the number of defects found during testing"
    ],
    correctAnswer: 2,
    explanation: "Test coverage tools measure the percentage of code or requirements that have been exercised by the test suite. They help identify untested areas and assess the completeness of testing."
  },
  {
    id: 8,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the role of CI/CD tools in test automation?",
    options: [
      "To manually execute test cases",
      "To automate the build, test, and deployment pipeline",
      "To generate test cases based on user requirements",
      "To track defects found during testing"
    ],
    correctAnswer: 1,
    explanation: "CI/CD (Continuous Integration/Continuous Deployment) tools automate the build, test, and deployment pipeline. They enable automated tests to be run automatically whenever code changes are made."
  },
  {
    id: 9,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the primary benefit of test automation in a DevOps environment?",
    options: [
      "It enables faster feedback and continuous testing throughout the development lifecycle",
      "It eliminates the need for manual testing entirely",
      "It guarantees that all defects will be found",
      "It removes the need for test planning"
    ],
    correctAnswer: 0,
    explanation: "Test automation enables faster feedback and continuous testing throughout the development lifecycle. It supports the DevOps goal of delivering software quickly and reliably."
  },
  {
    id: 10,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is a test data preparation tool used for?",
    options: [
      "To design test cases",
      "To execute test cases automatically",
      "To manage the test team",
      "To create, select, edit, or generate test data for use in testing"
    ],
    correctAnswer: 3,
    explanation: "Test data preparation tools are used to create, select, edit, or generate test data for use in testing. They help ensure that test data is realistic, consistent, and compliant with data protection regulations."
  }
];

export const questions2: ExamQuestion[] = [
  // Questions 11-20 (Test Set 2)
  {
    id: 1,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which type of test tool is used to manage test cases, test execution, and defect tracking?",
    options: [
      "A performance testing tool",
      "A static analysis tool",
      "A test management tool",
      "A test execution tool"
    ],
    correctAnswer: 2,
    explanation: "A test management tool is used to manage test cases, test execution, and defect tracking. It provides a centralized repository for test assets and traceability. Performance testing tools test load and stress, static analysis tools analyze code without execution, and test execution tools automate test execution."
  },
  {
    id: 2,
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
    id: 3,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which test automation approach separates test data from test scripts, allowing the same script to be run with multiple data sets?",
    options: [
      "Data-driven testing",
      "Scripted testing",
      "Keyword-driven testing",
      "Manual testing"
    ],
    correctAnswer: 0,
    explanation: "Data-driven testing separates test data from test scripts, allowing the same script to be executed with multiple data sets. This improves maintainability and coverage. Scripted testing has hardcoded data, keyword-driven testing uses reusable actions, and manual testing is not automated."
  },
  {
    id: 4,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which category of test tools is used to check code without executing it, such as checking for unreachable code or potential security vulnerabilities?",
    options: [
      "Test execution tools",
      "Performance testing tools",
      "Test management tools",
      "Static testing tools"
    ],
    correctAnswer: 3,
    explanation: "Static testing tools analyze code without executing it. They can check for unreachable code, coding standard violations, and potential security vulnerabilities. Test execution tools run tests, performance testing tools measure performance, and test management tools manage test assets."
  },
  {
    id: 5,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a benefit of test automation?",
    options: [
      "It eliminates the need for manual testing entirely",
      "It guarantees that all defects will be found",
      "It reduces regression testing time and increases repeatability",
      "It removes the need for test planning"
    ],
    correctAnswer: 2,
    explanation: "Test automation reduces regression testing time and increases repeatability. It does not eliminate the need for manual testing entirely (exploratory testing is still valuable), guarantee that all defects will be found, or remove the need for test planning."
  },
  {
    id: 6,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is a pilot project in the context of test tool selection?",
    options: [
      "A project that is used to test the entire software application",
      "A small-scale project used to evaluate the suitability of a test tool before full deployment",
      "A project that is only used for manual testing",
      "A project that is used to train all testers on the tool"
    ],
    correctAnswer: 1,
    explanation: "A pilot project is a small-scale project used to evaluate the suitability of a test tool before full deployment. It helps assess the tool's effectiveness, compatibility, and ease of use in the organization's specific context."
  },
  {
    id: 7,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the main purpose of tool integration in test automation?",
    options: [
      "To enable tools to share data and work together seamlessly",
      "To ensure that all tools are from the same vendor",
      "To reduce the number of tools used in the organization",
      "To increase the cost of testing"
    ],
    correctAnswer: 0,
    explanation: "Tool integration enables different tools to share data and work together seamlessly. For example, a test management tool can integrate with a defect tracking tool and a CI/CD pipeline to provide end-to-end traceability and automation."
  },
  {
    id: 8,
    domain: "Chapter 6: Test Tools and Automation",
    question: "Which of the following is a key consideration for test environment requirements?",
    options: [
      "The test environment should be as different as possible from the production environment",
      "The test environment should only be used for manual testing",
      "The test environment should be shared with the development team",
      "The test environment should be identical to the production environment"
    ],
    correctAnswer: 3,
    explanation: "The test environment should be as similar as possible to the production environment to ensure that test results are representative. Differences between the test and production environments can lead to defects being missed or false positives."
  },
  {
    id: 9,
    domain: "Chapter 6: Test Tools and Automation",
    question: "What is the ROI of test automation?",
    options: [
      "The return on investment is always immediate",
      "The return on investment is only calculated at the end of the project",
      "The return on investment is calculated by comparing the cost of automation against the benefits, such as reduced manual testing effort and faster feedback",
      "The return on investment is always negative"
    ],
    correctAnswer: 2,
    explanation: "The ROI of test automation is calculated by comparing the cost of automation (tool selection, script development, maintenance) against the benefits (reduced manual testing effort, faster feedback, increased coverage). ROI is not always immediate and depends on the project context."
  },
  {
    id: 10,
    domain: "Chapter 6: Test Tools and Automation",
    question: "A team is evaluating a new open-source test automation tool. Which of the following is an important consideration?",
    options: [
      "The tool should be the most expensive option available",
      "The tool should have an active community, good documentation, and support for the organization's technology stack",
      "The tool should only be used for manual testing",
      "The tool should require no customization"
    ],
    correctAnswer: 1,
    explanation: "When evaluating an open-source test automation tool, important considerations include whether it has an active community, good documentation, and support for the organization's technology stack. Cost, manual testing support, and lack of customization are not typically relevant considerations."
  }
];
