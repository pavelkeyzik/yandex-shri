(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;
    var MAP;
    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */
    function solution(map) {
        // todo: подсчитать кол-во островов на карте

        const M = map.length;
        const N = map[0].length;
        let countOfIslands = 0;

        MAP = Array(M + 2).fill().map(() => Array(N + 2).fill(0));

        for(let i = 0; i < MAP.length - 2; i++) {
            for(let j = 0; j < MAP[0].length - 2; j++) {
                MAP[i+1][j+1] = map[i][j];
            }
        }

        for(let i = 1; i < M + 2; i++) {
            for(let j = 1; j < N + 2; j++) {
                if(MAP[i][j] == 1) {
                    countOfIslands++;
                    count(i, j);
                }
            }
        }

        return countOfIslands;
    }

    function count(i, j) {
        if(MAP[i][j] != 1) {
            return;
        }
        MAP[i][j] = 0;
        count(i + 1, j);
        count(i - 1, j);
        count(i, j + 1);
        count(i, j - 1);
    }

    root.SHRI_ISLANDS.solution = solution;
})(this);
