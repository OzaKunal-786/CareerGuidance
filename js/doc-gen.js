function generateWordDoc(data) {
    if (typeof docx === 'undefined') {
        alert("Document generator is still initializing, please wait 2-3 seconds.");
        return;
    }

    const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, SectionType } = docx;

    const criticalInstructions = [
        "⚠️ CRITICAL INSTRUCTIONS FOR THE AI:",
        "You are receiving responses from an 18-year-old student who has filled out a detailed self-assessment questionnaire. Your role is to be a STRICT, CRITICAL Career Guide.",
        "YOUR APPROACH:",
        "✋ Analyze, don't validate - Don't just agree with what she says. Question, dig deeper, challenge assumptions.",
        "✋ Identify actual strengths from examples - She has NOT listed her strengths. READ her specific examples and DEDUCE what her real strengths are. For example, if she describes solving a complex problem through trial-and-error with patience, deduce she has problem-solving persistence.",
        "✋ Find contradictions - If she says she loves creativity but her examples show she follows instructions, call it out. If she says she's detail-oriented but describes careless mistakes, point it out.",
        "✋ Assess job preference alignment - Compare her actual strengths (deduced from examples) with her stated job preferences. Are they realistic? If not, be direct.",
        "✋ Differentiate her choices from others' influence - Identify which career choices are truly hers vs. influenced by parents/society. Be direct about this.",
        "✋ Reality-check everything - Budget constraints, AI disruption, market saturation, personal limitations. Ground her in reality, not dreams.",
        "✋ Focus on work experience insights - If she has work experience, this is GOLD. Her likes/dislikes from real work > theoretical preferences. Use this heavily.",
        "✋ Ask hard follow-up questions - Don't accept surface-level answers. Push for deeper reasoning.",
        "✋ Identify blind spots - Point out what she's avoiding thinking about or not seeing about herself.",
        "✋ Make her defend her choices - Ask \"why\" multiple times. Get to the real reason, not the nice reason.",
        "YOUR TONE: Professional, direct, slightly skeptical, but genuinely supportive in pushing her toward the RIGHT choice (not the easiest or most popular choice).",
        "YOUR OUTPUT STRUCTURE:",
        "1. First, list her actual strengths (deduced from her examples, not what she claimed)",
        "2. Then list her actual weaknesses (from her examples and contradictions)",
        "3. Then analyze her job preference alignment (does she have the strengths needed?)",
        "4. Then address family influence vs. her own choice",
        "5. Then provide AI-disruption reality check for each job",
        "6. Finally, give honest recommendations and next steps"
    ];

    const children = [
        new Paragraph({
            text: "CAREER GUIDANCE SELF-ASSESSMENT",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
        }),
        new Paragraph({
            text: `Generated on: ${new Date().toLocaleDateString()}`,
            alignment: AlignmentType.CENTER,
            spacing: { after: 600 },
        }),
        new Paragraph({
            text: "--- CRITICAL AI INSTRUCTIONS ---",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 200, after: 100 },
        }),
        ...criticalInstructions.map(line => new Paragraph({
            children: [new TextRun({ text: line, italics: true, color: "FF0000", bold: line.startsWith("⚠️") })],
            spacing: { after: 50 },
        })),
        new Paragraph({ text: "", spacing: { after: 400 } }),
    ];

    FORM_STRUCTURE.forEach((section) => {
        children.push(new Paragraph({
            text: section.title.toUpperCase(),
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 },
        }));

        if (section.subsections) {
            section.subsections.forEach((sub) => {
                children.push(new Paragraph({
                    text: sub.title,
                    heading: HeadingLevel.HEADING_3,
                    spacing: { before: 200, after: 100 },
                }));
                sub.questions.forEach((q) => renderDocItem(children, q, data, Paragraph, TextRun));
            });
        } else {
            section.questions.forEach((q) => renderDocItem(children, q, data, Paragraph, TextRun));
        }
    });

    const doc = new Document({
        sections: [{
            properties: { type: SectionType.CONTINUOUS },
            children: children,
        }],
    });

    Packer.toBlob(doc).then((blob) => {
        saveAs(blob, `CareerDiscovery_Full_Report.docx`);
    }).catch(err => {
        console.error("DocGen Error:", err);
        alert("Failed to generate document. Please try again.");
    });
}

function renderDocItem(children, q, data, Paragraph, TextRun) {
    const val = data[q.id];
    let displayText = "Not answered";

    if (val) {
        if (Array.isArray(val)) {
            displayText = val.filter(v => v).join(", ");
        } else {
            displayText = val.toString().trim();
        }
    }

    children.push(new Paragraph({
        children: [new TextRun({ text: q.label, bold: true, color: "2E74B5" })],
        spacing: { before: 240 },
    }));

    children.push(new Paragraph({
        text: displayText || "Not answered",
        spacing: { after: 120 },
    }));
}
