<template>
  <div>
    <a-button type="primary" @click="showModal">
      Edit
    </a-button>
    <a-modal v-model="visible" title="Edit Job" @ok="handleOk">
      <a-form  :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">

        <a-form-item label="Date">
          <a-input v-model="job.date" type="date"/>
        </a-form-item>

        <a-form-item label="Client">
          <a-input v-model="job.customer_name" placeholder="Customer Name"/>
        </a-form-item>

        <a-form-item label="Description">
          <a-input v-model="job.description" placeholder="Description"/>
        </a-form-item>

        <a-form-item label="Quantity">
          <a-input type="number" v-model="job.quantity" placeholder="Quantity"/>
        </a-form-item>

        <a-form-item label="Quote Amount">
          <a-input type="number" v-model="job.quotation_amount" placeholder="Quotation Amount ($)"/>
        </a-form-item>

        <a-form-item label="Quote #">
          <a-input v-model="job.quotation_number" placeholder="Quotation Number"/>
        </a-form-item>


        <a-form-item label="Invoice #">
          <a-input v-model="job.invoice_number" placeholder="Quotation Number"/>
        </a-form-item>

        <a-form-item label="Invoice Amt">
          <a-input v-model="job.invoice_amount" placeholder="Quotation Number"/>
        </a-form-item>

        <a-form-item label="WIP">
          <div class="d-flex flex-row">
            <a-input type="range" min="1" max="100" v-model="job.work_in_progress"  placeholder="Work In Progress"/>
            <span style="margin-left: 5px; font-weight: bold" class="mt-1">{{ job.work_in_progress }}</span>
          </div>
        </a-form-item>

        <a-form-item label="D Note">
          <a-input v-model="job.delivery_note_number" placeholder="Delivery Note Number"/>
        </a-form-item>

        <a-form-item label="Department">
          <a-select v-model="job.department_id" placeholder="Select Department">
            <a-select-option v-for="dept in departments" :value="dept.id" :key="dept.id">
              {{ dept.name }}
            </a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit" @click="submitForm">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import {MY_HTTP} from "@/my_http/axiosInstance";
import Swal from "sweetalert2";

export default {
  name: "EditJobModal",
  props: ['job'],
  data() {
    return {
      visible: false,
      departments: {}
    };
  },
  created() {
    this.getDepartments();
  },
  methods: {
    submitForm(){
      MY_HTTP.put('/api/jobs/' + this.$route.params.id, this.job)
          .then(response => {
            console.log("Job ", response.data);
            Swal.fire({
              icon: 'success',
              title: 'Changes Saved Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          })
          .catch(e => {
            Swal.fire(
                'Error',
                'An Error',
                'error'
            )
          })
    },
    getDepartments(){
      MY_HTTP.get('/api/departments_list')
          .then(response => {
            this.departments = response.data
          })
          .catch(e => {
            console.log("An Error Occured")
          })
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
}
</script>

<style scoped>

</style>