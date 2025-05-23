function addLine(id) {
    const container = document.getElementById(id);
    const div = document.createElement('div');
    div.innerHTML = `<input type="checkbox" class="checkbox"><input type="text" placeholder="What's your plan...">`;
    container.appendChild(div);
  }

  document.querySelectorAll('.bottle').forEach(bottle => {
    bottle.addEventListener('click', () => {
      bottle.classList.toggle('filled');
    });
  });