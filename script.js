

btn.addEventListener('click', function(e) {
    e.preventDefault();


    const name = document.getElementById('inputBox1').value;
    const age = document.getElementById('inputBox2').value;
    const gender = document.getElementById('inputBox3').value;
    const course = document.getElementById('courseInput').value;
    const email = document.getElementById('emailInput').value;
    var btn = document.getElementById("btn")
    var tBody = document.getElementById("tBody")

    if (!name || !age || !course || !email) {
        alert('Please fill in all fields.');
        return;
      }

      if (!gender) {
        alert("Please select a gender.");
        return;
      }

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${gender}</td>
      <td>${course}</td>
      <td>${email}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;

    tBody.appendChild(row);
  });

  tBody.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
      const row = e.target.closest('tr');
      row.remove();
    }
  });