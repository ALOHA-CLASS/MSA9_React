// 날짜 포맷 모듈
export const formatDate = (dateString) => {
    const date = new Date(dateString)

    // 1️⃣ 포맷 option 으로 날짜형식 지정하기
    // const options = { 
    //     year: 'numeric', month: 'numeric', day: 'numeric', 
    //     hour: 'numeric', minute: 'numeric', second: 'numeric', 
    //     hour12: true, timeZone: 'Asia/Seoul'   };
    // return date.toLocaleString('ko-KR', options)   

    // 2️⃣ 직접 포맷 형식 지정하기
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

}

export const byteToUnit = (byte) => {
    const unitMultiple = {
        "B"     : 1,
        "KB"    : 1024,
        "MB"    : 1024 * 1024,
        "GB"    : 1024 * 1024 * 1024,
        "TB"    : 1024 * 1024 * 1024 * 1024
    }

    let unit = ""
    for( const key in unitMultiple ) {
        if( byte >= unitMultiple[key] ) {
            unit = key
        }
    }

    // 환산
    // 2500 byte ➡ 2.xx KB
    return parseFloat(byte / unitMultiple[unit]).toFixed(2) + " " + unit
}