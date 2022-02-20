<template>
  <div>

    <h4 class="text-secondary">Filter</h4>
    <a-card :bordered="false" style="width: 45%" class="mb-4">
      <div class="d-flex flex-row text-secondary mt-2">
        <div>
          <h5 class="text-secondary">From</h5>
          <p>
            <input v-model="from" type="date" name="from" id="from">
          </p>
        </div>
        <span style="width: 100px"></span>
        <div>
          <h5 class="text-secondary">To</h5>
          <p>
            <input v-model="to" type="date" name="to" id="to">
          </p>
        </div>
      </div>
      <div>
        <a-button type="primary" @click="filterJobs()">Filter </a-button>
        <a-button v-if="filtered" style="margin-left: 20px" type="success" @click="viewAll()">View All </a-button>
      </div>
    </a-card>

    <hr class="text-secondary mt-2" style="width: 20%" >


    <div v-if="filtered" class="my-3 shadow-sm">
      <h4 class="text-secondary">Filtered Jobs</h4>
      <table class="table-white table-sm table">
        <thead>
        <tr>
          <th>Date</th>
          <th>Job #</th>
          <th>Client</th>
          <th>Descr.</th>
          <th>QTY</th>
          <th>Quote Amt.</th>
          <th>Quote #</th>
          <th>WIP</th>
          <th>Dept. ID</th>
          <th>Details</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="job in filteredJobs">
          <td>{{ job.date }}</td>
          <td>{{ job.id }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="shadow-sm">
      <h4 class="text-secondary">All Jobs</h4>
      <AllJobsNew />
    </div>


  </div>
</template>

<script>
import API_BASE from "@/scripts/variables/apiBase";
import {MY_HTTP} from "@/my_http/axiosInstance";
import Swal from "sweetalert2";
import AllJobsNew from "@/components/DataTables/AllJobsNew";

export default {
  name: "AllJobs",
  components: {AllJobsNew},
  data(){
    return {
      from: "",
      to: "",
      filtered: false,
      filteredJobs: [],
    }
  },
  methods: {
    viewAll(){

    },
    filterJobs(){
      if (this.from == null || this.from === "" || this.to == null || this.to === ""){
        return;
      }
      MY_HTTP.post('/api/all_jobs_filterall_jobs_filter', {
        from: this.from,
        to: this.to
      })
        .then(response => {
          this.filteredJobs = response.data.jobs;
          this.filtered = true;
          Swal.fire({
            icon: 'success',
            title: 'Done!',
            showConfirmButton: false,
            timer: 1500
          });

        })
    },
  },
}
</script>

<style scoped>

</style>