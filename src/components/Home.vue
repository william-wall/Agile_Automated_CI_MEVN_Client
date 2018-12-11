<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/gallerys" class="info">Explore Gallery</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/gallery/new" class="info">Submit Car</v-btn>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
          indeterminate
          class="primary--text"
          :width="7"
          :size="70"
          v-if="loading"></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2" v-if="!loading">
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)">
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <br>
        <h1>Welcome to © AutoReview 2k18 </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import ReviewsService from '@/services/ReviewsService'

  export default {
    name: 'reviews',
    data () {
      return {
        reviews: [],
        searchQuery: ''
      }
    },
    mounted () {
      this.getReviews()
    },
    computed: {
      filteredUsers: function () {
        var self = this
        return self.reviews.filter(function (review) {
          return review.title.indexOf(self.searchQuery) !== -1 || review.description.indexOf(self.searchQuery) !== -1
        })
      },
      meetups () {
        return this.$store.getters.featuredMeetups
      },
      loading () {
        return this.$store.getters.loading
      },
      methods: {
        async getReviews () {
          const response = await ReviewsService.fetchReviews()
          this.reviews = response.data.reviews
        },
        async deleteReview (id) {
          const $this = this
          $this.$swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function () {
            ReviewsService.deleteReview(id)
            $this.$router.go({
              path: '/'
            })
          })
        },
        onLoadMeetup (id) {
          this.$router.push('/meetups/' + id)
        }
      }
    }
  }
</script>

<style scoped>
  .color{
    background: aqua;
  }
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
  .table-wrap {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }

  table th, table tr {
    text-align: left;
  }

  table thead {
    background: #f2f2f2;
  }

  table tr td {
    padding: 10px;
  }

  table tr:nth-child(odd) {
    background: #f2f2f2;
  }

  table tr:nth-child(1) {
    background: #4d7ef7;
    color: #fff;
  }

  a {
    color: #4d7ef7;
    text-decoration: none;
  }

  a.add_review_link {
    background: #4d7ef7;
    color: #fff;
    padding: 10px 80px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
</style>
