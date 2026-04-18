# Functional Specification Document - Career Discovery Tool

## 1. Overview
The Career Discovery Tool is a web-based self-assessment application designed to facilitate deep self-reflection for students. Instead of traditional "multiple-choice" tests, it focuses on qualitative data by requiring users to provide real-life examples of their skills and experiences.

## 2. Target Audience
- High school students (approx. 18 years old).
- Individuals considering a career change.
- Career counselors looking for a structured intake tool.

## 3. Core Modules
### 3.1 Onboarding & Landing
- **Landing Screen:** Introduces the tool with a professional call-to-action.
- **Resume Feature:** Allows users to upload a previously saved `.json` file to continue their progress.
- **Pre-Assessment Modal:** Sets expectations, emphasizing honesty and specificity (using a "Rules" box).

### 3.2 Assessment Journey (The Roadmap)
- **Roadmap Sidebar:** A dynamic navigation menu showing 9 key sections.
- **Auto-Progress Tracking:** Shows a percentage completion bar in the header.
- **Section Types:**
    - Academic Background
    - Strengths Discovery (Problem-solving, Communication, Creativity, etc.)
    - Interests & Activities
    - Work Experience & Internships
    - Career Research & Reality Check
    - Job Preferences & Motivations
    - External Perspectives (Mother/Sibling input sections)
    - AI Disruption & Future Proofing

### 3.3 Question Interaction
- **Question Cards:** Each question is housed in a clean, focused card.
- **Contextual Guidance:** A "?" button reveals specific advice and "good examples" to help users write better answers.
- **Auto-Expanding Textareas:** Input fields grow as the user types to accommodate long-form reflections.
- **Data Persistence:** Every input is saved to the browser's local storage every few seconds and upon navigation.

### 3.4 Completion & Output
- **AI Prompt Generation:** Aggregates all user data into a high-level "Critical AI Prompt" designed to be pasted into ChatGPT/Claude.
- **JSON Export:** Downloads the raw data for future editing.
- **Word Doc Export:** Generates a professional `.docx` report for printing or sharing with mentors.

## 4. User Flow
1. **Entry:** User lands on the page and clicks "Start Assessment".
2. **Setup:** User reads the rules and enters the app shell.
3. **Execution:** User navigates through the 9 sections using "Next/Previous" or the Sidebar.
4. **Finalization:** User clicks "Generate AI Report".
5. **Output:** User copies the prompt or saves their files.
