<template>
    <el-menu
        default-active="0" open="1"
        :default-openeds="openSubmenus">
        <el-submenu index="1">
            <template slot="title">
                <span>Planets</span>
            </template>
            <el-menu-item 
                v-for="(planet, index) in planets" 
                :key="index" index="1-1"
                @click="search(planet)">
                {{ planet }}
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="2"
            @click="search('stars')">
            <span>Stars</span>
        </el-menu-item>
        <el-menu-item index="3"
            @click="search('moons')">
            <span>Moons</span>
        </el-menu-item>
        <el-menu-item index="4"
            @click="search('galaxies')">
            <span>Galaxies</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';

export default {
    data () {
        return {
            openSubmenus: ['0']
        }
    },
    computed: mapState({
        planets: 'planets'
    }),
    methods: {
        search (searchTerm) {
            if (searchTerm) {
                if (this.$route.name == 'search') {
                    store.dispatch('search', searchTerm);
                    // This has to be done to update the correct url in the url bar
                    this.$router.push(`/search/${searchTerm}`);
                } else {
                    this.$router.push(`/search/${searchTerm}`);
                }
            }
        }
    }
}
</script>
