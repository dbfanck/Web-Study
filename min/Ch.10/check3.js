function calculateBMI(height, weight) {
    let BMI = weight / ((height / 100) ** 2);

    if (BMI >= 26) {
        console.log("비만");
    }
    else if (BMI <= 25 && BMI >= 24) {
        console.log("과체중");
    }
    else if (BMI <= 23 && BMI >= 18.5) {
        console.log("정상");
    }
    else {
        console.log("저체중");
    }
}

calculateBMI(180, 70);