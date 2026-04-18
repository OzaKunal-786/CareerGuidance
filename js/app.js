document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const landingScreen = document.getElementById('landing');
    const infoModal = document.getElementById('info-modal');
    const mainContainer = document.getElementById('main-container');
    const completionScreen = document.getElementById('completion');
    const sectionsWrapper = document.getElementById('sections-wrapper');
    const sectionList = document.getElementById('section-list');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const finishBtn = document.getElementById('finish-btn');
    const scrollTarget = document.getElementById('scroll-target');

    const sideNav = document.getElementById('side-nav');
    const minimizeBtn = document.getElementById('minimize-sidebar');
    const expandBtn = document.getElementById('expand-sidebar');

    const progressPercentText = document.getElementById('progress-percent');
    const progressBarFill = document.getElementById('progress-bar-fill');

    const startBtn = document.getElementById('start-journey');
    const confirmBtn = document.getElementById('confirm-start');
    const restartBtnTop = document.getElementById('restart-top');
    const clearSectionBtn = document.getElementById('clear-section');
    const resetBtnFinal = document.getElementById('reset-form');

    const copyPromptBtn = document.getElementById('copy-prompt');
    const backToFormBtn = document.getElementById('back-to-form');
    const saveDataFinalBtn = document.getElementById('save-data-final');

    let currentSectionIndex = 0;
    let formData = {};

    function init() {
        console.log("System Initializing...");

        // Load data from localStorage
        try {
            const saved = localStorage.getItem('careerFormData');
            if (saved) formData = JSON.parse(saved);
        } catch (e) {}

        renderNavigation();
        renderSections();
        updateUI();
        loadSavedDataToForm();

        // 1. Landing & Modal logic
        if (startBtn) {
            startBtn.onclick = () => {
                console.log("Start button clicked");
                if (infoModal) infoModal.classList.add('active');
            };
        }

        if (confirmBtn) {
            confirmBtn.onclick = () => {
                console.log("Confirm button clicked");
                if (infoModal) infoModal.classList.remove('active');
                if (landingScreen) {
                    landingScreen.classList.remove('active');
                    landingScreen.style.display = 'none'; // Ensure hidden
                }
                if (mainContainer) {
                    mainContainer.classList.add('active');
                    mainContainer.style.display = 'flex'; // Ensure shown
                }
                currentSectionIndex = findFirstPendingSection();
                updateUI();
                window.scrollTo(0, 0);
            };
        }

        // 2. Navigation
        if (nextBtn) nextBtn.onclick = () => {
            saveToLocalStorage();
            currentSectionIndex++;
            updateUI();
        };
        if (prevBtn) prevBtn.onclick = () => {
            currentSectionIndex--;
            updateUI();
        };
        if (finishBtn) {
            finishBtn.onclick = (e) => {
                e.preventDefault();
                console.log("Finish button clicked");
                saveToLocalStorage();
                if (mainContainer) {
                    mainContainer.classList.remove('active');
                    mainContainer.style.display = 'none';
                }
                if (completionScreen) {
                    completionScreen.classList.add('active');
                    completionScreen.style.display = 'block';
                }
                window.scrollTo(0, 0);
            };
            // Add touchstart for mobile responsiveness
            finishBtn.ontouchstart = (e) => {
                e.preventDefault();
                finishBtn.onclick(e);
            };
        }

        // 3. Reset & Clear logic
        if (restartBtnTop) restartBtnTop.onclick = fullReset;
        if (resetBtnFinal) resetBtnFinal.onclick = fullReset;
        if (clearSectionBtn) clearSectionBtn.onclick = clearCurrentSection;

        // 4. File Operations & AI
        if (copyPromptBtn) copyPromptBtn.onclick = copyFullAIPrompt;
        if (backToFormBtn) backToFormBtn.onclick = () => {
            if (completionScreen) {
                completionScreen.classList.remove('active');
                completionScreen.style.display = 'none';
            }
            if (mainContainer) {
                mainContainer.classList.add('active');
                mainContainer.style.display = 'flex';
            }
            updateUI();
        };
        if (saveDataFinalBtn) saveDataFinalBtn.onclick = downloadProgressFile;

        // Header Actions
        const saveDataBtn = document.getElementById('save-json');
        if (saveDataBtn) saveDataBtn.onclick = downloadProgressFile;

        if (minimizeBtn) minimizeBtn.onclick = () => {
            if (sideNav) sideNav.classList.add('minimized');
            if (expandBtn) expandBtn.style.display = 'block';
        };
        if (expandBtn) expandBtn.onclick = () => {
            if (sideNav) sideNav.classList.remove('minimized');
            if (expandBtn) expandBtn.style.display = 'none';
        };

        // JSON Upload
        const uploadTrigger = document.getElementById('upload-trigger');
        const jsonUpload = document.getElementById('json-upload');
        if (uploadTrigger) uploadTrigger.onclick = () => jsonUpload.click();
        if (jsonUpload) jsonUpload.onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    formData = JSON.parse(event.target.result);
                    localStorage.setItem('careerFormData', JSON.stringify(formData));
                    loadSavedDataToForm();
                    if (landingScreen) {
                        landingScreen.classList.remove('active');
                        landingScreen.style.display = 'none';
                    }
                    if (mainContainer) {
                        mainContainer.classList.add('active');
                        mainContainer.style.display = 'flex';
                    }
                    currentSectionIndex = findFirstPendingSection();
                    updateUI();
                    alert("Progress Restored!");
                } catch (err) { alert("Invalid file"); }
            };
            reader.readAsText(file);
        };

        setInterval(saveToLocalStorage, 20000);
    }

    function fullReset() {
        if (confirm("This will permanently delete ALL progress. Are you sure?")) {
            localStorage.clear();
            location.reload();
        }
    }

    function clearCurrentSection() {
        if (confirm("Clear all answers in THIS section?")) {
            const currentSection = FORM_STRUCTURE[currentSectionIndex];
            const clearIds = (qs) => qs.forEach(q => formData[q.id] = "");
            if (currentSection.subsections) currentSection.subsections.forEach(sub => clearIds(sub.questions));
            else clearIds(currentSection.questions);
            localStorage.setItem('careerFormData', JSON.stringify(formData));

            loadSavedDataToForm();
            updateUI();
        }
    }

    function renderNavigation() {
        if (!sectionList) return;
        sectionList.innerHTML = '';
        FORM_STRUCTURE.forEach((section, index) => {
            const li = document.createElement('li');
            li.id = `nav-item-${index}`;
            li.innerHTML = `<span>${index + 1}. ${section.title}</span> <span class="tick" style="display:none">✓</span>`;
            li.onclick = () => {
                currentSectionIndex = index;
                updateUI();
            };
            sectionList.appendChild(li);
        });
    }

    function renderSections() {
        if (!sectionsWrapper) return;
        sectionsWrapper.innerHTML = '';
        FORM_STRUCTURE.forEach((section, index) => {
            const sectionEl = document.createElement('div');
            sectionEl.className = 'form-section';
            sectionEl.id = `section-${index}`;
            sectionEl.style.display = 'none';

            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = section.title;
            sectionEl.appendChild(title);

            if (section.subsections) {
                section.subsections.forEach(sub => {
                    const card = document.createElement('div');
                    card.className = 'question-card group-card';
                    const h3 = document.createElement('h3');
                    h3.className = 'card-group-title';
                    h3.style.fontSize = '1.2rem';
                    h3.style.marginBottom = '20px';
                    h3.style.color = 'var(--primary-purple)';
                    h3.textContent = sub.title;
                    card.appendChild(h3);

                    sub.questions.forEach(q => card.appendChild(createCompactQuestion(q)));
                    sectionEl.appendChild(card);
                });
            } else {
                const card = document.createElement('div');
                card.className = 'question-card group-card';
                section.questions.forEach(q => card.appendChild(createCompactQuestion(q)));
                sectionEl.appendChild(card);
            }
            sectionsWrapper.appendChild(sectionEl);
        });
    }

    function createCompactQuestion(q) {
        const qWrap = document.createElement('div');
        qWrap.className = 'compact-q-wrap';
        qWrap.style.marginBottom = '20px';
        qWrap.dataset.id = q.id;

        const header = document.createElement('div');
        header.className = 'question-header';
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'flex-start';
        header.style.gap = '10px';

        const label = document.createElement('label');
        label.className = 'question-text';
        label.style.fontWeight = '700';
        label.textContent = q.label;
        header.appendChild(label);

        if (q.guide || q.goodExample) {
            const helpBtn = document.createElement('button');
            helpBtn.type = "button"; helpBtn.className = "help-btn"; helpBtn.textContent = "?";
            helpBtn.onclick = () => {
                const box = qWrap.querySelector('.guide-box');
                if (box) box.classList.toggle('active');
            };
            header.appendChild(helpBtn);
        }
        qWrap.appendChild(header);

        if (q.guide || q.goodExample) {
            const guideBox = document.createElement('div');
            guideBox.className = "guide-box";
            let guideHTML = q.guide ? `<p>${q.guide}</p>` : "";
            if (q.goodExample) guideHTML += `<p style="margin-top:8px"><strong>Example:</strong> ${q.goodExample}</p>`;
            guideBox.innerHTML = guideHTML;
            qWrap.appendChild(guideBox);
        }

        let input;
        if (q.type === 'select') {
            input = document.createElement('select'); input.name = q.id;
            const def = document.createElement('option'); def.value = ""; def.textContent = "Select..."; input.appendChild(def);
            q.options.forEach(opt => { const o = document.createElement('option'); o.value = opt; o.textContent = opt; input.appendChild(o); });
        } else if (q.type === 'radio' || q.type === 'checkbox-group') {
            input = document.createElement('div'); input.className = 'option-group-compact';
            q.options.forEach(opt => {
                const wrapper = document.createElement('label'); wrapper.className = 'option-item-compact';
                const r = document.createElement('input'); r.type = q.type === 'radio' ? 'radio' : 'checkbox'; r.name = q.id; r.value = opt;
                r.onclick = (e) => {
                    // Logic to handle re-selection and toggling
                    if (r.type === 'radio') {
                        if (formData[q.id] === r.value) {
                            // If clicking already selected, deselect
                            r.checked = false;
                            formData[q.id] = "";
                            wrapper.classList.remove('selected');
                        } else {
                            // Select new one
                            formData[q.id] = r.value;
                            const group = wrapper.parentElement;
                            group.querySelectorAll('.option-item-compact').forEach(el => {
                                el.classList.remove('selected');
                                const otherInput = el.querySelector('input');
                                if (otherInput) otherInput.checked = false;
                            });
                            r.checked = true;
                            wrapper.classList.add('selected');
                        }
                    } else {
                        // Checkbox logic
                        const arr = Array.isArray(formData[q.id]) ? formData[q.id] : [];
                        if (r.checked) {
                            if (!arr.includes(r.value)) arr.push(r.value);
                        } else {
                            formData[q.id] = arr.filter(v => v !== r.value);
                        }
                        wrapper.classList.toggle('selected', r.checked);
                    }
                    saveToLocalStorage();
                };
                wrapper.appendChild(r);
                wrapper.appendChild(document.createTextNode(' ' + opt));
                input.appendChild(wrapper);
            });
        } else if (q.type === 'textarea') {
            input = document.createElement('textarea');
            input.name = q.id;
            input.placeholder = "Your detailed answer...";
            input.addEventListener('input', function() {
                autoResize(this);
                saveToLocalStorage();
            });
            // Initial call for pre-filled data
            setTimeout(() => autoResize(input), 100);
        } else {
            input = document.createElement('input'); input.type = q.type; input.name = q.id; input.oninput = saveToLocalStorage;
        }
        if (input) qWrap.appendChild(input);
        return qWrap;
    }

    function autoResize(el) {
        el.style.height = '40px'; // Reset to base height
        el.style.height = el.scrollHeight + 'px'; // Expand to fit content
    }

    function updateProgressBar() {
        let completedCount = 0;
        FORM_STRUCTURE.forEach((_, index) => {
            if (isSectionComplete(index)) completedCount++;
        });
        const progress = Math.round((completedCount / FORM_STRUCTURE.length) * 100);

        if (progressPercentText) progressPercentText.textContent = progress + '% Journey Completed';
        if (progressBarFill) progressBarFill.style.width = progress + '%';
    }

    function updateUI() {
        const sections = document.querySelectorAll('.form-section');
        sections.forEach((s, i) => s.style.display = i === currentSectionIndex ? 'block' : 'none');
        const navItems = document.querySelectorAll('#section-list li');
        if (navItems.length > 0) {
            navItems.forEach((item, i) => item.classList.toggle('active', i === currentSectionIndex));
        }

        if (prevBtn) prevBtn.style.visibility = currentSectionIndex === 0 ? 'hidden' : 'visible';
        if (finishBtn) finishBtn.style.display = (currentSectionIndex === FORM_STRUCTURE.length - 1) ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = (currentSectionIndex === FORM_STRUCTURE.length - 1) ? 'none' : 'flex';

        updateProgressBar();

        if (scrollTarget) scrollTarget.scrollTo({ top: 0, behavior: 'smooth' });

        // Auto-resize textareas when switching sections
        document.querySelectorAll('textarea').forEach(autoResize);
    }

    function saveToLocalStorage() {
        const form = document.getElementById('career-form');
        if (!form) return;
        const data = new FormData(form);
        const entries = {};
        for (let [key, value] of data.entries()) {
            if (entries[key]) {
                if (!Array.isArray(entries[key])) entries[key] = [entries[key]];
                entries[key].push(value);
            } else entries[key] = value;
        }
        // Force state for radios that are entirely unchecked in the DOM
        document.querySelectorAll('input[type="radio"]').forEach(r => {
            const name = r.name;
            if (!document.querySelector(`input[name="${name}"]:checked`)) {
                formData[name] = "";
            }
        });
        formData = { ...formData, ...entries };
        localStorage.setItem('careerFormData', JSON.stringify(formData));
        updateTicks();
        updateProgressBar();
    }

    function isSectionComplete(index) {
        const section = FORM_STRUCTURE[index];
        const hasValue = (id) => formData[id] && formData[id].toString().trim().length > 0;
        if (section.subsections) {
            return section.subsections.every(sub => sub.questions.some(q => hasValue(q.id)));
        }
        return section.questions.some(q => hasValue(q.id));
    }

    function updateTicks() {
        FORM_STRUCTURE.forEach((section, index) => {
            const done = isSectionComplete(index);
            const item = document.getElementById(`nav-item-${index}`);
            if (item) {
                const tick = item.querySelector('.tick');
                if (tick) tick.style.display = done ? 'inline' : 'none';
            }
        });
    }

    function loadSavedDataToForm() {
        for (const [key, value] of Object.entries(formData)) {
            const fields = document.getElementsByName(key);
            fields.forEach(f => {
                if (f.type === 'radio' || f.type === 'checkbox') {
                    const ok = Array.isArray(value) ? value.includes(f.value) : f.value === value;
                    f.checked = ok;
                    const wrapper = f.closest('.option-item-compact');
                    if (wrapper) wrapper.classList.toggle('selected', ok);
                } else {
                    f.value = value;
                    if (f.tagName === 'TEXTAREA') setTimeout(() => autoResize(f), 50);
                }
            });
        }
        updateTicks();
    }

    function copyFullAIPrompt() {
        const fullReport = generateFullReportText();
        const textArea = document.createElement("textarea");
        textArea.value = fullReport;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            copyPromptBtn.innerText = "Copied! ✅";
            setTimeout(() => copyPromptBtn.innerText = "Copy Full Data & AI Prompt", 2000);
        } catch (err) { alert("Copy failed."); }
        document.body.removeChild(textArea);
    }

    function generateFullReportText() {
        const header = document.getElementById('ai-prompt-container').innerText.trim();
        let reportData = "\n\n--- ASSESSMENT DATA ---\n";
        FORM_STRUCTURE.forEach(section => {
            let sectionText = `\n[${section.title.toUpperCase()}]\n`;
            let hasAny = false;
            const process = (qs) => {
                qs.forEach(q => {
                    const val = formData[q.id];
                    if (val && val.toString().trim().length > 0) {
                        sectionText += `Q: ${q.label}\nA: ${Array.isArray(val) ? val.join(", ") : val}\n\n`;
                        hasAny = true;
                    }
                });
            };
            if (section.subsections) section.subsections.forEach(sub => process(sub.questions));
            else process(section.questions);
            if (hasAny) reportData += sectionText;
        });
        const footer = document.getElementById('ai-footer-container').innerText.trim();
        return header + reportData + "\n" + footer;
    }

    function findFirstPendingSection() {
        for (let i = 0; i < FORM_STRUCTURE.length; i++) {
            if (!isSectionComplete(i)) return i;
        }
        return 0;
    }

    function downloadProgressFile() {
        saveToLocalStorage();
        const blob = new Blob([JSON.stringify(formData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = `CareerDiscovery_Data.json`;
        a.click(); URL.revokeObjectURL(url);
    }

    init();
});
