function digitObject(num) {
    if (!Number.isInteger(num) || num >999) {
        console.log("Значение должно быть целым и в диапазоне от[0..999].");
        return{};
    }

    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundereds: Math.floor(num / 100),
    }
}

console.log(digitObject(354))