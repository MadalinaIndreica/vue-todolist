const { createApp } = Vue;

createApp({
    data() {
        return { 
            items: ["portare fuori il cane","fare la spesa","pulire il bagno","fare una doccia rilassante"]

        }
    },
    methods: {
        deleteItem : function(index) {
            this.items.splice(index,1)

        },
        addItem : function() {
             this.items.push(this.newItem)

        }
    }
}).mount("#app")















// const { createApp } = Vue;

// createApp({
//   data() {
//     return {
//       newStudent: {
//         name: "",
//         lastname: "",
//       },
//       students: [],
//     };
//   },
//   methods: {
//     addStudent: function() {
//         // this.students.push({
//         //     name: this.newStudent.name,
//         //     lastname: this.newStudent.lastname
//         // });
//         this.students.push({...this.newStudent})
//         this.newStudent.name = "";
//         this.newStudent.lastname = "";
//     }
//   }
// }).mount("#app");