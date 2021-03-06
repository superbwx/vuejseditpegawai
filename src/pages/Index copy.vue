<template>
  <div class="q-pa-md">
    <table class="table-responsive bordered highlight centered hoverable z-depth-2" 
      v-for="count in person"
      :key="count.lname"
    >
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in person" :key="person">
          <td>{{index}}</td>
          <td>
            {{person.lname}}
          </td>
          <td>
            {{person.fname}}
          </td>
          <td>
            {{person.age}} years
          </td>
          <td>
            {{person.job}}
          </td>
          <td>
            {{person.address}}
          </td>
          <td style="width: 18%;">
            <a href="#modal" @click="edit(index)" class="btn waves-effect waves-light yellow darken-2"><i class="material-icons">edit</i>
            </a>
            <a href="#!" class="btn waves-effect waves-light red darken-2" @click="archive(index)"><i class="material-icons">archive</i>
            </a>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="input-field">
              <input placeholder="Placeholder" ref="lname" v-model="input.lname" id="lname" type="text">
              <label for="lname">Last Name</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input placeholder="Placeholder" v-model="input.fname" id="fname" type="text">
              <label for="fname">First Name</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input placeholder="Placeholder" v-model="input.age" id="age" type="text">
              <label for="age">Age</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input placeholder="Placeholder" v-model="input.job" id="job" type="text">
              <label for="job">Job</label>
            </div>
          </td>
          <td>
            <div class="input-field">
              <input placeholder="Placeholder" v-model="input.address" id="address" type="text">
              <label for="address">Address</label>
            </div>
          </td>
          <td><a href="#!" @click="add" class="btn btn-waves green darken-2"><i class="material-icons">add</i></a></td>
        </tr>
      </tbody>
    </table>

    <table class="table-responsive centered bordered striped highlight z-depth-1 hoverable" v-show="bin.length">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(person,index) in person" :key="person">
          <td>{{index}}</td>
          <td>
            {{person.lname}}
          </td>
          <td>
            {{person.fname}}
          </td>
          <td>
            {{person.age}} years
          </td>
          <td>
            {{person.job}}
          </td>
          <td>
            {{person.address}}
          </td>
          <td>
            <a href="#!" @click="restore(index)" class="btn waves-effect waves-light blue darken-2"><i class="material-icons">restore</i>
            </a>
            <a href="#!" @click="deplete(index)" class="btn waves-effect waves-light red darken-2"><i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  
  data () {
    return {
      columns: ['Index', 'Last Name', 'First Name', 'Age', 'Job', 'Address', 'Actions '],

      person: [{
        lname: "ADIASSA",
        fname: "Ethiel",
        age: 20,
        job: "Web Developer",
        address: "Lome-Togo"
      }, {
        lname: "ADUFU",
        fname: "Patrick",
        age: 20,
        job: "Banker",
        address: "Senegal-Dakar"
      }, {
        lname: "MOUTON",
        fname: "John",
        age: 28,
        job: "Scientist",
        address: "New-York/USA"
      }, {
        lname: "SMITH",
        fname: "Luther",
        age: 18,
        job: "Pilot",
        address: "London/GB"
      }, {
        lname: "WALTER",
        fname: "Ramses Peter",
        age: 38,
        job: "Doctor",
        address: "Paris/France"
      }, {
        lname: "GEORGES",
        fname: "Luther",
        age: 45,
        job: "Musician",
        address: "Vienne"
      }, {
        lname: "MICHAEL",
        fname: "Daven",
        age: 27,
        job: "Boxer",
        address: "Pekin/China"
      }],

      bin:[],
      input: {
        lname: "WADE",
        fname: "Johnson",
        age: 38,
        job: "Comedian",
        address: "Roma/Italia"
      },

      editInput: {
        lname: "",
        fname: "",
        age: 0,
        job: "",
        address: ""
      }


    }
  },

  methods: {
    add() {

    },

    edit(index) {

    },

    archive(index) {

    },

    deleteindex() {

    },

    restore(index) {

    },
    
    update(index) {

    },
    
    deplete(index) {

    },
  }
  
}
</script>
