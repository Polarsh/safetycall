<template>
  <v-card>
    <v-card-title>
      Home
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table :headers="headers"
                    :items="displayGuardians"
                    :items-per-page="5"
                    :search="search"
                    class="elevation-1" ref="guardiansTable">
        <template v-slot:top>
          <v-dialog v-model="dialog" max-width="500px">
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.id" label="Id"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.username" label="User Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.firstName" label="First Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.lastName" label="Last Name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.gender" label="Gender"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.address" label="Address"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import GuardianApiService from '../services/guardians-api.service';
export default {
  name: "guardians",
  data() {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {text: 'Id', value: 'id'},
        {text: 'Username', value: 'username'},
        {text: 'Email', value: 'email'},
        {text: 'First Name', value: 'firstName'},
        {text: 'Last Name', value: 'lastName'},
        {text: 'Gender', value: 'gender'},
        {text: 'Address', value: 'address'},
      ],
      guardians: [],
      displayGuardians: [],
      editedItem: {
        id: 0,
        username:'',
        email:'',
        firstName:'',
        lastName: '',
        gender:'',
        address: '',
      }
    }
  },
  methods: {
    retrieveGuardians() {
      GuardianApiService.getAll()
          .then(response => {
            this.guardians = response.data;
            this.displayGuardians = response.data.map(this.getDisplayGuardian);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getDisplayGuardian(guardian) {
      return {
        id: guardian.id,
        username:guardian.username,
        email:guardian.email,
        firstName:guardian.firstName,
        lastName:guardian.lastName,
        gender:guardian.gender,
        address:guardian.address
      };
    },
  },
  mounted() {
    this.retrieveGuardians();
  }
}
</script>
<style scoped>
</style>