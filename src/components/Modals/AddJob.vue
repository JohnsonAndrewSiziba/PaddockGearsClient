<template>
  <div>
    <a-button @click="showModal">
      Add New
    </a-button>
    <a-modal v-model="visible" title="Add New Job" @ok="handleOk">
      <div class="">

        <a-form  :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">

          <a-form-item label="Date">
            <a-input v-model="date" type="date"/>
          </a-form-item>

          <a-form-item label="Client">
            <a-input v-model="customer_name" placeholder="Customer Name"/>
          </a-form-item>

          <a-form-item label="Description">
            <a-input v-model="description" placeholder="Description"/>
          </a-form-item>

          <a-form-item label="Quantity">
            <a-input type="number" v-model="quantity" placeholder="Quantity"/>
          </a-form-item>

          <a-form-item label="Quote Amount">
            <a-input type="number" v-model="quotation_amount" placeholder="Quotation Amount ($)"/>
          </a-form-item>

          <a-form-item label="Quote #">
            <a-input v-model="quotation_number" placeholder="Quotation Number"/>
          </a-form-item>

<!--          <a-form-item label="Invoice #">-->
<!--            <a-input v-model="invoice_number" placeholder="Quotation Number"/>-->
<!--          </a-form-item>-->

<!--          <a-form-item label="Invoice Amt">-->
<!--            <a-input v-model="invoice_amount" placeholder="Quotation Number"/>-->
<!--          </a-form-item>-->

<!--          <a-form-item label="WIP">-->
<!--            <a-input v-model="work_in_progress" type="number" placeholder="Work In Progress"/>-->
<!--          </a-form-item>-->

          <a-form-item label="WIP">
            <div class="d-flex flex-row">
              <a-input type="range" min="1" max="100" v-model="work_in_progress"  placeholder="Work In Progress"/>
              <span style="margin-left: 5px; font-weight: bold" class="mt-1">{{ work_in_progress }}</span>
            </div>
          </a-form-item>

          <a-form-item label="Department">
            <a-select v-model="department_id" placeholder="Select Department">
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
      </div>
    </a-modal>
  </div>
</template>

<script>
import {MY_HTTP} from "@/my_http/axiosInstance";
import Swal from "sweetalert2";
export default {
  name: "AddJob",
  data() {
    return {
      visible: false,
      date: "",
      customer_name: "",
      description: "",
      quantity: "",
      quotation_amount: "",
      quotation_number: "",
      work_in_progress: 0,
      order_number: "",
      department_id: "",
      delivery_note_number: "",
      invoice_number: "",
      invoice_amount: "",
      departments: [],
    };
  },
  created() {
    this.getDepartments();
  },
  methods: {
    getDepartments(){
      MY_HTTP.get('/api/departments_list')
          .then(response => {
            this.departments = response.data
          })
          .catch(e => {
            console.log("An Error Occured")
          })
    },
    clearForm(){
          this.date = "";
          this.customer_name = "";
          this.description = "";
          this.quantity = "";
          this.quotation_amount = "";
          this.quotation_number = "";
          this.department_id = "";
          this.work_in_progress = "";
          this.invoice_number = "";
          this.delivery_note_number = "";
          this.invoice_amount = "";
    },
    submitForm(){
        if(this.date === "" || this.date === null){
          Swal.fire({
            title: 'Error!',
            text: 'Date cannot be null. Please enter Date.',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
        }

      else if(this.customer_name === "" || this.customer_name === null){
        Swal.fire({
          title: 'Error!',
          text: 'Customer Name cannot be null. Please enter Customer Name.',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }

      else if(this.description === "" || this.description === null){
        Swal.fire({
          title: 'Error!',
          text: 'Description cannot be null. Please enter Description.',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }

      else if(this.quantity === "" || this.quantity === null){
        Swal.fire({
          title: 'Error!',
          text: 'Quantity cannot be null. Please enter Quantity.',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
      else {
          MY_HTTP.post('/api/jobs', {
            date: this.date,
            customer_name: this.customer_name,
            description: this.description,
            quantity: this.quantity,
            quotation_amount: this.quotation_amount,
            quotation_number: this.quotation_number,
            department_id: this.department_id,
            invoice_number: this.invoice_number,
            invoice_amount: this.invoice_amount,
            work_in_progress: this.work_in_progress,
            delivery_note_number: this.delivery_note_number
          })
            .then(response => {
              console.log("Job ", response.data);
              this.clearForm();
              Swal.fire({
                icon: 'success',
                title: 'Job Saved Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }).then(
              () => {
                this.$router.go();
              }
          )
            .catch(e => {
              console.log(e);
              Swal.fire(
                  'Error',
                  'An Error',
                  'error'
              )
            })
        }


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