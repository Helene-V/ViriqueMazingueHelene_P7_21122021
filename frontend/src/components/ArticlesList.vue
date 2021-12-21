<template>
  <div class="list row mt-5">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="row gx-4 gx-lg-5">
      <h4>Posts</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(article, index) in articles"
          :key="index"
          @click="setActiveArticle(article, index)"
        >
        <div>
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">{{ article.title }}</h2>
              <p class="card-text">{{ article.description }}</p>
            </div>
            <div class="card-footer"><a class="btn btn-primary btn-sm" href="#!">Commentaires</a></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentArticle">
        <h4>Post</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentArticle.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentArticle.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentArticle.published ? "Published" : "Pending" }}
        </div>

        <router-link :to="'/articles/' + currentArticle.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Post...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleDataService from "../services/ArticleDataService";

export default {
  name: "articles-list",
  data() {
    return {
      articles: [],
      currentArticle: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    retrieveArticles() {
      ArticleDataService.getAll()
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveArticles();
      this.currentArticle = null;
      this.currentIndex = -1;
    },

    setActiveArticle(article, index) {
      this.currentArticle = article;
      this.currentIndex = index;
    },
    
    searchTitle() {
      ArticleDataService.findByTitle(this.title)
        .then(response => {
          this.articles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveArticles();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>