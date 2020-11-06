<template>
  <div>
<h1>hahaahahhah</h1>
<div>
  <el-input v-model="title"></el-input>
</div>
  <quill-editor
    ref="myQuillEditor"
    v-model="connent"
    :options="editorOption"
    @blur="onEditorBlur($event)"
    @focus="onEditorFocus($event)"
    @ready="onEditorReady($event)"
  />
  <el-button @click="tijiao">提交</el-button>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  name:"fuwenben",
  data(){
    return{
   connent:"",
   editorOption:{},
   title:""
    }
  },
  components: {
    quillEditor
  },
   methods: {
      onEditorBlur(quill) {
        console.log('editor blur!', quill)
      },
      onEditorFocus(quill) {
        console.log('editor focus!', quill)
      },
      onEditorReady(quill) {
        console.log('editor ready!', quill)
      },
     tijiao(){
       let data={
         title:this.title,
         connent:this.connent
       }
       this.$http.tijiao(data).then((res)=>{
         console.log("tijiao",res)
       })
     }
    }

}


</script>

<style lang='scss' >

</style>
