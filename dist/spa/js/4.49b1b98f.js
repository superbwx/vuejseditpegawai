(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",attrs:{id:"app"}},[a("h4",{staticClass:"head"},[t._v(" Application")]),a("div",[a("q-markup-table",{directives:[{name:"show",rawName:"v-show",value:t.persons.length,expression:"persons.length"}],attrs:{flat:"",bordered:"",dense:"screen.lt.sm"}},[a("thead",{staticClass:"bg-teal"},[a("tr",t._l(t.columns,(function(e){return a("th",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),a("tbody",[t._l(t.persons,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s))]),a("td",[t._v("\n              "+t._s(e.lname)+"\n            ")]),a("td",[t._v("\n              "+t._s(e.fname)+"\n            ")]),a("td",{attrs:{align:"center"}},[t._v("\n              "+t._s(e.age)+" years\n            ")]),a("td",[t._v("\n              "+t._s(e.job)+"\n            ")]),a("td",[t._v("\n              "+t._s(e.address)+"\n            ")]),a("td",{attrs:{align:"center"}},[a("q-btn",{staticClass:"q-mr-sm",attrs:{push:"",color:"primary",round:"",icon:"edit",size:"sm"},on:{click:function(e){return t.edit(s)}}}),a("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"archive",size:"sm"},on:{click:function(e){return t.archive(s)}}})],1)])})),a("tr",[a("td",{attrs:{colspan:"2"}},[a("div",[a("q-input",{ref:"lname",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"Last Name"},model:{value:t.input.lname,callback:function(e){t.$set(t.input,"lname",e)},expression:"input.lname"}})],1)]),a("td",[a("div",[a("q-input",{attrs:{placeholder:"First Name",id:"fname",type:"text",standout:"",label:"First Name"},model:{value:t.input.fname,callback:function(e){t.$set(t.input,"fname",e)},expression:"input.fname"}})],1)]),a("td",[a("div",[a("q-input",{attrs:{placeholder:"Age",id:"age",type:"text",standout:"",label:"Age"},model:{value:t.input.age,callback:function(e){t.$set(t.input,"age",e)},expression:"input.age"}})],1)]),a("td",[a("div",[a("q-input",{attrs:{placeholder:"Job",id:"job",type:"text",standout:"",label:"Job"},model:{value:t.input.job,callback:function(e){t.$set(t.input,"job",e)},expression:"input.job"}})],1)]),a("td",[a("div",[a("q-input",{attrs:{placeholder:"Address",id:"address",type:"text",standout:"",label:"Address"},model:{value:t.input.address,callback:function(e){t.$set(t.input,"address",e)},expression:"input.address"}})],1)]),a("td",{attrs:{align:"center"}},[a("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"add"},on:{click:t.add}})],1)])],2)]),a("q-markup-table",{directives:[{name:"show",rawName:"v-show",value:t.bin.length,expression:"bin.length"}],attrs:{flat:"",bordered:"",dense:"screen.lt.sm"}},[a("thead",{staticClass:"bg-teal"},[a("tr",t._l(t.columns,(function(e){return a("th",{key:e},[t._v("\n              "+t._s(e)+"\n            ")])})),0)]),a("tbody",t._l(t.bin,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(s))]),a("td",[t._v("\n              "+t._s(e.lname)+"\n            ")]),a("td",[t._v("\n              "+t._s(e.fname)+"\n            ")]),a("td",{attrs:{align:"center"}},[t._v("\n              "+t._s(e.age)+" years\n            ")]),a("td",[t._v("\n              "+t._s(e.job)+"\n            ")]),a("td",[t._v("\n              "+t._s(e.address)+"\n            ")]),a("td",{attrs:{align:"center"}},[a("q-btn",{staticClass:"q-mr-sm",attrs:{push:"",color:"primary",round:"",icon:"delete",size:"sm"},on:{click:function(e){return t.deplete(s)}}}),a("q-btn",{attrs:{push:"",color:"primary",round:"",icon:"restore",size:"sm"},on:{click:function(e){return t.restore(s)}}})],1)])})),0)]),a("q-dialog",{attrs:{persistent:"","transition-show":"scale","transition-hide":"scale"},model:{value:t.form_edit,callback:function(e){t.form_edit=e},expression:"form_edit"}},[a("q-card",{staticClass:"msb-card-dialog"},[a("div",{staticClass:"q-pa-md"},[a("h4",{staticClass:"center-align"},[t._v("Edit Data")]),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s6"},[a("q-input",{ref:"lname",staticClass:"q-mt-sm",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"Last Name"},model:{value:t.editInput.lname,callback:function(e){t.$set(t.editInput,"lname",e)},expression:"editInput.lname"}}),a("q-input",{ref:"lname",staticClass:"q-mt-sm",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"Frist Name"},model:{value:t.editInput.fname,callback:function(e){t.$set(t.editInput,"fname",e)},expression:"editInput.fname"}}),a("q-input",{ref:"lname",staticClass:"q-mt-sm",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"age"},model:{value:t.editInput.age,callback:function(e){t.$set(t.editInput,"age",e)},expression:"editInput.age"}}),a("q-input",{ref:"lname",staticClass:"q-mt-sm",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"Job"},model:{value:t.editInput.job,callback:function(e){t.$set(t.editInput,"job",e)},expression:"editInput.job"}}),a("q-input",{ref:"lname",staticClass:"q-mt-sm",attrs:{placeholder:"Last Name",id:"lname",type:"text",standout:"",label:"Address"},model:{value:t.editInput.address,callback:function(e){t.$set(t.editInput,"address",e)},expression:"editInput.address"}})],1)])])]),a("div",[a("q-btn",{staticClass:"q-mr-sm",attrs:{push:"",color:"primary",label:"Delete"},on:{click:t.close}}),a("q-btn",{attrs:{push:"",color:"primary",label:"update"},on:{click:t.update}})],1)])])],1)],1),a("q-dialog",{model:{value:t.alertstatus,callback:function(e){t.alertstatus=e},expression:"alertstatus"}},[a("q-card",[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Alert")])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v('\n          Alert "'+t._s(t.dataFrommm)+'"\n        ')]),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},n=[],i=(a("a434"),a("758b"),{name:"app",data:function(){return{dataFrommm:null,alertstatus:!1,form_edit:!1,columns:["Index","Last Name","First Name","Age","Job","Address","Actions "],persons:[{lname:"ADIASSA",fname:"Ethiel",age:20,job:"Web Developer",address:"Lome-Togo"},{lname:"ADUFU",fname:"Patrick",age:20,job:"Banker",address:"Senegal-Dakar"},{lname:"MOUTON",fname:"John",age:28,job:"Scientist",address:"New-York/USA"},{lname:"SMITH",fname:"Luther",age:18,job:"Pilot",address:"London/GB"},{lname:"WALTER",fname:"Ramses Peter",age:38,job:"Doctor",address:"Paris/France"},{lname:"GEORGES",fname:"Luther",age:45,job:"Musician",address:"Vienne"},{lname:"MICHAEL",fname:"Daven",age:27,job:"Boxer",address:"Pekin/China"}],bin:[],input:{lname:"WADE",fname:"Johnson",age:38,job:"Comedian",address:"Roma/Italia"},editInput:{lname:null,fname:null,age:null,job:null,address:null}}},methods:{add:function(){for(var t in this.persons.push({lname:this.input.lname,fname:this.input.fname,age:this.input.age,job:this.input.job,address:this.input.address}),this.addDataServer(this.input.lname),this.input)this.input[t]="";this.$refs.lname.focus()},edit:function(t){this.form_edit=!0,this.editInput=this.persons[t],console.log(this.editInput),this.persons.splice(t,1)},archive:function(t){this.bin.push(this.persons[t]),this.persons.splice(t,1)},restore:function(t){this.persons.push(this.bin[t]),this.bin.splice(t,1)},close:function(){this.form_edit=!1},update:function(){for(var t in this.form_edit=!1,this.persons.push({lname:this.editInput.lname,fname:this.editInput.fname,age:this.editInput.age,job:this.editInput.job,address:this.editInput.address}),this.updateDataServer(this.editInput.lname),this.editInput)this.editInput[t]=""},deplete:function(t){this.bin.splice(t,1),this.deleteDataServer(this.editInput.lname)},getDataServer:function(t){var e=this,a="https://superbwx2.000webhostapp.com/dummytest.php?key=read";this.$axios.get(a).then((function(t){e.getPostDataJsonSuccess(t)})).catch((function(t){console.log("kok error respons")}))},deleteDataServer:function(t){var e=this,a="https://superbwx2.000webhostapp.com/dummytest.php?key=delete&nama=".concat(t);this.$axios.get(a).then((function(t){e.getPostDataJsonSuccess(t)})).catch((function(t){console.log("kok error respons")}))},updateDataServer:function(t){var e=this,a="https://superbwx2.000webhostapp.com/dummytest.php?key=update&nama=".concat(t);this.$axios.get(a).then((function(t){e.getPostDataJsonSuccess(t)})).catch((function(t){console.log("kok error respons")}))},addDataServer:function(t){var e=this,a="https://superbwx2.000webhostapp.com/dummytest.php?key=add&nama=".concat(t);this.$axios.get(a).then((function(t){e.getPostDataJsonSuccess(t)})).catch((function(t){console.log("kok error respons")}))},getPostDataJsonSuccess:function(t){this.dataFrommm=t.data,console.log("dataAkhir:",this.dataFrommm),this.alertstatus=!0}}}),o=i,r=a("2877"),l=a("2bb1"),d=a("9c40"),c=a("27f9"),u=a("24e8"),p=a("f09f"),m=a("a370"),h=a("4b7e"),b=a("7f67"),f=a("eebe"),v=a.n(f),g=Object(r["a"])(o,s,n,!1,null,null,null);e["default"]=g.exports;v()(g,"components",{QMarkupTable:l["a"],QBtn:d["a"],QInput:c["a"],QDialog:u["a"],QCard:p["a"],QCardSection:m["a"],QCardActions:h["a"]}),v()(g,"directives",{ClosePopup:b["a"]})}}]);