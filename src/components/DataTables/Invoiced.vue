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

    <table class="compact  order-column invoiced-jobs" style="width: 100%; font-size: 11px; line-height: 12px; font-weight: lighter">
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
      </tbody>
    </table>
  </div>
</template>

<script>
import API_BASE from "@/scripts/variables/apiBase";
import {MY_HTTP} from "@/my_http/axiosInstance";
import Swal from "sweetalert2";

export default {
  name: "Invoiced",
  data(){
    return {
      from: "",
      to: "",
      filtered: false
    }
  },
  created() {
    this.renderTable();
  },
  methods: {
    filterJobs(){
      MY_HTTP.post('/api/login', {
        from: this.from,
        to: this.to
      })
          .then(response => {
            this.filtered = true;
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              showConfirmButton: false,
              timer: 1500
            })
          })
    },

    renderTable() {
      $(function () {
        var table = $('.invoiced-jobs').DataTable({
          processing: true,
          serverSide: true,
          pageLength: 50,
          dom: 'Bfrtip',
          ajax: API_BASE + "api/invoiced",
          columns: [
            {data: 'date', name: 'date'},
            {data: 'id', name: 'id'},
            {data: 'customer_name', name: 'customer_name'},
            {data: 'description', name: 'description'},
            {data: 'quantity', name: 'quantity'},
            {data: 'quotation_amount', name: 'quotation_amount'},
            {data: 'quotation_number', name: 'quotation_number'},
            {data: 'work_in_progress', name: 'work_in_progress'},
            {data: 'department_id', name: 'department_id'},
            {data: 'action', name: 'action'},
          ]
        });
      });
    }
  }
}
</script>

<style scoped>

</style>