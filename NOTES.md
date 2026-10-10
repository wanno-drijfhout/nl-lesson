# Notes

## User
- Name: not recorded. Native Ukrainian. Fluent English. Wants teaching in English.
- Output style preference in this tool: ELI5. Small words, short sentences. Keep chat replies short. Lessons can be richer.
- Wants native-like fluency in BOTH informal and formal registers. Register (u/je, formal vocabulary) is a first-class topic, not an afterthought.

## Working agreements
- Never trust parametric knowledge for grammar claims. Cite ANS, Taaladvies.net, or Onze Taal.
- Every lesson: one skill, one tangible win, under 15 minutes.
- Quiz options: same number of words each, no formatting hints.
- Ukrainian parallels to use when helpful:
  - Ukrainian has no articles. Dutch de/het is a memorisation job. Treat article as part of the word.
  - Ukrainian has free word order via cases. Dutch has fixed V2 word order and no cases. This will be the biggest habit to build.
  - Ukrainian has aspect (perfective/imperfective). Dutch has none; tense and adverbs do that job.
  - Ukrainian has palatalised consonants; Dutch has the guttural g/ch, the "ui" and "eu" vowels, and the "ij/ei". Pronunciation lesson early.
  - Both have T/V distinction (ти/ви vs je/u). Good hook for register.

## Session log
- 2026-09-15: Workspace created. Lesson 0001 = placement test. Waiting for results.
- 2026-09-25: Results in: B2, partial C1. Wrote learning record 0001, lesson 0002 (future without *zullen*), reference/future-and-plans.html, reference/glossary.html, assets/reveal.js (write-then-compare widget). Lesson plan from here: formal-letter vocabulary swaps, informal particles, nemen/doen/maken collocations, compound spelling.
- 2026-09-25 (later): the learner asked for lessons in advance. Wrote 0003 (formal email), 0004 (particles), 0005 (collocations) plus reference sheets. Not yet calibrated on 0002 results; adjust 0006 once he pastes his rewrites. Next planned: compound spelling (tussen-s, double consonants, *onmiddellijk*), then a listening lesson. Van Dale's free dictionary closed 10 Dec 2025; RESOURCES updated.
- 2026-10-05: the learner asked for ten more lessons with more vocabulary. Wrote 0006 (compounds, tussen-s), 0007 (spoken short forms, the listening lesson), 0008 (English loan shapes), 0009 (fixed prepositions), 0010 (connectors), 0011 (diminutives, birthday party), 0012 (job interview), 0013 (gemeente, official Dutch), 0014 (de/het by ending), 0015 (idioms). Each now has a Word list section of 16 to 22 words with Ukrainian; all lists are collected in reference/vocabulary.html. 0011 to 0013 are the three rooms of MISSION.md. Still no results back on 0002 to 0005, so 0006 to 0015 are uncalibrated too. Rules were read on Taaladvies, Onze Taal and ANS on the day; word lists, stock phrases and Ukrainian glosses are the teacher's own and are marked so in each lesson. No per-lesson reference sheets this time: the vocabulary sheet replaces them.
- 2026-10-08: wrote 0017 (reactions: balen, wat jammer, jeetje, nee joh, boeien), for the first goal in MISSION.md, the relaxed talk with friends. Interjections by feeling from ANS 11.2.2.1; balen and boeien from Onze Taal. The four groups, the zeg/joh tip and the word list are the teacher's own. Still uncalibrated: no results back on 0002 onwards.
- 2026-10-09: wrote 0018 (the phone call: met + name, six moves, phone alphabet, a call to the huisarts). Name-first answering from Onze Taal 2007; phone alphabet from the Onze Taal pdf and 2014 puzzle; numbers in pairs from Onze Taal 1978; u spreekt met and the not-heard lines from Team Taaladvies (Flemish, but the phrases hold in the Netherlands). The six moves, the dialogue and the word list are the teacher's own. Still uncalibrated.
- 2026-10-10: merged 0018 (was waiting in PR #1) and wrote 0019 (opinions: het eens zijn met, vinden or denken, three openers, an agree-disagree ladder, a team meeting). The fixed het and ermee from Taaladvies; akkoord gaan met from Taaladvies; mijns inziens as formal and archaic from Taaladvies. The vinden/denken split has no source found; it, the ladder, the naar-mijn-mening note and the word list are the teacher's own and marked so. Still uncalibrated.

## Incident, 2026-09-15
- A 12 Sep session had already created MISSION.md, NOTES.md, RESOURCES.md, assets/style.css and lessons/0001-skills-assessment.html. My first `ls -la` printed nothing (the shell aliases ls to eza, which failed silently), so I wrote MISSION.md, NOTES.md and style.css fresh and overwrote the originals. No backup or transcript on this machine holds them. RESOURCES.md was not touched; its entries are merged into the new version.
- Two lesson files now carry number 0001. `0001-placement-test.html` is the canonical placement test (37 questions, five levels, writing tasks, results export). `0001-skills-assessment.html` is the earlier 20-question draft, kept untouched; compatibility CSS was added so it still renders.
- Lesson: always run `find . -maxdepth 2 -type f` before writing into a workspace here.
