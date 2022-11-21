<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de nova tarefa ">
                <input type="text" class="input" placeholder="Qual a tarefa deseja iniciar?" v-model="descricao" />
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>

    </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
export default defineComponent({
    name: 'Formulario',
    emits: ['aoSalvarTarefa'],
    components: {
        Temporizador
    },
    data() {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number) {
            this.$emit('aoSalvarTarefa', {
                descricao: this.descricao,
                duracaoEmSegundos: tempoDecorrido
            });
            this.descricao = '';
        }
    }
});
</script>

<style>
.formulario {
    color : var(--text-primary);
    background: var(--bg-primary);
}

</style>