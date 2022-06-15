<template>
    <section>
        <div :style="image" class="image"></div>
    </section>
</template>

<script>
import { computed } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core";
import { apodsService } from "../services/ApodsService"
import { AppState } from "../AppState";
    export default {
        name: 'Home',
        image: '',
        setup(){
            onMounted(async () =>{
                try {
                    await apodsService.getApod()
                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
                return {
                    image: computed(() => AppState.image)
                } 
            })
            
        }
    };
</script>

<style>
    .image {
        height: 100vh;
        background-repeat: no-repeat;
        object-fit: cover;
    }
</style>