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

## Incident, 2026-09-15
- A 12 Sep session had already created MISSION.md, NOTES.md, RESOURCES.md, assets/style.css and lessons/0001-skills-assessment.html. My first `ls -la` printed nothing (the shell aliases ls to eza, which failed silently), so I wrote MISSION.md, NOTES.md and style.css fresh and overwrote the originals. No backup or transcript on this machine holds them. RESOURCES.md was not touched; its entries are merged into the new version.
- Two lesson files now carry number 0001. `0001-placement-test.html` is the canonical placement test (37 questions, five levels, writing tasks, results export). `0001-skills-assessment.html` is the earlier 20-question draft, kept untouched; compatibility CSS was added so it still renders.
- Lesson: always run `find . -maxdepth 2 -type f` before writing into a workspace here.
