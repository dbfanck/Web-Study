for (let a = 1; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
        for (let c = 0; c <= 9; c++) {
            let num = (a * 100) + (b * 10) + c;
            let sum = (a ** 3) + (b ** 3) + (c ** 3);

            if (num === sum) {
                console.log(num);
            }
        }
    }
}