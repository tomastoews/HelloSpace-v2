import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import { Notification } from 'element-ui';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        planets: [
            'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'
        ],
        searchResults: [],
        showLoadingAnimation: false
    },
    mutations: {
        setSearchResults (state, searchResults) {
            // Map items to cleaner array
            const data = searchResults.data.collection.items.map(item => {
                return {
                    id: item.data[0].nasa_id,
                    title: item.data[0].title,
                    description: item.data[0].description,
                    keywords: item.data[0].keywords,
                    preview_image: item.links[0].href,
                    images_link: item.href,
                    media_type: item.data[0].media_type,
                    date_created: item.data[0].date_created
                }
            });
            state.searchResults = data;
        },
        clearSearchResults (state) {
            state.searchResults = [];
        },
        setLoadingAnimation (state, value) {
            state.showLoadingAnimation = value;
        }
    },
    actions: {
        search ({commit}, searchTerm) {
            const mediaType = 'image';
            const baseURL = 'https://images-api.nasa.gov';
            
            commit('clearSearchResults');
            commit('setLoadingAnimation', true);
            axios.get(`${baseURL}/search?q=${searchTerm}&media_type=${mediaType}`)
            .then(response => {
                if (response.data.collection.items.length == 0) {
                    Notification.error({
                        title: 'Nothing found',
                        message: 'No results were found.',
                        duration: 0
                    });
                } else {
                    commit('setSearchResults', response)
                }
            })
            .catch(() => {
                Notification.error({
                    title: 'Error',
                    message: 'An error has occurred. Please try again.'
                });
            })
            .then(() => commit('setLoadingAnimation', false))
        },
        searchItem ({commit}, id) {
            return new Promise((resolve) => {
                const baseURL = 'https://images-api.nasa.gov';

                commit('setLoadingAnimation', true);
                axios.get(`${baseURL}/search?nasa_id=${id}`)
                .then(response => {
                    // Check if the requested item was found
                    if (response.data.collection.items.length == 0) {
                        Notification.error({
                            title: 'Not found',
                            message: 'The requested item was not found.',
                            duration: 0
                        });
                    } else {
                        const data = response.data.collection.items[0].data[0];
                        const imageLink = response.data.collection.items[0].links[0].href;
                        resolve({
                            id: data.nasa_id,
                            title: data.title,
                            description: data.description,
                            keywords: data.keywords,
                            preview_image: data.href,
                            image: imageLink,
                            media_type: data.media_type,
                            date_created: data.date_created
                        });
                    }
                })
                .catch(() => {
                    Notification.error({
                        title: 'Error',
                        message: 'An error has occurred. Please try again.',
                        duration: 0
                    });
                })
                .then(() => commit('setLoadingAnimation', false))
            })
        }
    }
});

export default store;