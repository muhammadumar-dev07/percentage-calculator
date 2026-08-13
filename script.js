function calculatePercentage() {
  const obtainedMarksRef = document.querySelector("#obtMarks");
  const obtainedMarks = Number(obtainedMarksRef.value);

  const totalMarksRef = document.querySelector("#totalMarks");
  const totalMarks = Number(totalMarksRef.value);

  const percentage = (obtainedMarks / totalMarks) * 100;
  console.log(percentage);

  const percRef =document.querySelector("#percentage");
  percRef.innerHTML = `Calculated Percentage is ${percentage.toFixed(2)}`;
}

function calculateBMI() {
    const userHeight =document.querySelector("#height");
    const Height =Number(userHeight.value);

    const userWeight =document.querySelector("#weight");
    const weight = Number(userWeight.value);

    const bmi = weight/(Height**2);
    console.log(bmi);

    const bmiRef = document.querySelector("#bmi");
    bmiRef.innerHTML=`Your BMI is ${bmi.toFixed(2)}`;
}
