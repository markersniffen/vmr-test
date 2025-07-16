function go(url) {
  const overlay = document.getElementById('white-fade');
  overlay.classList.add('active');

  setTimeout(() => {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        console.log(temp)

        const newContent = temp.querySelector('#svg-wrapper');
        if (!newContent) return;

        document.getElementById('svg-wrapper').replaceWith(newContent);

        // Optionally fade overlay back out
        overlay.classList.remove('active');
      });
  }, 400); // Wait for white overlay to fade in
}

function show(id) {
	const div = document.getElementById(id);
  if (div.classList.contains('hidden')) {
    div.classList.remove('hidden'); // fade in
  } else {
    div.classList.add('hidden'); // fade out
  }
}

function hide(id) {
	const div = document.getElementById(id);
	div.classList.add('show-fade');
	div.classList.add('hidden');
}