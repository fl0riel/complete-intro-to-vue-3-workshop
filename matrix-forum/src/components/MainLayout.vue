<script>
export default {
    
}
</script>

<template>
    <header class="main-header">
        <slot name="header"></slot>
    </header>
    <main class="main-content">
        <slot name="main"></slot>
    </main>
    <footer class="main-footer">
        <slot name="footer"></slot>
    </footer>
</template>

<style>
.main-header {
    border: 5px solid salmon;
}
.main-content {
    border: 5px solid teal;
}
.main-footer {
    border: 5px solid lightgreen;
}
</style>