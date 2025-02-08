//답지 참고함

for (let i = 1; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
        for (let k = 0; k <= 9; k++) {
            let num = (i * 100) + (j * 10) + k;
            let sum = (i ** 3) + (j ** 3) + (k ** 3);

            if (num === sum) {
                console.log(num);
            }
        }
    }
}