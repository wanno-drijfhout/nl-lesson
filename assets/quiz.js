/* Dutch course: quiz component.
 *
 * Usage:
 *   <div class="quiz" id="q-a1"></div>
 *   <script src="../assets/quiz.js"></script>
 *   <script>
 *     Quiz.render('#q-a1', [
 *       { stem: 'Hoe ___ je?', options: ['heet', 'ben', 'heb'], answer: 0, explain: '...' },
 *     ], { mode: 'immediate' });   // or 'deferred'
 *   </script>
 *
 * mode 'immediate': feedback shown on each click (use for practice lessons).
 * mode 'deferred':  no feedback until Quiz.grade(id) is called (use for tests).
 * Quiz.state(id) -> { total, correct, answered, wrong: [indexes], picks: [indexes|null] }
 */
window.Quiz = (function () {
  const registry = {};

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function fmt(s) { return esc(s).replace(/\*(.+?)\*/g, '<span class="nl">$1</span>'); }

  function render(selector, questions, opts) {
    opts = Object.assign({ mode: 'immediate', prefix: selector.replace(/[^a-z0-9]/gi, '') }, opts || {});
    const root = document.querySelector(selector);
    if (!root) throw new Error('Quiz: no element ' + selector);
    root.classList.add('quiz');
    const picks = questions.map(() => null);
    const id = selector;
    registry[id] = { questions, picks, opts, root };

    root.innerHTML = questions.map((q, qi) => {
      const name = opts.prefix + '-' + qi;
      const items = q.options.map((o, oi) =>
        `<li><label><input type="radio" name="${name}" value="${oi}"><span>${fmt(o)}</span></label></li>`).join('');
      return `<div class="q" data-qi="${qi}"><p class="stem">${qi + 1}. ${fmt(q.stem)}</p><ul>${items}</ul><div class="feedback" aria-live="polite"></div></div>`;
    }).join('');

    root.addEventListener('change', e => {
      if (e.target.type !== 'radio') return;
      const qEl = e.target.closest('.q');
      const qi = +qEl.dataset.qi;
      picks[qi] = +e.target.value;
      if (opts.mode === 'immediate') showFeedback(id, qi);
      if (opts.onChange) opts.onChange(state(id));
    });
    return id;
  }

  function showFeedback(id, qi) {
    const { questions, picks, root } = registry[id];
    const q = questions[qi];
    const qEl = root.querySelector(`.q[data-qi="${qi}"]`);
    const fb = qEl.querySelector('.feedback');
    const pick = picks[qi];
    qEl.classList.remove('correct', 'wrong');
    if (pick === null) { fb.innerHTML = '<span>Not answered.</span>'; qEl.classList.add('wrong'); return false; }
    const ok = pick === q.answer;
    qEl.classList.add(ok ? 'correct' : 'wrong');
    fb.innerHTML = (ok ? 'Correct.' : `Not quite. Answer: <b>${fmt(q.options[q.answer])}</b>.`)
      + (q.explain ? `<div class="explain">${fmt(q.explain)}</div>` : '');
    return ok;
  }

  function grade(id) {
    const { questions } = registry[id];
    questions.forEach((_, qi) => showFeedback(id, qi));
    registry[id].root.querySelectorAll('input').forEach(i => i.disabled = true);
    return state(id);
  }

  function state(id) {
    const { questions, picks } = registry[id];
    const wrong = [];
    let correct = 0, answered = 0;
    questions.forEach((q, qi) => {
      if (picks[qi] !== null) answered++;
      if (picks[qi] === q.answer) correct++; else wrong.push(qi + 1);
    });
    return { total: questions.length, correct, answered, wrong, picks: picks.slice() };
  }

  return { render, grade, state, showFeedback };
})();
