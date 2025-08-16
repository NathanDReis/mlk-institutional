const demoButtons = document.querySelectorAll('.demo-btn');

demoButtons.forEach(button => {
    button.addEventListener('click', (event: any) => {
      const num = event.target.id.split('-')[2];
      showVersion(num);
    });
});

function showVersion(num: 1 | 2 | 3) {
    // Remove active class from all versions and buttons
    document.querySelectorAll('.version').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
    
    // Add active class to selected version and button
    document.getElementById(`version${num}`)!.classList.add('active');
    document.getElementById(`demo-btn-${num}`)!.classList.add('active');
}

showVersion(1);