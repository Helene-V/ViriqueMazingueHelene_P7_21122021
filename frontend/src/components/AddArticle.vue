<template>
  <div class="submit-form mt-5">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="article.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="article.description"
          name="description"
        />
      </div>

      <div class="form-group">
      <input 
        type="file"
        accept="image/*"
        ref="file"
        @change="onSelect()" />
      </div>

      <button @click="saveArticle" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newArticle">Add</button>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "add-article",
  data() {
    return {
      article: {
        id: null,
        title: "",
        description: "",
        media: undefined,
        previewMedia: undefined,
        //media: null
        //media: "",
      },
      submitted: false
    };
  },
  methods: {
    onSelect() { //Test récupération fichier image
      //this.media = event.target.files[0];
      this.media = this.$refs.file.files[0];
      this.previewMedia = URL.createObjectURL(this.media);
    },

    saveArticle() {
      const data = {
        title: this.article.title,
        description: this.article.description,
        media: this.article.media,
      };

      ArticleDataService.create(data)
        .then(response => {
          this.article.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newArticle() {
      this.submitted = false;
      this.article = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>