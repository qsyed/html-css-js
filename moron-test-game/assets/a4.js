function a4() {
    let iconArr = [];
    let left = 50;
    let right = 50;
    let top = 15;
    iconArr.push({
        class: ['text-icon'],
        color: black,
        content: '4',
        size: 5,
        position: [left, top],
        transform: null,
        filter: 'none',
    });

    for (let i = 2; i <= 17; i++) {
        if (i % 2 === 0) {
            left -= 3;
            top += 7;
            iconArr.push({
                class: ['text-icon'],
                color: black,
                content: '4',
                size: 5,
                position: [left, top],
                transform: null,
                filter: 'none',
            });
        } else {
            right += 3;
            iconArr.push({
                class: ['text-icon'],
                color: black,
                content: '4',
                size: 5,
                position: [right, top],
                transform: null,
                filter: 'none',
            });
        }
    }
    left = 50;
    top = 46;
    right = 50;
    iconArr.push({
        class: ['text-icon'],
        color: black,
        content: '4',
        size: 5,
        position: [left, top],
        transform: null,
        filter: 'none',
    });
    for (let i = 18; i <= 21; i++) {
        if (i % 2 === 0) {
            left -= 4;
            iconArr.push({
                class: ['text-icon'],
                color: black,
                content: '4',
                size: 5,
                position: [left, top],
                transform: null,
                filter: 'none',
            });
        } else {
            right += 4;
            iconArr.push({
                class: ['text-icon'],
                color: black,
                content: '4',
                size: 5,
                position: [right, top],
                transform: null,
                filter: 'none',
            });
        }
    }
    return iconArr;
}