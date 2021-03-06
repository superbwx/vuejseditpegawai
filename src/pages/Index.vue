<template>
<div id="app" class="q-pa-md">
  <h4 class="head"> Application</h4>
  <div>
    <q-markup-table flat bordered v-show="persons.length" dense="screen.lt.sm">
        <thead class="bg-teal">
          <tr>
            <th v-for="column in columns" :key="column">
              {{column}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person,index) in persons" :key="index">
            <td>{{index}}</td>
            <td>
              {{person.lname}}
            </td>
            <td>
              {{person.fname}}
            </td>
            <td align="center">
              {{person.age}} years
            </td>
            <td>
              {{person.job}}
            </td>
            <td>
              {{person.address}}
            </td>
            <td align="center">
              <q-btn push color="primary" round icon="edit" @click="edit(index)" size="sm" class="q-mr-sm"/>
              <q-btn push color="primary" round icon="archive" @click="archive(index)" size="sm"/>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div>
                <q-input placeholder="Last Name" ref="lname" v-model="input.lname" id="lname" type="text" standout label="Last Name"/>
              </div>
            </td>
            <td>
              <div>
                <q-input placeholder="First Name" v-model="input.fname" id="fname" type="text" standout label="First Name"/>
              </div>
            </td>
            <td>
              <div>
                <q-input placeholder="Age" v-model="input.age" id="age" type="text" standout label="Age"/>
              </div>
            </td>
            <td>
              <div>
                <q-input placeholder="Job" v-model="input.job" id="job" type="text" standout label="Job"/>
              </div>
            </td>
            <td>
              <div>
                <q-input placeholder="Address" v-model="input.address" id="address" type="text" standout label="Address"/>
              </div>
            </td>
            <td align="center">
              <q-btn push color="primary" round icon="add" @click="add"/>
              </td>
          </tr>
        </tbody>
    </q-markup-table>

    <q-markup-table flat bordered v-show="bin.length" dense="screen.lt.sm">
        <thead class="bg-teal">
          <tr>
            <th v-for="column in columns" :key="column">
              {{column}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person,index) in bin" :key="index">
            <td>{{index}}</td>
            <td>
              {{person.lname}}
            </td>
            <td>
              {{person.fname}}
            </td>
            <td align="center">
              {{person.age}} years
            </td>
            <td>
              {{person.job}}
            </td>
            <td>
              {{person.address}}
            </td>
            <td align="center">
              <q-btn push color="primary" round icon="delete" @click="deplete(index)" size="sm" class="q-mr-sm"/>
              <q-btn push color="primary" round icon="restore" @click="restore(index)" size="sm"/>
            </td>
          </tr>
        </tbody>
    </q-markup-table>

    
    <q-dialog v-model="form_edit" persistent transition-show="scale" transition-hide="scale">
				
				<q-card class="msb-card-dialog">

    <div class="q-pa-md">
      <h4 class="center-align">Edit Data</h4>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <q-input class="q-mt-sm" placeholder="Last Name" ref="lname" v-model="editInput.lname" id="lname" type="text" standout label="Last Name"/>
              <q-input class="q-mt-sm" placeholder="Last Name" ref="lname" v-model="editInput.fname" id="lname" type="text" standout label="Frist Name"/>
              <q-input class="q-mt-sm" placeholder="Last Name" ref="lname" v-model="editInput.age" id="lname" type="text" standout label="age"/>
              <q-input class="q-mt-sm" placeholder="Last Name" ref="lname" v-model="editInput.job" id="lname" type="text" standout label="Job"/>
              <q-input class="q-mt-sm" placeholder="Last Name" ref="lname" v-model="editInput.address" id="lname" type="text" standout label="Address"/>
            </div>            
          </div>
        </form>
    </div>
    <div >
      <q-btn push color="primary" label="Delete" @click="close" class="q-mr-sm"/>
      <q-btn push color="primary" label="update" @click="update"/>
    </div>
  </div>
  </q-card>

			</q-dialog>

  

  </div><q-dialog v-model="alertstatus" >
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Alert "{{dataFrommm}}"
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog></div>
</template>

<script>
import { api } from 'boot/axios'

export default {
  name: 'app',
  data() {return{
    dataFrommm: null,
    alertstatus: false,
    form_edit: false,
    columns: ['Index', 'Last Name', 'First Name', 'Age', 'Job', 'Address', 'Actions '],
    persons: [{
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
    bin: [],
    input: {
      lname: "WADE",
      fname: "Johnson",
      age: 38,
      job: "Comedian",
      address: "Roma/Italia"
    },
    editInput: {
      lname: null,
      fname: null,
      age: null,
      job: null,
      address: null
    }
  }},
  methods: {
    //function to add data to table
    add: function() {
      this.persons.push({
        lname: this.input.lname,
        fname: this.input.fname,
        age: this.input.age,
        job: this.input.job,
        address: this.input.address
      });
      this.addDataServer(this.input.lname)

      for (var key in this.input) {
        this.input[key] = '';
      }
      this.$refs.lname.focus();
    },
    //function to handle data edition
    edit: function(index) {
      this.form_edit = true
      this.editInput = this.persons[index];
      console.log(this.editInput);
      this.persons.splice(index, 1);
    },
    //function to send data to bin
    archive: function(index) {
      this.bin.push(this.persons[index]);
      this.persons.splice(index, 1);
    },
    //function to restore data
    restore: function(index) {
      this.persons.push(this.bin[index]);
      this.bin.splice(index, 1);
    },
    close: function() {
      this.form_edit = false
    },
    //function to update data
    update: function(){
      // this.persons.push(this.editInput);
      this.form_edit = false;
       this.persons.push({
        lname: this.editInput.lname,
        fname: this.editInput.fname,
        age: this.editInput.age,
        job: this.editInput.job,
        address: this.editInput.address
      })
      this.updateDataServer(this.editInput.lname)
       for (var key in this.editInput) {
        this.editInput[key] = '';
      }
    },
    //function to defintely delete data 
    deplete: function(index) {
      // console.log(this.bin[index]);
      this.bin.splice(index, 1);
      this.deleteDataServer(this.editInput.lname)
    },

    getDataServer(nama) {
      let apiUrl = 'https://superbwx2.000webhostapp.com/dummytest.php?key=read'
      this.$axios.get(
        apiUrl
        ).then(result => {
          this.getPostDataJsonSuccess(result)
        }).catch(err => {console.log('kok error respons')})
    },

    deleteDataServer(nama) {
      let apiUrl = `https://superbwx2.000webhostapp.com/dummytest.php?key=delete&nama=${nama}`
      this.$axios.get(
        apiUrl
        ).then(result => {
          this.getPostDataJsonSuccess(result)
        }).catch(err => {console.log('kok error respons')})
    },

    updateDataServer(nama) {
      let apiUrl = `https://superbwx2.000webhostapp.com/dummytest.php?key=update&nama=${nama}`
      this.$axios.get(
        apiUrl
        ).then(result => {
          this.getPostDataJsonSuccess(result)
        }).catch(err => {console.log('kok error respons')})
    },

    addDataServer(nama) {
      let apiUrl = `https://superbwx2.000webhostapp.com/dummytest.php?key=add&nama=${nama}`
      this.$axios.get(
        apiUrl
        ).then(result => {
          this.getPostDataJsonSuccess(result)
        }).catch(err => {console.log('kok error respons')})
    },

    getPostDataJsonSuccess(result) {
      this.dataFrommm = result.data
      console.log('dataAkhir:', this.dataFrommm)
      this.alertstatus = true
    },
  },
  
}

</script>
