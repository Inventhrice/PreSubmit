<script>
export default {
    /* export const Condition = {
    conditionName: String,
    fName: String,
    isEmpty: Boolean,
    isExist: Boolean,
    isFolder: Boolean,
    extension: String,
    }; */
    props: {
        input: {type: Object, required: true}
    }
}
</script>

<template>
<h2>{{ input.conditionName }}</h2>
<input
  type="checkbox"
  :value="input.isFolder"
  @input="input.isFolder = !input.isFolder">
<label v-if="input.isFolder">Name of Folder</label>
<label v-else>Name of File</label>


</template>