window.onload = function () {
  alert("Welcome to the CCS114 Student Score Evaluator!");
  let studentName = prompt("Please enter your name:");
  let studentScore = prompt("Please enter your score (0-100):");
  let proceed = confirm("Do you want to evaluate this score and continue?");

  const outputDiv = document.getElementById("output");

  if (!proceed) {
    outputDiv.innerHTML =
      "<span class='error'>Evaluation cancelled by user.</span>";
    return;
  }

  if (
    !studentName ||
    studentName.trim() === "" ||
    !studentScore ||
    studentScore.trim() === ""
  ) {
    outputDiv.innerHTML =
      "<span class='error'>Invalid input: Name and Score cannot be empty.</span>";
    return;
  }

  let parsedScore = Number(studentScore);

  if (isNaN(parsedScore) || parsedScore < 0) {
    outputDiv.innerHTML =
      "<span class='error'>Invalid score: Input must be a positive number.</span>";
    return;
  }

  if (parsedScore === 0) {
    outputDiv.innerHTML =
      "<span class='error'>Invalid score: Zero input is not allowed.</span>";
    return;
  }

  if (parsedScore > 100) {
    outputDiv.innerHTML =
      "<span class='error'>Invalid score: Score cannot be beyond 100.</span>";
    return;
  }

  function evaluateScore(score) {
    if (score >= 90 && score <= 100) {
      return { remark: "Excellent", className: "excellent" };
    } else if (score >= 75 && score <= 89) {
      return { remark: "Passed", className: "passed" };
    } else {
      return { remark: "Failed", className: "failed" };
    }
  }

  let evaluation = evaluateScore(parsedScore);

  outputDiv.innerHTML = `
        <div class="result-text"><strong>User:</strong> ${studentName}</div>
        <div class="result-text"><strong>Score:</strong> ${parsedScore}</div>
        <div class="badge ${evaluation.className}">${evaluation.remark}</div>
    `;
};
