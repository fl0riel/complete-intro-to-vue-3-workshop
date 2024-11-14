<script>
export default {
    props: {
        characters: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        isMafiaOnline: false
    }),
    created() {
        this.watchAgentsOnline(this.characters);
    },
    methods: {
        watchAgentsOnline(characters) {
            const smithOnline = characters.find(el => el.name === 'Smith' && el.isOnline === true) ? true : false;
            const architectOnline = characters.find(el => el.name === 'Architect' && el.isOnline === true) ? true : false;

            if (smithOnline && architectOnline) {
                this.isMafiaOnline = true;
            } else {
                this.isMafiaOnline = false;
            }
        },
    },
    watch: {
        characters: {
            handler(newValue) {
                this.watchAgentsOnline(newValue);
            },
            deep: true
        }
    }
};</script>

<template>
    <h2 v-if="isMafiaOnline">Mafia is online, RUN!!!!!</h2>
</template>