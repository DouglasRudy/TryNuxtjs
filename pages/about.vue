<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, sunt vel facilis doloremque consectetur
      fuga
      nesciunt tempora sapiente voluptatem ullam?
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, sunt vel facilis doloremque consectetur
      fuga
      nesciunt tempora sapiente voluptatem ullam?
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch('/api/ninja?name=mario', {
    method: 'post',
    body: {
      age: 30
    }
  });
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>
