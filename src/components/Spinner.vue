<template>
  <div class="container-spinner">
        <div class="spinnerCenter mt-10" id="spinnerPage">
            <p>Procesando...</p>
            <div class="spinner"></div>
        </div>         
    </div>
</template>

<style>
#spinnerPage p {
  color: #000;
  font-weight: bold;
}
.container-spinner {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
}
.spinnerCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: RGBA(var(--bs-dark-rgb), var(--bs-bg-opacity, 1));
  border-radius: 5px;
  padding: 0.5rem;
}

.spinnerCenter p {
  font-size: 29px;
  font-weight: 400;
  margin-bottom: 0;
  color: #fff !important;
  margin-right: 0.5rem;
}

.spinner {
  border: 4px solid rgb(255 255 255 / 63%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: rgb(168, 80, 168);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>