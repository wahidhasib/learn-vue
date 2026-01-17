import { ref } from "vue";

// Vue recomends to use "use" prefix for composible functions.
// export function naming convention is camelCase. Always start with lowercase letter.

export function useCounter(initialValue = 0, step = 1) {
    const count = ref(initialValue);

    const increment = () => {
        count.value += step;
    }

    const decrement = () => {
        count.value -= step;
    }

    return {
        count,
        increment,
        decrement
    };
}