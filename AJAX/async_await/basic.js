async function getBoard(no) {
    try {
        const response = await fetch(`http://192.168.30.10:8080/boards/${no}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

async function displayBoard(no) {
    const board = await getBoard(no);
    console.log(board);
}

displayBoard( 15 );
