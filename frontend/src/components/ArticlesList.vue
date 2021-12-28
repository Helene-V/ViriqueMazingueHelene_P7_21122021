<template>
  <div class="list row mt-5">
    <h1 class="pr-5">News Feed</h1>
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
          <font-awesome-icon icon="search" />
          </button>
        </div>
      </div>
    </div>
    <div class="row gx-4 gx-lg-5">
      <ul class="b-list-group">
        <li class="b-list-group-item mt-2"
          :class="{ active: index == currentIndex }"
          v-for="(article, index) in articles.slice().reverse()"
          :key="index"
          @click="setActiveArticle(article, index)"
        >
        <div>
          <div class="card h-100" style="width: 48rem;">
            <div class="card-body">
              <h2 class="card-title">{{ article.title }}</h2>
              <p class="card-text">{{ article.description }}</p>
              <div v-if="file">
                  <img :src="path" />
              </div>
            </div>
            <div class="card-footer">
              <a class="btn btn-info btn-sm" href="#!"><font-awesome-icon icon="comments" /></a>                 
            <div class="btn btn-sm" v-if="currentArticle">
              <router-link :to="'/articles/' + currentArticle.id" class="badge badge-warning">Edit</router-link>
            </div>
            </div>
            </div>
          </div>
        </li>
      </ul>
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
  max-width: 750px;
  margin: auto;
}

ul {
  list-style-type: none;
}

.b-list-group {
  padding: 0;
}
</style>