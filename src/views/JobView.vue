<template>
  <div>
    <PageBanner :image="banner" page="Jobs"/>

    <a-card :bordered="false">
      <div>
        <h4 class="text-center text-secondary">Jobs / {{ job.id }}</h4>
        <br>
        <div class="d-flex flex-row justify-content-center">
          <EditJobModal :job="job" />
          <span style="width: 30px"></span>
          <a-button type="danger" @click="deleteJob()">
            Delete
          </a-button>
        </div>
        <br><br>

        <div class="row mb-5">
          <div class="col-md-3"></div>
          <div class="col-md-6">
            <a-card>
              <h5 class="text-center text-secondary mb-4">Job Details</h5>
              <table class="table table-light table-sm table-striped table-bordered">
                <tr>
                  <th class="text-secondary">Date</th>
                  <td>{{ job.date }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Job Number</th>
                  <td>{{ job.id }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Customer Name</th>
                  <td>{{ job.customer_name }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Description</th>
                  <td>{{ job.description }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Quantity</th>
                  <td>{{ job.quantity }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Quotation</th>
                  <td>{{ job.quotation_amount }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Work in Progress</th>
                  <td>
                    <a-progress :percent="job.work_in_progress" status="active" />
                  </td>
                </tr>

                <tr>
                  <th class="text-secondary">Order Number</th>
                  <td>{{ job.order_number }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Invoice Number</th>
                  <td>{{ job.invoice_number }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Invoice Amount</th>
                  <td>{{ job.invoice_amount }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Delivery Note Number</th>
                  <td>{{ job.delivery_note_number }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Department</th>
                  <td>{{ job.department.name }}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Finished</th>
                  <td>{{ job.work_in_progress >= 100 ? "Finished" : "Unfinished"}}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Invoiced</th>
                  <td>{{ job.invoice_number ? "Yes" : "Not Invoiced"}}</td>
                </tr>

                <tr>
                  <th class="text-secondary">Collected</th>
                  <td>{{ job.delivery_note_number ? "Collected" : "Not Yet Collected"}}</td>
                </tr>

              </table>
            </a-card>
          </div>
          <div class="col-md-3"></div>
        </div>

      </div>


    </a-card>
  </div>
</template>

<script>
import AllJobs from "@/components/DataTables/AllJobs";
import AddJob from "@/components/Modals/AddJob";
import PageBanner from "@/components/Layouts/Banners/PageBanner";
import banner from "@/assets/images/banners/jobs_banner.jpg";
import {MY_HTTP} from "@/my_http/axiosInstance";
import EditJobModal from "@/components/Modals/EditJobModal";
import Swal from "sweetalert2";

export default {
  name: "JobView",
  components: {EditJobModal, AllJobs, AddJob, PageBanner},
  created() {
    this.getData();
  },
  data(){
    return {
      banner: banner,
      job: {},
      id: this.$route.params.id,
    }
  },
  methods: {
    doDelete(){
      MY_HTTP.delete('/api/jobs/' + this.$route.params.id)
          .then(response => {
            Swal.fire({
              icon: 'success',
              title: 'Job Deleted Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }).then( () => {
        this.$router.push({ name: 'Jobs' });
      } )
    },
    deleteJob(){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.doDelete()
        }
      })
    },
    getData(){
      MY_HTTP.get('/api/jobs/' + this.id)
        .then(response => {
          this.job = response.data
        })
    }
  }
}
</script>

<style scoped>

</style>