<template>
  <div>
    <h1>User Feed</h1>
    <div id="components-demo">
      <post v-bind:texts="posts"></post>
    </div>
    <p>authentication token: {{auth_token}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import post from '@/components/Post.vue'


export default {
  name: 'feed',
  data () {
    return {
      posts: [{
        "admin": 'false',
        "email": "harpo@curatus.com",
        "registered_on": "Fri, 25 May 2018 07:59:17 GMT",
        "user_id": '2'
      }, { "admin" : "whatchathink"
      }],
      auth_token: '',
      auth: ''
    }
  },
  created() {
      this.auth_token = this.$route.params.auth_token;
      this.auth = 'Bearer ' + this.auth_token.replace(/^"(.*)"$/, '$1');
 
      axios.get('http://ec2-52-23-186-226.compute-1.amazonaws.com:5000/auth/feed',
        {
          headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.auth
          }
        }).then(res => {
          console.log('response: ', JSON.stringify(res.data, null, 2))
          this.posts = res.data.data.posts
      }).catch(error => {
        console.log('Error login')
        alert('Error displaying status.')
        console.log(error)
      })
  },
  methods: {
  },
  components: {
               'post': post
              }
}
</script>
<stlye>
</style>
