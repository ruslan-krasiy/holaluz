<template>
  <div class="loader">
    <div class="spinner"></div>
    <span>Searching...</span>
  </div>
</template>

<style>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(2px);
  gap: 1em;
}
.loader span {
  font-size: 12px;
  color: #808080;
}
.spinner {
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 3px;
  background: 
    radial-gradient(farthest-side,#ffa516 95%,#0000) 50% 0/12px 12px no-repeat,
    radial-gradient(farthest-side,#0000 calc(100% - 5px),#ffa516 calc(100% - 4px)) content-box;
  animation: l6 2s infinite ;
}
@keyframes l6 {to{transform: rotate(1turn)}}

</style>