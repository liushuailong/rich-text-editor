<template>
  <div class="text:editor">
    <EditorToolbar
      v-model:type="selectedType"
      v-model:toggles="selectedToggles"
      v-model:wrap="selectedWrap"
      v-model:viewhtml="viewHTML"
      :items = "toolbarItems"
    />
<!--    <div class="editor-content">-->
<!--      Type/Block: {{ selectedType }}<br/>-->
<!--      Toggle Bartons: {{ selectedToggles }}<br/>-->
<!--      In Wrap Elements: {{ selectedWrap }},-->
<!--      View HTML: {{viewHTML}},-->
<!--    </div>-->
    <EditorContent :toggles="selectedToggles" />
  </div>
</template>

<script>
import EditorToolbar from "../components/editor/EditorToolbar.vue";
import EditorContent from "../components/editor/EditorContent.vue";
export default {
  name: "ViewTextEditor",
  data()  {
    return {
      selectedType: 'p',
      selectedToggles: [],
      selectedWrap: '',
      viewHTML: false,
      toolbarItems: []
    }
  },
  components: {
    EditorContent,
    EditorToolbar,
  }
}
</script>

<style scoped>

</style>