# Technical Specification Document - Career Discovery Tool

## 1. Technology Stack
- **Frontend:** HTML5, CSS3, Modern JavaScript (ES6+).
- **Fonts:** Google Fonts (Inter).
- **External Libraries:**
    - `docx.js` (v8.2.2) - For generating Word documents on the client side.
    - `FileSaver.js` (v2.0.5) - For handling file downloads (blob storage).
    - `Unpkg` (CDN) - For fetching libraries without a local node environment.

## 2. Architecture & Design
### 2.1 State Management
The application uses a single-page application (SPA) architecture without a framework like React or Vue. 
- **Global State:** A centralized `formData` object stores all user inputs.
- **Persistence:** `localStorage` is updated every 20 seconds and on every input/navigation event to prevent data loss.
- **Form Configuration:** The `FORM_STRUCTURE` is defined in `js/questions.js`, allowing for easy modification of questions without changing the core app logic.

### 2.2 UI/UX Implementation
- **Flexbox Layout:** The header, sidebar, and main content area use CSS Flexbox for responsiveness.
- **Dynamic Transitions:** Sections are toggled by changing the `display` property based on the `currentSectionIndex`.
- **Auto-Expanding Textareas:** Implemented using a custom JavaScript listener (`scrollHeight`) to grow fields as text is entered.
- **Roadmap Logic:** The sidebar is collapsible using a CSS `transition` and a JavaScript toggle for the `.minimized` class.

### 2.3 Document Generation
- **Client-Side Generation:** `js/doc-gen.js` uses the `docx.js` library to build a professional report.
- **Data Mapping:** Iterates through the `FORM_STRUCTURE` and `formData` to create a structured list of headings and paragraphs.

## 3. Deployment & Scalability
- **Platform:** GitHub Pages (Static Hosting).
- **Zero-Backend:** No database or server is required. All data processing occurs on the user's browser.
- **Customizability:** Adding new sections is as simple as updating the `questions.js` array.

## 4. Known Constraints & Security
- **Data Privacy:** User data never leaves the browser except when the user manually copies the prompt or saves a file. No analytics or external tracking is used.
- **Browser Compatibility:** Optimized for modern browsers (Chrome, Edge, Firefox, Safari).
- **Origin Policy:** When running locally via `file://`, some browsers may restrict CORS/Module loading. It is recommended to run through a local web server (e.g., Live Server).

## 5. Development Guidelines
- **CSS Naming:** BEM-like naming conventions for clarity.
- **JS Style:** Vanilla JS with clear modular functions (`init`, `render`, `updateUI`).
- **Icons:** Standard Emojis are used for cross-platform compatibility without external icon libraries.
