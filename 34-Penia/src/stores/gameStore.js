import { defineStore } from "pinia";
import { computed, ref } from "vue";

// Define a store named "gameStore" using options API
// export const useGameStore = defineStore("gameStore", {
//     state: () => ({
//         score: 50,
//         maxHealth: 100,
//         maxAttack: 30,
//         maxDefense: 10,
//     }),
//     getters: {
//         getScore() {
//             return this.score;
//         },
//     },
//     actions: {
//         resetGame() {
//             this.score = 50;
//         },
//         setNextAttack() {
//             let attack = Math.floor(Math.random() * this.maxAttack);
//             console.log("Attack: ", attack);
//             this.score += attack;
//         },
//         setNextDefense() {
//             let defense = Math.floor(Math.random() * this.maxDefense);
//             console.log("Defense: ", defense);
//             this.score -= defense;
//         },
//     }
// });


export const useGameStore = defineStore("gameStore", () => {
    const score = ref(50);
    const maxHealth = ref(100);
    const maxAttack = ref(30);
    const maxDefense = ref(10);

    // getter
    const getScore = computed(() => score.value);

    // actions
    const setNextAttack = () => {
        const attack = Math.floor(Math.random() * maxAttack.value) + 1;
        console.log("Attack:", attack);
        score.value += attack;
    };

    const setNextDefense = () => {
        const defense = Math.floor(Math.random() * maxDefense.value) + 1;
        console.log("Defense:", defense);
        score.value -= defense;
    };

    const resetGame = () => {
        score.value = 50;
    };

    return {
        score,
        maxHealth,
        maxAttack,
        maxDefense,
        getScore,
        setNextAttack,
        setNextDefense,
        resetGame,
    };
});

// By default, Pinia uses shallow reactive for state properties.
// they cached getters, so they only recompute when their dependencies change.
// If you want to change the getters to be non-cached and always recompute, you can define them as methods instead of getters. and naming convention should be set prefix the accual function name with "calculate"