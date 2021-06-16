<template>
  <PdfPage pdfPath="resume/alexander_parent_resume.pdf">
  </PdfPage>
</template>

<script>
  import PdfPage from '@/components/PdfPage.vue'

  export default {
    name: 'resume',
    components: {
      PdfPage
    }
  }
</script>
