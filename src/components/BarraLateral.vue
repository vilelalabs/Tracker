<template>
    <header>
        <h1>
            <img src="../assets/logo.png">
        </h1>
        <button class="button" @click="alterarTema">
            {{ textoBotao }}
        </button>
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data() {
        return {
            modoEscuroAtivo: false
        }
    },
    computed: {
        textoBotao(): string {
            return this.modoEscuroAtivo ? 'Desativar Modo Escuro' : 'Ativar Modo Escuro';
        }
    },
    methods: {
        alterarTema() {
            this.modoEscuroAtivo = !this.modoEscuroAtivo;
            this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
        }
    }
});

</script>

<style scope>
header{
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    padding: 1rem;
    text-align: center;

    @media only screen and (max-width: 768px){
        padding: 2.5rem;
        height: auto;
    }
}
</style>