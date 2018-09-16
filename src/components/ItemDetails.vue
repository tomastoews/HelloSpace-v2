<template>
    <div class="item-details">
        <el-row v-if="item">
            <el-col class="details-container" :md="15" :lg="15" :xl="15">
                <h1 class="title">{{ item.title }}</h1>
                <p>{{ item.description }}</p>
                <h3 v-if="item.keywords">Keywords</h3>
                <p v-if="item.keywords">
                    <el-button 
                        class="keyword"
                        v-for="(keyword, index) in item.keywords" 
                        :key="index"
                        @click="openKeyword(keyword)">
                        {{ keyword }}
                    </el-button>
                </p>
            </el-col>
            <el-col :md="9" :lg="9" :xl="9">
                <img draggable="false" class="image" :src="item.image" alt="Image">
            </el-col>
        </el-row>
    </div>
</template>

<script>
import store from '../store';

export default {
    data () {
        return {
            item: ''
        }
    },
    methods: {
        openKeyword(keyword) {
            this.$router.push(`/search/${keyword}`);
        }
    },
    mounted() {
        const id = this.$route.params.id;
        store.dispatch('searchItem', id)
        .then(item => this.item = item)
    }
}
</script>

<style scoped>
    .item-details {
        height: 100%;
        padding: 20px;
    }
    h1 {
        margin: 0;
    }
    h3 {
        margin: 0;
    }
    .image {
        width: 100%;
    }
    .details-container {
        padding-right: 20px;
    }
    .keyword {
        margin-bottom: 10px;
    }
</style>
