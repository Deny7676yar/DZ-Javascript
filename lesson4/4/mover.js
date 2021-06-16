let mover = {
    makeStep(nextPoint){
        return nextPoint.x >= 0 && nextPoint.x < config.colsCount && 
               nextPoint.y >= 0 && nextPoint.y < config.rowsCount;

    },
    /**
     * Получает и отдает напрвление от пользователя.
     * @returns{int} Возвращаем нправление, введеное пользователем.
     */
    getDirection() {
        const availableDirection = [2,4,6,8,1,3,7,9];
        while(true) {
            let direction = parseInt(prompt("Введите число(2,4,6,8,1,3,7 или 9), куда вы хотите переместтиться, 'Отмена' для выхода."));
            if (isNaN(direction)){
                return null;
            }
            if (!availableDirection.includes(direction)) {
                alert('Для перемещения нужно ввести одно из чисел 2,4,6 или 8.');
                continue;
            }
            return direction;
        }

    },
    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }
        return nextPosition;
    }
};