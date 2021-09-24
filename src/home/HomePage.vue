<template>
  <!-- <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png"  aria-hidden="true" />
    </div>
    <div class="get-started">
      <a href="">Get started</a> building your first robot!
    </div>

  </div> -->
  <div class="p-fluid p-formgrid p-grid">
      <div class="p-field p-col-12 p-md-6">
          <label for="firstname">Firstname</label>
          <InputText id="firstname" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-6">
          <label for="lastname">Lastname</label>
          <InputText id="lastname" type="text" />
      </div>
      <div class="p-field p-col-12">
          <label for="address">Address</label>
          <Textarea id="address" rows="4" />
      </div>
      <div class="p-field p-col-12 p-md-6">
          <label for="city">City</label>
          <InputText id="city" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-3">
          <label for="state">State</label>
          <Dropdown inputId="state" v-model="selectedState" :options="states"
          optionLabel="name" placeholder="Select" />
      </div>
      <div class="p-field p-col-12 p-md-3">
          <label for="zip">Zip</label>
          <InputText id="zip" type="text" />
      </div>
      <div class="p-field p-col-12 p-md-4">
          <label for="icon">Icon</label>
          <Calendar id="icon" v-model="date3" :showIcon="true" dateFormat="mm/dd/yy" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
  data() {
    return {
      selectedState: null,
      states: [
        { name: 'Arizona', code: 'Arizona' },
        { name: 'California', value: 'California' },
        { name: 'Florida', code: 'Florida' },
        { name: 'Ohio', code: 'Ohio' },
        { name: 'Washington', code: 'Washington' },
      ],
      cities1: [],
      cities2: [],
      city1: null,
      city2: null,
      date3: null,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
/* .robot {
  height: 300px;
} */
</style>
