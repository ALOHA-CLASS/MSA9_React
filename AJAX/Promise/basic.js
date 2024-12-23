let promise = new Promise(function(resolve, reject) {
    // 비동기 작업 수행
    let success = false; // 작업이 성공했다고 가정

    if (success) {
        resolve("작업 성공");
    } else {
        reject("작업 실패");
    }
});

promise
    .then(function(result) {
        console.log(result); // 작업 성공 시 실행
    }).catch(function(error) {
        console.error(error); // 작업 실패 시 실행
    }).finally(function() {
        console.log("작업 완료"); // 성공 또는 실패와 관계없이 항상 실행
    });
