<template>
    <div class="container-notFound">
        <div class="notFoundCenter mt-10" id="notFoundPage">
            <p>Parece que no hay resultados disponibles actualmente.</p>
        </div>         
    </div>
</template>

<style>

#notFoundPage p {
  color: #000;
  font-weight: bold;
}

.container-notFound {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
}
.notFoundCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1));
  border-radius: 5px;
  padding: 0.5rem;
}

.notFoundCenter p {
  font-size: 29px;
  font-weight: 400;
  margin-bottom: 0;
  color: #fff !important;
  margin-right: 0.5rem;
}
    
</style>