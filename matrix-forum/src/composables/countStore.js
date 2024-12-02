import { ref } from "vue";

const globalCounter = ref(50);
const incrementGlobalCounter = () => {
    globalCounter.value += 1000;
}

export function useCounter() {
    const localCounter = ref(35);

    const incrementLocalCounter = () => {
        localCounter.value += 15;
    }

    return {
        incrementGlobalCounter,
        incrementLocalCounter,
        globalCounter,
        localCounter
    }
}