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
          <h5 class="my-2 text-center text-secondary">All Jobs</h5>
          <AllJobs />
        </a-tab-pane>
        <a-tab-pane key="2" tab="WORK IN PROGRESS">
          <h5 class="my-2 text-center text-secondary">Work in Progress</h5>
          <WorkInProgress />
        </a-tab-pane>
        <a-tab-pane key="3" tab="FINISHED JOBS">
          <h5 class="my-2 text-center text-secondary">Finished Jobs</h5>
          <Finished />
        </a-tab-pane>
        <a-tab-pane key="4" tab="INVOICED JOBS">
          <h5 class="my-2 text-center text-secondary">Invoiced Jobs</h5>
          <Invoiced />
        </a-tab-pane>
        <a-tab-pane key="5" tab="COLLECTED JOBS">
          <h5 class="my-2 text-center text-secondary">Collected Jobs</h5>
          <CollectedJobs />
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
import WorkInProgress from "@/components/DataTables/WorkInProgress";
import Finished from "@/components/DataTables/Finished";
import Invoiced from "@/components/DataTables/Invoiced";
import CollectedJobs from "@/components/DataTables/CollectedJobs";
export default {
  name: "Jobs",
  components: {CollectedJobs, Invoiced, Finished, WorkInProgress, AllJobs, AddJob, PageBanner},
  data(){
    return {
      banner: banner,
    }
  }
}
</script>

<style scoped>

</style>