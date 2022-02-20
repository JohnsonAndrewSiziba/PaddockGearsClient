<template>
  <table class="compact  order-column all-jobs" style="width: 100%; font-size: 11px; line-height: 12px; font-weight: lighter">
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
</template>

<script>
import API_BASE from "@/scripts/variables/apiBase";

export default {
  name: "AllJobsNew",
  methods: {
    renderTable(){
      $(function () {
        var table = $('.all-jobs').DataTable({
          processing: true,
          serverSide: true,
          pageLength: 50,
          dom: 'Bfrtip',
          ajax: API_BASE + "api/jobs_list",
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
  },
  created() {
    this.renderTable();
  }
}
</script>

<style scoped>

</style>