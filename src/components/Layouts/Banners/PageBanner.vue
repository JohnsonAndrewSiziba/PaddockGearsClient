<template>
  <div>
    <!-- Header Background Image -->
    <div class="profile-nav-bg" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
    <!-- / Header Background Image -->

    <!-- User Profile Card -->
    <a-card :bordered="false" class="card-profile-head" :bodyStyle="{padding: 0,}">
      <template #title>
        <a-row type="flex" align="middle">
          <a-col :span="24" :md="12" class="col-info">
            <div class="avatar-info">
              <h4 class="font-semibold m-0">{{ page }}</h4>
<!--              <p>CEO / Co-Founder</p>-->
            </div>
          </a-col>
          <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
            <a-radio-group  size="small">
              <a-radio-button value="overview">{{ page.toUpperCase() }}</a-radio-button>
<!--              <a-radio-button value="teams">TEAMS</a-radio-button>-->
<!--              <a-radio-button value="projects">PROJECTS</a-radio-button>-->
            </a-radio-group>
          </a-col>
        </a-row>
      </template>
    </a-card>
    <!-- User Profile Card -->
  </div>
</template>

<script>
export default {
  name: "PageBanner",
  props: ["image", "page"]
}
</script>

<style scoped>

</style>