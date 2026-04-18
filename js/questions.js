const FORM_STRUCTURE = [
    {
        id: 0,
        title: "Academic Background",
        questions: [
            {
                id: "s1_stream",
                label: "Current Stream",
                type: "select",
                options: ["Science", "Commerce", "Arts", "Other"],
                required: false,
                guide: "Choose the main branch of study you are currently enrolled in (e.g., Science, Commerce, Arts)."
            },
            {
                id: "s1_subjects",
                label: "Subjects Chosen",
                type: "text",
                placeholder: "List all your major subjects",
                required: false,
                guide: "List all major subjects you are currently studying. Example: Physics, Chemistry, Math, Biology, English."
            },
            {
                id: "s1_marks12",
                label: "12th Grade Marks/Percentage/CGPA",
                type: "number",
                min: 0,
                max: 100,
                required: false,
                guide: "Enter your most recent 12th-grade result. Be exact if you have the marks."
            },
            {
                id: "s1_marks11",
                label: "11th Grade Marks/Percentage/CGPA",
                type: "number",
                min: 0,
                max: 100,
                required: false,
                guide: "Enter your final 11th-grade result."
            },
            {
                id: "s1_trend",
                label: "Performance Trend",
                type: "radio",
                options: ["Improving", "Declining", "Consistent"],
                required: false,
                guide: "Look at your marks from 11th to 12th. Are they going up, down, or staying about the same?"
            }
        ]
    },
    {
        id: 1,
        title: "Discovering My Strengths",
        subsections: [
            {
                title: "Problem-Solving & Logic",
                questions: [
                    {
                        id: "s2_ps_1",
                        label: "Describe a recent time you solved a difficult problem (academic or non-academic)",
                        type: "textarea",
                        minChar: 10,
                        guide: "CRITICAL: Give a specific, recent example from the last 2 months. Include: 1. What was the problem? 2. Your exact steps. 3. How long it took. 4. Did you solve it?",
                        goodExample: "My math homework had a complex trigonometry problem... I watched a YouTube video... rewrote it step-by-step. Took 45 mins."
                    },
                    {
                        id: "s2_ps_2",
                        label: "How many attempts do you usually need to solve problems?",
                        type: "radio",
                        options: ["1st or 2nd time", "3-4 attempts", "Many attempts", "Give up quickly"],
                        guide: "Be honest about your patience and persistence levels when things get tough."
                    },
                    {
                        id: "s2_ps_3",
                        label: "When you get stuck, what do you actually do? (Give a real example)",
                        type: "textarea",
                        minChar: 10,
                        guide: "Describe your immediate reaction. Do you ask for help, take a break, or keep hammering away at it? Give an example."
                    }
                ]
            },
            {
                title: "Communication & Storytelling",
                questions: [
                    {
                        id: "s2_com_1",
                        label: "Describe a time you explained something complex and they understood",
                        type: "textarea",
                        minChar: 10,
                        guide: "Include: What was the topic? Who did you explain to? What analogy or approach did you use?",
                        goodExample: "I explained photosynthesis to my brother using a factory analogy: sun -> leaves -> sugar."
                    },
                    {
                        id: "s2_com_2",
                        label: "In the last 2 months, has anyone asked you for advice?",
                        type: "radio",
                        options: ["Yes, multiple times", "Yes, 1-2 times", "No"],
                        guide: "Think about friends, family, or classmates asking for help with studies or personal issues."
                    },
                    {
                        id: "s2_com_3",
                        label: "In class presentations, how do you feel?",
                        type: "radio",
                        options: ["Confident and enjoy it", "Nervous but do it", "Very nervous, try to avoid", "Haven't done it"],
                        guide: "Assess your public speaking comfort level."
                    }
                ]
            },
            {
                title: "Creativity & Imagination",
                questions: [
                    {
                        id: "s2_cre_1",
                        label: "Describe your last creative freedom assignment/project",
                        type: "textarea",
                        minChar: 10,
                        guide: "Did you create something original, or adapt an existing idea? Did you enjoy the process or feel it was a chore?",
                        goodExample: "I made a video essay on K-pop. Researched 3h, scripted myself, edited on phone. Loved every minute."
                    },
                    {
                        id: "s2_cre_2",
                        label: "Do you make things in your free time?",
                        type: "radio",
                        options: ["Yes, regularly", "Used to, not anymore", "No"],
                        guide: "This includes digital art, coding, crafts, writing, cooking, or anything where you 'create'."
                    },
                    {
                        id: "s2_cre_3",
                        label: "When thinking creatively, what happens? (Unique ideas vs following others)",
                        type: "textarea",
                        minChar: 10,
                        guide: "Do ideas come to you quickly, or do you prefer to see what others are doing first?"
                    }
                ]
            },
            {
                title: "Attention to Detail & Accuracy",
                questions: [
                    {
                        id: "s2_det_1",
                        label: "In exams, what's your pattern?",
                        type: "radio",
                        options: ["Finish early, time to review", "Finish just in time", "Don't have enough time"],
                        guide: "This helps identify if you work quickly or meticulously."
                    },
                    {
                        id: "s2_det_2",
                        label: "Describe a recent careless mistake and why it happened",
                        type: "textarea",
                        minChar: 10,
                        guide: "Example: misreading a question or calculation errors. Why did it happen? Rushing? Rereading?",
                        goodExample: "In Physics, I wrote the answer in m/s when the question asked for km/h. I didn't re-read."
                    },
                    {
                        id: "s2_det_3",
                        label: "How organized are your study notes?",
                        type: "radio",
                        options: ["Very organized and neat", "Somewhat organized", "Quite messy", "Write randomly"],
                        guide: "Be honest. Neatness often correlates with attention to detail."
                    }
                ]
            },
            {
                title: "Leadership & Organization",
                questions: [
                    {
                        id: "s2_lea_1",
                        label: "Describe your last group project role and how you led",
                        type: "textarea",
                        minChar: 10,
                        guide: "Did you naturally organize the team, or just do your assigned task? Did you enjoy it or feel burdened?",
                        goodExample: "For Biology, I assigned tasks, created a timeline, and checked everyone's work. It was stressful but effective."
                    },
                    {
                        id: "s2_lea_2",
                        label: "Do you naturally organize things/people?",
                        type: "radio",
                        options: ["Yes, regularly", "Sometimes", "No"],
                        guide: "Do you find yourself making plans for friends or tidying up shared spaces without being asked?"
                    },
                    {
                        id: "s2_lea_3",
                        label: "Give one specific example of your organization skills",
                        type: "textarea",
                        minChar: 10,
                        guide: "This could be organizing your room, a trip, or an event."
                    }
                ]
            },
            {
                title: "Empathy & Understanding People",
                questions: [
                    {
                        id: "s2_emp_1",
                        label: "Describe a time someone had a problem and how you responded",
                        type: "textarea",
                        minChar: 10,
                        guide: "What did YOU specifically do? (Listened? Gave advice? Solved it?) How did you feel?",
                        goodExample: "My friend was crying about exams. I listened for 20 mins, then we made a study plan together. I felt calm."
                    },
                    {
                        id: "s2_emp_2",
                        label: "How many people came to you with problems in the last month?",
                        type: "radio",
                        options: ["3+ times", "1-2 times", "No one"],
                        guide: "Measures how much others trust your empathy or advice."
                    },
                    {
                        id: "s2_emp_3",
                        label: "When you disagree, can you understand their view? (Give example)",
                        type: "textarea",
                        minChar: 10,
                        guide: "Think of a recent argument. Can you explain why the other person felt that way, even if you disagree?"
                    }
                ]
            },
            {
                title: "Learning & Curiosity",
                questions: [
                    {
                        id: "s2_cur_1",
                        label: "What topics do you learn about on your own (YouTube, books, etc)?",
                        type: "textarea",
                        minChar: 10,
                        guide: "What do you watch or read about that ISN'T for school? Be specific about channels or topics.",
                        goodExample: "I watch YouTube videos about astronomy (Kurzgesagt) 2x a week because I'm curious how the universe works."
                    },
                    {
                        id: "s2_cur_2",
                        label: "What do you DO with this extra information you learn?",
                        type: "textarea",
                        minChar: 10,
                        guide: "Do you just enjoy knowing it, or do you apply it to a project or discuss it with others?"
                    },
                    {
                        id: "s2_cur_3",
                        label: "Have you learned anything completely on your own in last 6 months?",
                        type: "radio",
                        options: ["Yes", "No"],
                        guide: "Example: taught yourself a software, a language, or a skill."
                    }
                ]
            },
            {
                title: "Practical Skills",
                questions: [
                    {
                        id: "s2_pra_1",
                        label: "When learning something new, do you prefer theory or practice?",
                        type: "radio",
                        options: ["Theory first", "Doing immediately", "Watch and copy", "Mix of both"],
                        guide: "Helps identify if you are a conceptual or hands-on learner."
                    },
                    {
                        id: "s2_pra_2",
                        label: "Can you build, fix, or troubleshoot things?",
                        type: "radio",
                        options: ["Yes, often", "Sometimes", "No"],
                        guide: "Think about home repairs, assembling furniture, or fixing computer/phone issues."
                    },
                    {
                        id: "s2_pra_3",
                        label: "Describe one thing you fixed or built recently",
                        type: "textarea",
                        minChar: 10,
                        guide: "Give details on what was broken and how you figured out how to fix it."
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        title: "My Interests",
        questions: [
            {
                id: "s3_act1_name",
                label: "Activity 1 Name",
                type: "text",
                guide: "List activities you ACTUALLY do, not what sounds good. Example: 'Scroll Instagram' or 'Read manga'."
            },
            { id: "s3_act1_freq", label: "How often?", type: "select", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
            {
                id: "s3_act1_love",
                label: "Do you LOVE this or just passing time?",
                type: "radio",
                options: ["Love it", "Passing time", "In between"],
                guide: "Does this activity energize you, or are you just bored?"
            },
            { id: "s3_act2_name", label: "Activity 2 Name", type: "text" },
            { id: "s3_act2_freq", label: "How often?", type: "select", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
            { id: "s3_act2_love", label: "Do you LOVE this or just passing time?", type: "radio", options: ["Love it", "Passing time", "In between"] },
            { id: "s3_act3_name", label: "Activity 3 Name", type: "text" },
            { id: "s3_act3_freq", label: "How often?", type: "select", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
            { id: "s3_act3_love", label: "Do you LOVE this or just passing time?", type: "radio", options: ["Love it", "Passing time", "In between"] },
            { id: "s3_act4_name", label: "Activity 4 Name", type: "text" },
            { id: "s3_act4_freq", label: "How often?", type: "select", options: ["Daily", "Weekly", "Monthly", "Rarely"] },
            { id: "s3_act4_love", label: "Do you LOVE this or just passing time?", type: "radio", options: ["Love it", "Passing time", "In between"] }
        ]
    },
    {
        id: 3,
        title: "Work Experience & Internships",
        questions: [
            {
                id: "s4_has_exp",
                label: "Do you have any work experience?",
                type: "radio",
                options: ["Yes", "No"],
                guide: "Includes part-time jobs, formal internships, freelance work, or volunteer projects."
            },
            {
                id: "s4_no_why",
                label: "If NO: Why haven't you worked yet? (Be honest)",
                type: "textarea",
                minChar: 10,
                guide: "Common reasons: studies were too heavy, parents didn't allow, never thought about it."
            },
            { id: "s4_intern_open", label: "Would you be open to an internship before college?", type: "radio", options: ["Yes, definitely", "Maybe", "No"] },
            {
                id: "s4_e1_title",
                label: "Experience 1: Job Title",
                type: "text",
                guide: "What was your role? Example: 'Digital Marketing Intern'."
            },
            { id: "s4_e1_dur", label: "Experience 1: Duration", type: "text", placeholder: "e.g., 2 weeks, last summer" },
            { id: "s4_e1_comp", label: "Experience 1: Company Name", type: "text" },
            {
                id: "s4_e1_tasks",
                label: "Experience 1: Specific tasks you did daily",
                type: "textarea",
                minChar: 10,
                guide: "Don't be general. 'Did marketing' is bad. 'Created 5 Instagram posts per day in Canva' is good."
            },
            {
                id: "s4_e1_like",
                label: "Experience 1: What exactly did you LIKE specifically?",
                type: "textarea",
                minChar: 10,
                guide: "Example: 'I liked choosing fonts/colors because it felt creative' vs 'I liked learning'."
            },
            {
                id: "s4_e1_dislike",
                label: "Experience 1: What exactly did you DISLIKE specifically?",
                type: "textarea",
                minChar: 10,
                guide: "Example: 'I disliked tracking metrics in Excel because it was repetitive'."
            },
            { id: "s4_e1_again", label: "Experience 1: Would you do this job again?", type: "radio", options: ["Yes", "No", "Maybe"] },
            { id: "s4_e1_scale", label: "Experience 1: Enjoyment level (1-10)", type: "number", min: 1, max: 10 },
            {
                id: "s4_e1_lesson",
                label: "Experience 1: What did this teach you about work you want/don't want?",
                type: "textarea",
                minChar: 10,
                guide: "This is the most important lesson from your work. Does it change what you want for the future?"
            }
        ]
    },
    {
        id: 4,
        title: "Have You Done Your Research?",
        questions: [
            {
                id: "s5_j1_name",
                label: "Job Choice 1 Name",
                type: "text",
                guide: "Section Purpose: To see if you are choosing a career based on FACT or IMAGINATION."
            },
            {
                id: "s5_j1_res",
                label: "Research for Job 1",
                type: "checkbox-group",
                options: ["Read about typical day/salary/entry", "Watched YouTube video of professional", "Talked to someone who actually does this work", "Understand entrance exam requirements"],
                guide: "Score Yourself: 4/4 = Ready. 0-1/4 = Choosing based on assumptions. Consider researching more."
            },
            { id: "s5_j2_name", label: "Job Choice 2 Name", type: "text" },
            { id: "s5_j2_res", label: "Research for Job 2", type: "checkbox-group", options: ["Read about typical day/salary/entry", "Watched YouTube video of professional", "Talked to someone who actually does this work", "Understand entrance exam requirements"] },
            { id: "s5_j3_name", label: "Job Choice 3 Name", type: "text" },
            { id: "s5_j3_res", label: "Research for Job 3", type: "checkbox-group", options: ["Read about typical day/salary/entry", "Watched YouTube video of professional", "Talked to someone who actually does this work", "Understand entrance exam requirements"] }
        ]
    },
    {
        id: 5,
        title: "My Job Preferences & Reasons",
        subsections: [
            {
                title: "Section Info",
                questions: [
                    {
                        id: "s6_info",
                        label: "How is this different from Research?",
                        type: "textarea",
                        placeholder: "Read guide...",
                        required: false,
                        guide: "Research (Section 5) is about the FACTS. Job Preferences (Section 6) is about YOUR MOTIVATION and REALITY GAP. Why do YOU want it, and is your idea of it realistic?"
                    }
                ]
            },
            {
                title: "Job Choice 1",
                questions: [
                    { id: "s6_j1_title", label: "Job Title", type: "text" },
                    { id: "s6_j1_sal", label: "How much salary do you think this pays?", type: "text", guide: "Enter a number or range. Does this match what you researched?" },
                    { id: "s6_j1_main_sal", label: "Is salary the MAIN reason you want this?", type: "radio", options: ["Yes", "No"] },
                    { id: "s6_j1_work", label: "What specific work interests you in this?", type: "textarea", minChar: 10, guide: "Example: 'diagnosing diseases' (Doctor) or 'optimizing code' (Engineer)." },
                    { id: "s6_j1_admire", label: "Is there someone you admire who does this?", type: "text" },
                    { id: "s6_j1_fam", label: "Did family suggest this to you?", type: "radio", options: ["Yes, I want it too", "Yes, doing it for them", "No"] },
                    { id: "s6_j1_real_reason", label: "The REAL #1 reason (Be brutally honest)", type: "textarea", minChar: 10, guide: "Why this job above all others? Salary? Prestige? Genuine passion? The AI will catch if you aren't honest." },
                    { id: "s6_j1_imag", label: "Describe typical day as you imagine it", type: "textarea", minChar: 10, guide: "What do you think you'll be doing at 2 PM on a Tuesday in this job?" },
                    { id: "s6_j1_realistic", label: "Is your imagination realistic?", type: "radio", options: ["Realistic", "Partly", "Romanticized", "Don't know"], guide: "Comparing what you imagine vs. what your research showed." },
                    { id: "s6_j1_gap", label: "What's the gap between your imagination and reality?", type: "textarea", minChar: 10, guide: "Example: 'I imagined 70% helping people, reality is 40% paperwork.'"}
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Mother's Perspective",
        questions: [
            { id: "s7_m1", label: "What are 3 specific things she does BETTER than most people her age? (with examples)", type: "textarea", minChar: 10, guide: "Mom: Please give real examples, not just labels like 'patient'. Example: 'She explains things 5 different ways when tutoring cousins without getting frustrated'." },
            { id: "s7_m2", label: "What does she struggle with? (Be honest)", type: "textarea", minChar: 10, guide: "Mom: Does she give up easily? Is she a perfectionist about things that don't matter? Be real." },
            { id: "s7_m3", label: "Which best describe her? (Check 4-5 that are TRUE)", type: "checkbox-group", options: ["Organized and responsible", "Creative and thinks differently", "Good with people", "Practical", "Logical", "Empathetic", "Curious", "Confident", "Patient", "Disciplined", "Gives up easily", "Stubborn"] },
            { id: "s7_m4", label: "What task or activity makes her lose track of time?", type: "textarea", minChar: 10 },
            { id: "s7_m5", label: "What do relatives/neighbors/teachers compliment her on?", type: "textarea", minChar: 10 },
            { id: "s7_m6", label: "What field would you recommend for her and WHY?", type: "textarea", minChar: 10, guide: "What path plays to her real strengths that you've seen?" },
            { id: "s7_m7", label: "What are you worried about regarding her future?", type: "textarea", minChar: 10 },
            { id: "s7_m8", label: "On scale 1-10, how confident are you she knows what she wants?", type: "number", min: 1, max: 10 }
        ]
    },
    {
        id: 7,
        title: "Younger Sibling's Perspective",
        questions: [
            { id: "s8_s1_1", label: "Genuinely good at thing #1 (with example)", type: "textarea", minChar: 10 },
            { id: "s8_s1_2", label: "Genuinely good at thing #2 (with example)", type: "textarea", minChar: 10 },
            { id: "s8_s1_3", label: "Genuinely good at thing #3 (with example)", type: "textarea", minChar: 10 },
            { id: "s8_s2", label: "When you have a problem, what do you ask her for help with?", type: "textarea", minChar: 10 },
            { id: "s8_s3", label: "How would you describe her to a friend? (Not flattering, just real)", type: "textarea", minChar: 10, guide: "Don't try to be nice. How would you actually describe her personality to a friend?" },
            { id: "s8_s4", label: "What bugs you about her?", type: "textarea", minChar: 10 },
            { id: "s8_s5", label: "Do you think she knows what she's good at?", type: "radio", options: ["Yes", "No", "Partially - why?"] },
            { id: "s8_s5_why", label: "If partially/no, why?", type: "textarea", required: false },
            { id: "s8_s6", label: "If you had to pick ONE job for her, what would it be? (and why?)", type: "textarea", minChar: 10 },
            { id: "s8_s7", label: "Is she following her own interest or doing what parents want?", type: "radio", options: ["Her interest", "Parents' expectations", "Mix of both", "Don't know"], guide: "What's your honest observation as a sibling?" }
        ]
    },
    {
        id: 8,
        title: "AI Disruption & Future-Proof Career",
        subsections: [
            {
                title: "Impact Assessment",
                questions: [
                    { id: "s9_j1_ai_impact", label: "How much will AI impact your Job Choice 1?", type: "radio", options: ["High", "Medium", "Low"], guide: "High = AI can do most tasks. Low = Needs human empathy or original research." },
                    { id: "s9_j1_ai_why", label: "Why do you think that?", type: "textarea", minChar: 10 },
                    { id: "s9_j1_tasks", label: "What specific tasks might AI automate in this job?", type: "textarea", minChar: 10, guide: "Example for Writer: 'Writing basic social media captions' (Automated) vs 'Investigative journalism' (Human)." },
                    { id: "s9_j1_human", label: "What parts require human skills?", type: "textarea", minChar: 10 },
                    { id: "s9_j1_2035", label: "Will this job exist in 2035 as it is now?", type: "radio", options: ["Yes, definitely", "Yes, but changed", "No", "Unsure"] },
                    { id: "s9_j1_learn", label: "Are you willing to learn AI/coding alongside this field?", type: "radio", options: ["Yes", "No", "Maybe"] }
                ]
            },
            {
                title: "General View",
                questions: [
                    { id: "s9_gen_automated", label: "Which jobs do you know are being automated RIGHT NOW?", type: "textarea", minChar: 10 },
                    { id: "s9_gen_research", label: "Have you researched AI impact on your chosen fields?", type: "radio", options: ["Yes", "No", "A little"], guide: "Did you use Google, AI, or articles to check this?" }
                ]
            }
        ]
    }
];
