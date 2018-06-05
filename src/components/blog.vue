<template>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl0DbCk8qtvRIWzUEUNYnnDTgB2BvZfWyFPlAnU5VE-47ZAXpUoQ">
    <div v-for="(value, key) in status">
      {{ key }}: {{ value }}
    </div>
    <p>authentication token: {{auth_token}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'blog',
  data () {
    return {
      },
    }
  },
  created() {
      this.auth_token = this.$route.params.auth_token;
      this.auth = 'Bearer ' + this.auth_token.replace(/^"(.*)"$/, '$1');
 
      axios.get('http://ec2-52-23-186-226.compute-1.amazonaws.com:5000/auth/status',
        {
          headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': this.auth
          }
        }).then(res => {
          console.log('response: ', JSON.stringify(res.data, null, 2))
          this.status = res.data.data
      }).catch(error => {
        console.log('Error login')
        alert('Error displaying status.')
        console.log(error)
      })
  },
  methods: {
  }
}
</script>
<stlye>
</style>
