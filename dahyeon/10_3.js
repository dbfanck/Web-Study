function num3(height, weight){
    var bmi = height * height / weight
    if(bmi >= 26) return "비만"
    else if(bmi >= 24 && bmi < 25) return "과체중"
    else if(bmi >= 18.5 && bmi <23) return "정상"
    else if(bmi < 18.5) return "저체중"
}
num3(1.8, 70)