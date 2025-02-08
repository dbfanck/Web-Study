let num = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 2 === 0) {
        num++;
    }
}

console.log(`짝수의 개수는 ${num}개입니다.`);