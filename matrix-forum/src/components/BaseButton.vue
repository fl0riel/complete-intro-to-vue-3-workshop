<script>
export default {
    props: {
        buttonType: {
            type: String,
            required: false,
            default: () => 'button'
        }
    },
    emits: ['click'],
}
</script>

<template>
    <div>
        <button :type="buttonType" @click="$emit('click')">
        <slot></slot>
    </button>
    </div>
</template>