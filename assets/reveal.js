/* Dutch course: write-then-compare component.
 *
 * Usage:
 *   <div id="w-1"></div>
 *   <script src="../assets/reveal.js"></script>
 *   <script>
 *     Reveal.render('#w-1', [
 *       { prompt: 'Tomorrow I am going to Amsterdam.', model: 'Morgen ga ik naar Amsterdam.', note: 'time word first, verb second' },
 *     ]);
 *   </script>
 *
 * The learner types a Dutch version, presses Compare, sees the model answer,
 * then marks themself "Got it" or "Missed". Reveal.state(id) -> { total, got, missed }.
 * Self-marking is deliberate: free production has no single right answer.
 */
window.Reveal = (function () {
  const registry = {};
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function fmt(s) { return esc(s).replace(/\*(.+?)\*/g, '<span class="nl">$1</span>'); }

  function render(selector, items, opts) {
    opts = opts || {};
    const root = document.querySelector(selector);
    if (!root) throw new Error('Reveal: no element ' + selector);
    root.classList.add('reveal');
    const marks = items.map(() => null);
    registry[selector] = { items, marks, root, opts };
    root.innerHTML = items.map((it, i) => `
      <div class="q" data-i="${i}">
        <p class="stem">${i + 1}. ${fmt(it.prompt)}</p>
        <textarea rows="2" placeholder="Schrijf het in het Nederlands…" aria-label="Your Dutch"></textarea>
        <p class="no-print"><button class="secondary" data-act="compare">Compare</button></p>
        <div class="model" hidden>
          <p class="nl-block">${fmt(it.model)}</p>
          ${it.note ? `<p class="explain">${fmt(it.note)}</p>` : ''}
          <p class="no-print"><button data-act="got">Got it</button> <button class="secondary" data-act="missed">Missed</button></p>
        </div>
        <div class="feedback" aria-live="polite"></div>
      </div>`).join('');
    root.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      const qEl = b.closest('.q'); const i = +qEl.dataset.i;
      if (b.dataset.act === 'compare') { qEl.querySelector('.model').hidden = false; b.disabled = true; return; }
      marks[i] = b.dataset.act === 'got';
      qEl.classList.remove('correct', 'wrong');
      qEl.classList.add(marks[i] ? 'correct' : 'wrong');
      qEl.querySelectorAll('.model button').forEach(x => x.disabled = true);
      qEl.querySelector('.feedback').textContent = marks[i] ? 'Marked as got it.' : 'Marked as missed. Come back to this one tomorrow.';
      if (opts.onChange) opts.onChange(state(selector));
    });
    return selector;
  }
  function state(id) {
    const { marks } = registry[id];
    return { total: marks.length, got: marks.filter(m => m === true).length, missed: marks.filter(m => m === false).length };
  }
  return { render, state };
})();
