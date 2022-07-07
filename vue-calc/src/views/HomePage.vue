<template>
  <div>
    <div class="wrapper">
      <h1>Vue Invoice Calc</h1>
      <input-form></input-form>
    </div>
  </div>
</template>

<script>
import InputForm from "../components/InputForm.vue";
export default {
  components: {
    InputForm,
  },
};
</script>
