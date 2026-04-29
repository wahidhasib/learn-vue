<template>
    <div class="card">
        <div class="card-header">
            <h5 class="card-title">Guess Number</h5>
        </div>
        <div class="card-body">
            <p>Your lucky number is generated between 1-. Please enjoy this game!</p>
            <p>Lucky Number is </p>
            <form>
                <GuessNumber></GuessNumber>
                <Message></Message>
            </form>
        </div>
    </div>
</template>

<script setup>
import GuessNumber from './GuessNumber.vue';
import Message from './Message.vue';

</script>