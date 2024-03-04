<template>
    <img style="height: 20vh;" :src="url" alt=""/>
</template>

<script>
import { storage } from './components/firebase';
import { ref, getDownloadURL } from "firebase/storage";

export default {
    props: {
        path: String,
    },
    data() {
        return {
            url: 'https://via.placeholder.com/140*100',
        };
    },
    mounted() {
        this.fetchImage();
    },
    methods: {
        fetchImage() {
            getDownloadURL(ref(storage, this.path))
            .then((downloadUrl) => {
                this.url = downloadUrl;
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
                // Handle error, for example, display a placeholder image or show an error message.
            });
        },
    },
};
</script>
