<script>
export default{
    props:{
        conditionName: {required: true, type: String},
        fName: {required: true, type: String}, //file/folder name
        isEmpty: {required: true, type: Boolean},
        isExist: {required: true, type: Boolean},
        isFolder: {required: true, type: Boolean},
        extension: {required: true, type: String}
    },
    emits: ['update:isFolder'],
    methods:{
        toggleFileFolder(){
            this.isFolder = !this.isFolder
        }
    }
}
</script>

<template>
<h2>{{ conditionName }}</h2>
<input
  type="checkbox"
  :value="isFolder"
  @input="$emit('update:isFolder', $event.target.value)">
<label v-if="isFolder">Name of Folder</label>
<label v-else>Name of File</label>


</template>