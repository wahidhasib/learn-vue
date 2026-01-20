<template>
    <div class="card">
        <div class="card-body">
            <p class="text-primary">Lets play the game!</p>
            <h2 class="text-primary">Current Score : {{ gameStore.score }}</h2>
            <p class="text-warning">Max Score : {{ gameStore.maxHealth }}</p>
            <br>
            <div class="alert alert-success" v-if="gameStore.score >= gameStore.maxHealth">You Won!</div>
            <div class="alert alert-danger" v-if="gameStore.score <= 0">You Lost!</div>
            <div class="mb-3" v-if="gameStore.score >= gameStore.maxHealth || gameStore.score <= 0">
                <button class="btn btn-outline-danger" @click="gameStore.resetGame()">Reset the game</button>
            </div>
            <div class="row" v-if="gameStore.score > 0 && gameStore.score <= gameStore.maxHealth">
                <div class="col-4">
                    <button class="btn btn-success" @click="incrementScore">Increment</button>
                </div>
                <div class="col-4">
                    <button class="btn btn-danger" @click="decrementScore">Decrement</button>
                </div>
                <div class="col-6 mx-auto mt-3">
                    <button class="btn btn-warning" @click="randomScore">Random</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useGameStore } from "../stores/gameStore";

const gameStore = useGameStore();

function incrementScore() {
    gameStore.setNextAttack();
}

function decrementScore() {
    gameStore.setNextDefense();
}

function randomScore() {
    Math.random() > 0.5 ? incrementScore() : decrementScore();
}
</script>