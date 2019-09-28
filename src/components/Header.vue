<template>
<div id="header">
    <el-row>
        <header>
            <el-row span="24" type="flex" justify="center" style="padding: 7rem 0 2rem 0;">
                <el-col :xs="10" :sm="8" :md="6" :lg="5" :xl="4">
                    <router-link to="/">
                        <img id="logo" draggable="false" src="../assets/hellospace_logo.png"/>
                    </router-link>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center">
                <el-col :xs="18" :sm="12" :md="12" :lg="10" :xl="10"
                        style="padding:0 0 12rem 0;">
                    <el-input
                        class="inline-input"
                        style="width:100%;"
                        v-model="searchInput"
                        placeholder="Suchen..."
                        size="large"
                        clearable
                        :trigger-on-focus="false">
                        <el-button 
                            @click="submitForm" 
                            slot="append" 
                            icon="el-icon-search">
                        </el-button>
                    </el-input>
                </el-col>
            </el-row>
        </header>
    </el-row>
</div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            searchInput: null
        }
    },
    computed: mapState({
        autoFillSugestions: 'autoFillSugestions'
    }),
    methods: {
        submitForm(e) {
            e.preventDefault();
            const searchTerm = this.searchInput;
            if (searchTerm) {
                if (this.$route.name == 'search') {
                    store.dispatch('search', searchTerm);
                    // This has to be done to update the correct url in the url bar
                    this.$router.push(`/search/${searchTerm}`);
                } else {
                    this.$router.push(`/search/${searchTerm}`);
                }
            } else {
                this.$notify.warning({
                    title: 'Invalid input',
                    message: 'Please enter something.'
                })
            }
        },
        routerLink(link) {
            this.$router.push(link);
        }
    }
}
</script>

<style scoped>
    #header {
        background-image: url('../assets/header.jpeg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    #logo {
        max-width: 500px;
        width: 100%;
    }
</style>
