<template>
  <div>
    <PageBanner :image="banner" page="Jobs"/>

    <a-card :bordered="false">
      <div>
        <h4 class="text-center text-secondary">Jobs</h4>
        <br>
        <div class="d-flex flex-row justify-content-center">
          <AddJob />
          <span style="width: 30px"></span>
          <a-button>
            Import
          </a-button>
        </div>
        <br>
        <hr class="text-secondary my-3" style="width: 30%; margin: auto">
        <br>
      </div>

      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="ALL JOBS">
          All Jobs
          <AllJobs />
        </a-tab-pane>
        <a-tab-pane key="2" tab="WORK IN PROGRESS">
          Work In Progress
        </a-tab-pane>
        <a-tab-pane key="3" tab="FINISHED JOBS">
          Finished Jobs
        </a-tab-pane>
        <a-tab-pane key="4" tab="INVOICED JOBS">
          Invoiced
        </a-tab-pane>
        <a-tab-pane key="5" tab="COLLECTED JOBS">
          Collectted Jobs
        </a-tab-pane>

      </a-tabs>


    </a-card>
  </div>
</template>

<script>
import PageBanner from "@/components/Layouts/Banners/PageBanner";
import banner from "@/assets/images/banners/jobs_banner.jpg"
import AddJob from "@/components/Modals/AddJob";
import AllJobs from "@/components/DataTables/AllJobs";
export default {
  name: "Jobs",
  components: {AllJobs, AddJob, PageBanner},
  data(){
    return {
      banner: banner,
    }
  }
}
</script>

<style scoped>

</style>