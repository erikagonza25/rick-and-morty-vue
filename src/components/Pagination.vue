<template>
    <nav>
        <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
            <a class="page-link" href="#" @click="prevPage">Anterior</a>
            </li>
            <li class="page-item"><a class="page-link"><span>Page {{ currentPage }} of {{ totalPages }}</span></a></li>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
            <a class="page-link" href="#" @click="nextPage">Siguiente</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
    currentPage: Number,
    totalPages: Number
    },
    emits: ['nextPage', 'prevPage'],
    methods: {
        prevPage() {
            this.$emit('prevPage')
        },
        nextPage() {
            this.$emit('nextPage')
        }
    }
}
</script>

<style>
.pagination {
    justify-content: center;
    --bs-pagination-border-color: #dee2e6 !important;
}
.page-link {
  color: #fff !important;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1)) !important;
}
.page-link.disabled, .disabled > .page-link {
    color: rgba(255, 255, 255, 0.548) !important;
    background-color: #555555d2 !important;
}
</style>