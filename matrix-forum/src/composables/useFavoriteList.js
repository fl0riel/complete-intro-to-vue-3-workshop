import { ref } from "vue";

const favoriteList = ref([]);
const addToFavoriteList = (item) => {
    if (item) {
        const found = favoriteList.value.find((el) => item === el);

        if (!found) {
            favoriteList.value.push(item);
        }
    }
}

const removeFromFavoriteList = (item) => {
    if (item) {
        const foundIndex = favoriteList.value.indexOf(item);

        if(foundIndex >= 0) {
            favoriteList.value.splice(foundIndex, 1);
        }

    }
}

export function useFavoriteList() {

    return {
        favoriteList,
        addToFavoriteList,
        removeFromFavoriteList
    }
}