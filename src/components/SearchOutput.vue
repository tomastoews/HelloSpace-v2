<template>
    <div class="search">
        <el-row>
            <div v-masonry transition-duration="0.1s" item-selector=".item">
                <el-col class="item" v-for="(item, index) in searchResults"
                        :key="index"
                        :xs="12"
                        :sm="12"
                        :md="8"
                        :lg="8"
                        :xl="8">
                    <el-card
                        class="box-card"
                        shadow="never"
                        :body-style="{ padding: '0px' }"
                        style="margin:20px 20px 0 20px;">
                        <img 
                            class="image"
                            draggable="false"
                            :src="item.preview_image"/>
                        <div style="padding: 14px;">
                            <span>{{ item.title }}</span>
                            <div class="bottom clearfix">
                                <el-button @click="openItem(item.id)" type="text" class="button">Show</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </div>
        </el-row>
    </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
    data () {
        return {}
    },
    computed: mapState({
        searchResults: 'searchResults'
    }),
    methods: {
        openItem (itemId) {
            this.$router.push(`/item/${itemId}`);
        }
    },
    mounted() {
        const searchTerm = this.$route.params.searchTerm;
        if (searchTerm) {
            store.dispatch('search', searchTerm);
        }
    }
}
</script>

<style scoped>
    .el-row {
        padding-bottom: 20px;
    }
    .el-card img {
        width: 100%;
    }
</style>