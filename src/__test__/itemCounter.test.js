import items from '../modules/itemCounter.js';

test('this test must be 4', () => {
  document.body.innerHTML = `
<p id="num"></p>
<div id="list">
<div class="grid-item"></div>
<div class="grid-item"></div>
<div class="grid-item"></div>
<div class="grid-item"></div>
</div>
`;
  items();
  const number = document.querySelector('#num');
  expect(Number(number.textContent)).toBe(4);
});