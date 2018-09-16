<template>
  <div id="app">
    <Header/>
    <el-row type="flex" justify="center">
      <el-col :sm="24" :md="24" :lg="16" :xl="16">
        <div id="content" v-loading="showLoadingAnimation">
          <el-card class="container-card" :body-style="{ padding: '0' }">
            <el-row style="height:100%;">
              <el-col :xs="24" :sm="5" :md="5" :lg="5" :xl="5">
                <sidebar/>
              </el-col>
              <el-col :xs="24" :sm="19" :md="19" :lg="19" :xl="19">
                <router-view/>
              </el-col>
            </el-row>
          </el-card>
        </div>
        <Footer/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Footer
  },
  computed: mapState({
    showLoadingAnimation: 'showLoadingAnimation'
  })
}
</script>

<style>
  @import 'assets/css/styles.css';
</style>