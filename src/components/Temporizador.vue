
<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />

        <button class="button" @click="iniciar">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
export default defineComponent({
    name: 'Temporizador',
    components: {
        Cronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0
        }
    },
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8);
        }
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++;
            }, 1000);
            console.log('Iniciando tarefa');
        },
        finalizar() {
            clearInterval(this.cronometro);
            console.log('Parando tarefa');
        }
    }
});
</script>